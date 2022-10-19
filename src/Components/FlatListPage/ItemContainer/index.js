import React from 'react'
import { View, Text, Switch, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as styles from "./styles";
import colors from "../../../../assets/colors";

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
              trackColor={{
                true: colors.lightSecondary,
                false: colors.lightCarbon,
              }}
              thumbColor={isSelected ? colors.secondary : colors.darkWhite}
              ios_backgroundColor={colors.lightCarbon}
              onValueChange={onValueChange}
              value={isSelected}
            />
            <View style={styles.itemContainer}>
              <Text style={[styles.text]}>{name}</Text>
              <Text style={[styles.text]}>{quantity}</Text>
            </View>
            <Icon
              style={[styles.icon]}
              name={"trash-alt"}
              onPress={() => handleDelete(item)}
            />
          </>
        ) : (
          <Text style={styles.text}>Long press to Delete</Text>
        );
      }}
    </Pressable>
  );
};

export default ItemContainer