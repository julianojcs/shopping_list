import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 5,
    backgroundColor: colors.darkWhite,
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
    backgroundColor: colors.primary,
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
    backgroundColor: colors.darkWhite,
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
    backgroundColor: colors.secondary,
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textColor,
    textAlign: "center",
  },
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  text: {
    fontSize: 36,
    fontWeight: "600",
    color: colors.textColor,
    textAlign: "center",
    marginBottom: 12,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    shadowColor: colors.darkGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonYes: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    backgroundColor: colors.danger,
    marginEnd: 5,
  },
  buttonNo: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    backgroundColor: colors.secondary,
    marginStart: 5,
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
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
export const buttonDanger = StyleSheet.compose(styles.buttonDanger);
export const buttonText = StyleSheet.compose(styles.buttonText);
export const text = StyleSheet.compose(styles.text);

export const centeredView = StyleSheet.compose(styles.centeredView);
export const modalView = StyleSheet.compose(styles.modalView);
export const buttonView = StyleSheet.compose(styles.buttonView);
export const buttonNo = StyleSheet.compose(styles.buttonNo);
export const buttonYes = StyleSheet.compose(styles.buttonYes);
export const textStyle = StyleSheet.compose(styles.textStyle);
export const modalText = StyleSheet.compose(styles.modalText);