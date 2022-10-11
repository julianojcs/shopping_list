import { StyleSheet } from "react-native"

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

export const containerNotSelected = StyleSheet.flatten([
  styles.container,
  styles.containerNotSelected,
])
export const containerSelected = StyleSheet.flatten([
  styles.container,
  styles.containerSelected,
])
export const itemContainer = StyleSheet.compose(styles.itemContainer);
export const container = StyleSheet.compose(styles.container);
export const text = StyleSheet.compose(styles.text);
export const presseble = StyleSheet.compose(styles.presseble);
