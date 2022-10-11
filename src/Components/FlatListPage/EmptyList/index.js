import { Text, View } from "react-native"
import * as styles from "./styles"

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty List</Text>
    </View>
  );
};

export default EmptyList;
