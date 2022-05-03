import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white"
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
    width: "100%"
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
    borderRadius: 25
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5
  },
  symbol: {
    color: "#707070"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15
  },
  label: {
    color: "#707070",
    marginBottom: 5
  },
  value: {
    fontSize: 20,
    fontWeight: "bold"
  },
  valueContainer: {
    alignItems: "center",
    marginHorizontal: 5
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});

export default styles;
