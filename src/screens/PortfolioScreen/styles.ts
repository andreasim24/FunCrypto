import { StyleSheet } from "react-native";

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
    fontSize: 18,
    color: "#707070"
  },
  balance: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default styles;
