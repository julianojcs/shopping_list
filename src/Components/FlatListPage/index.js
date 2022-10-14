import React, { useState, useEffect } from 'react'
import {Keyboard, StyleSheet, FlatList, View, TextInput, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import EmptyList from './EmptyList';
import ItemContainer from './ItemContainer';

const FlatListPage = () => {
  const [data, setData] = useState([].sort((a, b) => a.isSelected - b.isSelected));
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