import { useNavigation, CommonActions } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";

const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    id: "1",
    name: "Andre",
    email: "andreas@gmail.com",
    image:
      "https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png",
    netWorth: 13123
  });

  const signOut = async () => {
    await Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }]
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.userContainer}>
        <View style={styles.leftContainer}>
          <Image style={styles.userImage} source={{ uri: user.image }} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.value}>${user.netWorth}</Text>
        </View>
      </View>

      <Pressable onPress={signOut} style={{ marginTop: "auto" }}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
