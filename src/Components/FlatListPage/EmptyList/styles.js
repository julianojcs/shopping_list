import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: colors.transparent,
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
    color: colors.primary,
    padding: 10,
    backgroundColor: colors.transparent,
  },
});

export const container = StyleSheet.compose(styles.container);
export const text = StyleSheet.compose(styles.text);
