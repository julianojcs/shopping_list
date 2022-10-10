import React, { useState, useEffect } from 'react'
import {Keyboard, StyleSheet, FlatList, View, TextInput, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import EmptyList from './EmptyList';
import ItemContainer from './ItemContainer';

const FlatListPage = () => {
  const [data, setData] = useState([
    {id: 1, name: 'Banana', quantity: 10, isSelected: false},
    {id: 2, name: 'Apple', quantity: 5, isSelected: false},
    {id: 3, name: 'Orange', quantity: 6, isSelected: false},
    {id: 4, name: 'Mango', quantity: 2, isSelected: false},
    {id: 5, name: 'Beef', quantity: '2kg', isSelected: true},
    {id: 6, name: 'Chicken', quantity: '1kg', isSelected: false},
    {id: 7, name: 'Pork', quantity: '1kg', isSelected: false},
    {id: 8, name: 'Fish', quantity: '3kg', isSelected: false},
    {id: 9, name: 'Rice', quantity: '5kg', isSelected: true},
    {id: 10, name: 'Noodle', quantity: 2, isSelected: true},
    {id: 11, name: 'Bread', quantity: 10, isSelected: false},
    {id: 12, name: 'Egg', quantity: 12, isSelected: false},
    {id: 13, name: 'Milk', quantity: '3cx', isSelected: false},
    {id: 14, name: 'Cheese', quantity: '200g', isSelected: false},
    {id: 15, name: 'Butter', quantity: '500g', isSelected: false},
    {id: 16, name: 'Water', quantity: 2, isSelected: false},
    {id: 17, name: 'Coke', quantity: 12, isSelected: false},
    {id: 18, name: 'Pepsi', quantity: 6, isSelected: false},
    {id: 19, name: 'Sprite', quantity: 6, isSelected: true},
    {id: 20, name: 'Fanta', quantity: 6, isSelected: false},
    {id: 21, name: 'Tomato', quantity: '1kg', isSelected: false},
    {id: 22, name: 'Potato', quantity: '1kg', isSelected: false},
    {id: 23, name: 'Carrot', quantity: '500g', isSelected: false},
    {id: 24, name: 'Onion', quantity: '500g', isSelected: false},
    {id: 25, name: 'Cucumber', quantity: '250g', isSelected: false},
    {id: 26, name: 'Lettuce', quantity: 1, isSelected: false},
    {id: 27, name: 'Garlic', quantity: '500g', isSelected: true},
    {id: 28, name: 'Ginger', quantity: '100g', isSelected: true},
    {id: 29, name: 'Paprika', quantity: 1, isSelected: false},
    {id: 30, name: 'Cabbage', quantity: '500g', isSelected: false},
    {id: 31, name: 'Spinach', quantity: '400g', isSelected: false},
    {id: 32, name: 'Broccoli', quantity: 2, isSelected: false},
    {id: 33, name: 'Cauliflower', quantity: 1, isSelected: false},
    {id: 34, name: 'Corn', quantity: 6, isSelected: false},
    {id: 35, name: 'Pepper', quantity: 1, isSelected: false},
    {id: 36, name: 'Chili', quantity: 1, isSelected: false},
    {id: 37, name: 'Lemon', quantity: 12, isSelected: false},
  ].sort((a, b) => a.isSelected - b.isSelected));
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const showToast = (msg) => {
    ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
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
      const id = data.length === 0 ? 1 : data.sort((a, b) => b.id - a.id)[0].id + 1;

      const newData = [
        ...data,
        {id: id, name: itemName, quantity: quantity, isSelected: false},
      ];
      setData(newData.sort((a, b) => a.isSelected - b.isSelected));
      setItemName('');
      setQuantity('');
      Keyboard.dismiss()
    } else {
      showToast('Please enter item name and quantity');
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
    console.log('selectedIds', selectedIds())
  }, [data]);

  return (
    <View style={container}>
      <View style={addContainer}>
        <Text style={text}>Shopping List</Text>
        <View style={inputs}>
          <TextInput
            style={[input, inputName]}
            placeholder="Item name"
            value={itemName}
            onChangeText={text => setItemName(text)}
            keyboardType="default"
          />
          <TextInput
            style={[input, inputQuantity]}
            placeholder="100g"
            value={quantity}
            onChangeText={text => setQuantity(text)}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={button}
          onPress={() => handleAdd()}>
          <Text style={buttonText}>Add to List</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        styles={{flex: 1, height: '100%'}}
        data={data}
        onPress={(item) => handleSelectedIds(item.id)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedIds}
        ListEmptyComponent={<EmptyList/>}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 5,
    backgroundColor: '#f7e0e0',
    height: '100%',
  },
  addContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#DD5353',
    borderRadius: 8,
    marginBottom: 10,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    backgroundColor: '#f7e0e0',
    padding: 6,
    borderRadius: 8,
    fontSize: 24,
  },
  inputName: {
    flex: 1,
  },
  inputQuantity: {
    width: '30%',
    marginLeft: 10
  },
  button: {
    backgroundColor: '#01579b',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
});

const container = StyleSheet.compose(styles.container);
const addContainer = StyleSheet.compose(styles.addContainer);
const inputs = StyleSheet.compose(styles.inputs);
const input = StyleSheet.compose(styles.input);
const inputQuantity = StyleSheet.compose(styles.inputQuantity);
const inputName = StyleSheet.compose(styles.inputName);
const button = StyleSheet.compose(styles.button);
const buttonText = StyleSheet.compose(styles.buttonText);
const text = StyleSheet.compose(styles.text);

export default FlatListPage;