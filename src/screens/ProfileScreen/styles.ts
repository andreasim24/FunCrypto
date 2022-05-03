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
    color: "#707070"
  },
  value: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18
  }
});

export default styles;
