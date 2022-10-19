import { StyleSheet } from "react-native"
import colors from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  containerNotSelected: {
    backgroundColor: colors.primary,
  },
  containerSelected: {
    backgroundColor: colors.lightGray,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    fontWeights: "bold",
    paddingVertical: 10,
    paddingRight: 10,
    backgroundColor: colors.transparent,
    color: colors.textColor,
  },
  icon: {
    fontSize: 24,
    padding: 10,
    color: colors.carbon,
    backgroundColor: colors.danger,
  },
  presseble: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.danger,
    elevation: 5,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export const containerNotSelected = StyleSheet.flatten([
  styles.container,
  styles.containerNotSelected,
]);
export const containerSelected = StyleSheet.flatten([
  styles.container,
  styles.containerSelected,
]);
export const itemContainer = StyleSheet.compose(styles.itemContainer);
export const container = StyleSheet.compose(styles.container);
export const text = StyleSheet.compose(styles.text);
export const icon = StyleSheet.compose(styles.icon);
export const presseble = StyleSheet.compose(styles.presseble);
