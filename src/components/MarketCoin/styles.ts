import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
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
