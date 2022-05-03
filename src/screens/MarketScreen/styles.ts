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
    resizeMode: "contain"
  },
  label: {
    fontSize: 18,
    color: "#707070"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default styles;
