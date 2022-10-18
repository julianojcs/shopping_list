import React from 'react'
import { View, Text, Switch, Pressable } from "react-native";
import * as styles from "./styles";
import Toast from "react-native-toast-message";

const ItemContainer = ({ item, onValueChange, onDelete }) => {
  const { name, quantity, isSelected } = item;

  const handleDelete = (item) => {
    onDelete();
  };

  return (
    <Pressable
      onLongPress={() => handleDelete(item)}
      delayLongPress={800}
      style={({ pressed }) =>
        pressed
          ? styles.presseble
          : isSelected
          ? styles.containerSelected
          : styles.containerNotSelected
      }
    >
      {({ pressed }) => {
        return !pressed ? (
          <>
            <Switch
              trackColor={{ true: "#81b0ff", false: "#767577" }}
              thumbColor={isSelected ? "#01579b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onValueChange}
              value={isSelected}
            />
            <View style={styles.itemContainer}>
              <Text style={[styles.text]}>{name}</Text>
              <Text style={[styles.text]}>{quantity}</Text>
            </View>
          </>
        ) : (
          <Text style={styles.text}>Long press to Delete</Text>
        );
      }}
    </Pressable>
  );
};

export default ItemContainer