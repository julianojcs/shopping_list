import React, { useState, useEffect } from 'react'
import {
  Keyboard,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import * as styles from "./styles";
import EmptyList from "./EmptyList";
import ItemContainer from "./ItemContainer";

const FlatListPage = () => {
  const [data, setData] = useState(
    [].sort((a, b) => a.isSelected - b.isSelected)
  );
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const showToast = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const selectedIds = () => {
    return data.filter((item) => item.isSelected).map((item) => item.id);
  };

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
    } else {
      showToast("Please enter item name and quantity");
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
    <View style={container}>
      <View style={addContainer}>
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
