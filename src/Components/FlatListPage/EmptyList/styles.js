import { StyleSheet } from 'react-native';

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

export const container = StyleSheet.compose(styles.container);
export const text = StyleSheet.compose(styles.text);
