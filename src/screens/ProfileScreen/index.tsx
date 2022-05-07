import { useNavigation, CommonActions } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import styles from "./styles";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import AppContext from "../../utils/AppContext";

const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const { userId } = useContext(AppContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getUser, { id: userId })
        );
        console.log(response);
        setUser(response.data.getUser);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  const signOut = async () => {
    await Auth.signOut();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }]
      })
    );
  };

  if (!user) {
    return <ActivityIndicator />;
  }

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
          <Text style={styles.value}>${user.networth}</Text>
        </View>
      </View>

      <Pressable onPress={signOut} style={{ marginTop: "auto" }}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
