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
    marginRight: 10,
    borderRadius: 50
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
  place: {
    fontSize: 18,
    width: 20
  }
});

export default styles;
