import { Text, View, StyleSheet } from "react-native"

export const EmptyList = () => {
  return (
    <View style={container}>
      <Text style={text}>Empty List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 36,
    fontWeights: 'bold',
    color: '#000',
    padding: 10,
    backgroundColor: 'transparent',
  },
});

const container = StyleSheet.compose(styles.container);
const text = StyleSheet.compose(styles.text);

export default EmptyList;
