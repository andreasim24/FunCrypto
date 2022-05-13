import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "white"
  },
  renderHeaderContainer: {
    width: "100%",
    height: 450
  },
  image: {
    height: 175,
    resizeMode: "contain"
  },
  imageBg: {
    flex: 1,
    justifyContent: "center"
  },
  userContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.padding,
    width: "100%"
  },
  priceAlertContainer: {
    width: "90%",
    marginTop: SIZES.padding,
    padding: SIZES.radius,
    borderRadius: 20,
    backgroundColor: COLORS.lightPurple,
    elevation: 10,
    shadowColor: COLORS.black,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: SIZES.padding * 5
  },
  name: {
    ...FONTS.h2,
    color: COLORS.white
  },
  email: {
    ...FONTS.body4,
    color: COLORS.white,
    marginVertical: 10
  },
  value: {
    ...FONTS.h1,
    color: COLORS.white
  },
  symbol: {
    color: "#6b6b6b"
  },
  button: {
    marginTop: "auto",
    padding: 15,
    width: 120,
    borderRadius: 50,
    backgroundColor: COLORS.lightPurple,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.black
  },
  btnText: {
    color: COLORS.white,
    ...FONTS.h3
  }
});

export default styles;
