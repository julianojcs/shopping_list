import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 5,
    backgroundColor: "#f7e0e0",
    height: "100%",
  },
  listContainer: {
    flex: 1,
    flexBasis: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  addContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#DD5353",
    borderRadius: 8,
    marginBottom: 10,
  },
  deleteContainer: {
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  inputs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  input: {
    backgroundColor: "#f7e0e0",
    padding: 6,
    borderRadius: 8,
    fontSize: 24,
  },
  inputName: {
    flex: 1,
  },
  inputQuantity: {
    width: "30%",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#01579b",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
  },
});

export const container = StyleSheet.compose(styles.container);
export const listContainer = StyleSheet.compose(styles.listContainer);
export const addContainer = StyleSheet.compose(styles.addContainer);
export const deleteContainer = StyleSheet.compose(styles.deleteContainer);
export const inputs = StyleSheet.compose(styles.inputs);
export const input = StyleSheet.compose(styles.input);
export const inputQuantity = StyleSheet.compose(styles.inputQuantity);
export const inputName = StyleSheet.compose(styles.inputName);
export const button = StyleSheet.compose(styles.button);
export const buttonText = StyleSheet.compose(styles.buttonText);
export const text = StyleSheet.compose(styles.text);
