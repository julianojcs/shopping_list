import { useState, useEffect, useCallback } from 'react'
import {
  Keyboard,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import * as styles from "./styles";
import EmptyList from "./EmptyList";
import ItemContainer from "./ItemContainer";
import Toast from "react-native-toast-message";

const FlatListPage = () => {
  const [data, setData] = useState(
    [].sort((a, b) => a.isSelected - b.isSelected)
  );
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const selectedIds = useCallback(() => {
    return data.filter((item) => item.isSelected).map((item) => item.id);
  }, [data]);

  const handleSelectedIds = (selectedId) => {
    if (data.find((element) => element.id === selectedId)) {
      const newData = data.map((element) => {
        if (element.id === selectedId) {
          element.isSelected = !element.isSelected;
        }
        return element;
      });
      setData(newData.sort((a, b) => a.isSelected - b.isSelected));
    }
  };

  const handleDelete = (selectedId) => {
    if (data.find((element) => element.id === selectedId)) {
      const newData = data.filter((element) => element.id !== selectedId);
      setData(newData.sort((a, b) => a.isSelected - b.isSelected));
    }
  };

  const handleAdd = () => {
    if (itemName && quantity) {
      const id =
        data.length === 0 ? 1 : data.sort((a, b) => b.id - a.id)[0].id + 1;

      const newData = [
        ...data,
        { id: id, name: itemName, quantity: quantity, isSelected: false },
      ];
      setData(newData.sort((a, b) => a.isSelected - b.isSelected));
      setItemName("");
      setQuantity("");
      Keyboard.dismiss();
      Toast.show({
        type: "success",
        text1: "Successfully added!",
        text2: `Item "${itemName}" added.`,
        position: "bottom",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Warning!",
        text2: "Please enter item name and quantity",
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

  useEffect(() => {
    console.log("selectedIds", selectedIds());
  }, [selectedIds]);

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.text}>Shopping List</Text>
        <View style={styles.inputs}>
          <TextInput
            style={[styles.input, styles.inputName]}
            placeholder="Item name"
            value={itemName}
            onChangeText={(text) => setItemName(text)}
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
    </View>
  );
};

export default FlatListPage;
