import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "transparent",
    flex: 1,
    flexBasis: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    height: "100%",
  },
  text: {
    fontSize: 36,
    fontWeights: "bold",
    color: "#01579b",
    padding: 10,
    backgroundColor: "transparent",
  },
});

export const container = StyleSheet.compose(styles.container);
export const text = StyleSheet.compose(styles.text);
