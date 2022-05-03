import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const image = require("../../../assets/images/Saly-1.png");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>Welcome to Fun Crypto</Text>
      <Text style={styles.subTitle}>
        Invest your $100.000 virtual money and compete with other.
      </Text>
    </View>
  );
};

export default HomeScreen;
