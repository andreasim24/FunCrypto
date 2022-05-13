import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { getUser } from "../../graphql/queries";
import AppContext from "../../utils/AppContext";
import formatMoney from "../../utils/formatMoney";
const imageBg = require("../../../assets/images/background-2.jpg");
import { COLORS, SIZES, FONTS } from "../../constants/theme";

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const { userId } = useContext(AppContext);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getUser, { id: userId })
        );
        console.log(response.data);
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
      <View style={styles.renderHeaderContainer}>
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={styles.imageBg}
        >
          <Image style={styles.userImage} source={{ uri: user.image }} />
          <View style={styles.userContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.value}>${formatMoney(user.networth, 0)}</Text>
          </View>
        </ImageBackground>
      </View>

      {/* <TouchableOpacity style={styles.priceAlertContainer}>
        <View>
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
            Portfolio Coin
          </Text>
        </View>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.btnText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
