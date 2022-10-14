import React from 'react'
import { StyleSheet, View, Text, Switch, ToastAndroid, Pressable } from 'react-native'

const ItemContainer = ({item, onValueChange, onDelete}) => {
  const { name, quantity, isSelected } = item

  const showToast = (itemName) => {
    ToastAndroid.showWithGravity(
      `${itemName} deleted!!!`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const handleDelete = (item) => {
    onDelete()
    showToast(item.name)
  }

  return (
    <Pressable
      onLongPress={() => handleDelete(item)}
      delayLongPress={800}
      style={({ pressed }) => pressed ? presseble : isSelected ? containerSelected: containerNotSelected}
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
            <View style={itemContainer}>
              <Text style={[text]}>{name}</Text>
              <Text style={[text]}>{quantity}</Text>
            </View>
          </>
        ) : (
          <Text style={text}>Long press to Delete</Text>
        )
      }}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  containerNotSelected: {
    backgroundColor: '#B73E3E',
  },
  containerSelected: {
    backgroundColor: '#cb7f7f',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  text: {
    fontSize: 20,
    fontWeights: 'bold',
    color: '#000',
    padding: 10,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  presseble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4a76e5',
    elevation: 5,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

const containerNotSelected = StyleSheet.flatten([
  styles.container,
  styles.containerNotSelected,
])
const containerSelected = StyleSheet.flatten([
  styles.container,
  styles.containerSelected,
])

const itemContainer = StyleSheet.compose(styles.itemContainer);
const container = StyleSheet.compose(styles.container);
const text = StyleSheet.compose(styles.text);
const presseble = StyleSheet.compose(styles.presseble);

export default ItemContainer