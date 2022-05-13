import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.base,
    padding: SIZES.padding,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 10,
    shadowColor: COLORS.lightPurple,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  rightContainer: {
    alignItems: "flex-end"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5
  },
  value: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18
  },
  symbol: {
    color: "#707070"
  }
});

export default styles;
