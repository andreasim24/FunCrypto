import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white"
  },
  image: {
    height: 175,
    resizeMode: "contain"
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    marginVertical: 10,
    width: "100%"
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5
  },
  email: {
    color: "#707070",
    marginVertical: 5
  },
  value: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18
  },
  symbol: {
    color: "#6b6b6b"
  },
  button: {
    marginTop: "auto",
    padding: 15,
    width: 120,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
