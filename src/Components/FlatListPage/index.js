import { useState, useEffect, useCallback } from "react";
import {
  Keyboard,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Modal,
} from "react-native";
import * as styles from "./styles";
import EmptyList from "./EmptyList";
import ItemContainer from "./ItemContainer";
import Toast from "react-native-toast-message";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const FlatListPage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { getItem, setItem, removeItem } = useAsyncStorage(
    "@shopping-list:items"
  );

  const selectedIds = useCallback(() => {
    return data.filter((item) => item.isSelected).map((item) => item.id);
  }, [data]);

  const handleSelectedIds = async (selectedId) => {
    if (data.find((element) => element.id === selectedId)) {
      const newData = data
        .map((element) => {
          if (element.id === selectedId) {
            element.isSelected = !element.isSelected;
          }
          return element;
        })
        .sort((a, b) => a.isSelected - b.isSelected);
      setData(newData);
      await setItem(JSON.stringify(newData));
    }
  };

  const handleDeleteAll = async () => {
    await removeItem();
    setData([]);
    setModalVisible(false);
    Toast.show({
      type: "success",
      text1: "Data successfully deleted!",
      text2: `Now your list is empty.`,
      position: "bottom",
    });
  };

  const handleDelete = async (selectedId) => {
    if (!selectedId) {
      setModalVisible(true);
    } else {
      let item;
      let localData;
      const response = await getItem();
      if (response) {
        localData = JSON.parse(response);
      } else {
        localData = [];
      }
      const newData = localData
        .filter((element) => {
          item = element;
          return element.id !== selectedId;
        })
        .sort((a, b) => a.isSelected - b.isSelected);
      setData(newData);
      await setItem(JSON.stringify(newData));
      Toast.show({
        type: "success",
        text1: "Successfully deleted!",
        text2: `Item "${item?.name}" deleted.`,
        position: "bottom",
      });
    }
  };

  const handleAdd = async () => {
    try {
      if (name === "") {
        throw new Error("Item name is required!");
      }
      if (quantity === "") {
        throw new Error("Quantity is required!");
      }
      if (data.find((element) => element.name === name)) {
        throw new Error("Item already exists!");
      }
      const id =
        data.length === 0 ? 1 : data.sort((a, b) => b.id - a.id)[0].id + 1;
      const newData = [...data, { id, name, quantity, isSelected: false }].sort(
        (a, b) => a.isSelected - b.isSelected
      );
      setData(newData);
      await setItem(JSON.stringify(newData));

      setName("");
      setQuantity("");
      Keyboard.dismiss();

      Toast.show({
        type: "success",
        text1: "Successfully registered!",
        text2: `Added ${quantity} of ${name}.`,
        position: "bottom",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Registration Error.",
        text2: `${error.message}.`,
        position: "bottom",
      });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <ItemContainer
        item={item}
        onValueChange={() => handleSelectedIds(item.id)}
        onDelete={() => handleDelete(item.id)}
      />
    );
  };

  const handleFetchData = useCallback(async () => {
    try {
      let localData;
      const response = await getItem();
      if (response) {
        localData = JSON.parse(response);
      } else {
        localData = [];
      }
      setData(localData);
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({
          type: "error",
          text1: "Error loading Data.",
          text2: "The Data is corrupted! Please try again.",
          position: "bottom",
        });
      }
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    handleFetchData()
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [handleFetchData]);

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.text}>Shopping List</Text>
        <View style={styles.inputs}>
          <TextInput
            style={[styles.input, styles.inputName]}
            placeholder="Item name"
            value={name}
            onChangeText={(text) => setName(text)}
            keyboardType="default"
          />
          <TextInput
            style={[styles.input, styles.inputQuantity]}
            placeholder="100g"
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleAdd()}>
          <Text style={styles.buttonText}>Add to List</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.listContainer}>
          <ActivityIndicator size="large" color="#01579b" />
        </View>
      ) : (
        <>
          <FlatList
            styles={{ flex: 1, height: "100%" }}
            data={data}
            onPress={(item) => handleSelectedIds(item.id)}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedIds}
            ListEmptyComponent={<EmptyList />}
            horizontal={false}
          />
          {data.length > 0 && (
            <View style={styles.deleteContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#f44336" }]}
                onPress={() => handleDelete()}
              >
                <Text style={styles.buttonText}>Delete All</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Delete all data?</Text>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.buttonYes}
                onPress={() => handleDeleteAll()}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonNo}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FlatListPage;
