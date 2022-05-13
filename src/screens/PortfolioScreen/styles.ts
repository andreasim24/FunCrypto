import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  image: {
    height: 175,
    resizeMode: "contain",
    marginTop: 30
  },
  balanceContainer: {
    width: "100%",
    marginVertical: 20
  },
  label: {
    ...FONTS.h3,
    color: COLORS.lightPurple
  },
  balance: {
    ...FONTS.h1
  }
});

export default styles;
