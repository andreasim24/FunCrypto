import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

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
  label: {
    fontSize: 18,
    color: "#707070"
  },
  title: {
    ...FONTS.h2,
    color: COLORS.lightPurple,
    marginVertical: 15
  }
});

export default styles;
