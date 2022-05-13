import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingBottom: 130,
    alignItems: "center",
    flex: 1,
    backgroundColor: COLORS.white
  },
  renderHeaderContainer: {
    width: "100%",
    height: 330
  },
  headerBar: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding
  },
  headerTextContainer: {
    alignItems: "center"
  },
  headerText: {
    color: COLORS.white,
    ...FONTS.h3
  },
  headerBalance: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h1
  },
  headerDescription: {
    color: COLORS.white,
    ...FONTS.body5
  },
  trendingContainer: {
    position: "absolute",
    bottom: "-30%"
  },
  valueContainer: {
    marginTop: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  trendingText: {
    marginLeft: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h2
  },
  flatListContainer: {
    marginTop: SIZES.base
  },
  renderItemContainer: {
    width: 180,
    padding: SIZES.padding,
    marginRight: SIZES.radius,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 10,
    shadowColor: COLORS.lightPurple,
    marginBottom: SIZES.radius
  },
  priceAlertContainer: {
    width: "90%",
    marginTop: 100,
    padding: SIZES.padding,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 10,
    shadowColor: COLORS.lightPurple,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  noticeContainer: {
    width: "90%",
    marginTop: SIZES.radius,
    padding: SIZES.padding,
    borderRadius: 20,
    backgroundColor: COLORS.lightPurple,
    elevation: 10,
    shadowColor: COLORS.black
  },
  learnMore: {
    marginTop: SIZES.base,
    color: COLORS.secondary,
    textDecorationLine: "underline"
  },
  image: {
    height: "20%",
    aspectRatio: 1,
    marginTop: 30
  },
  imageBg: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#707070"
  }
});

export default styles;
