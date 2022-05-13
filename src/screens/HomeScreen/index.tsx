import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";

const image = require("../../../assets/images/Saly-1.png");
const imageBg = require("../../../assets/images/background-3.jpg");
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES, FONTS } from "../../constants/theme";
import PercentageChange from "../../components/PercentageChange";

import { API, graphqlOperation } from "aws-amplify";
import { listCoins } from "../../graphql/queries";

const HomeScreen = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      const trendingCoin = response.data.listCoins.items.filter(item =>
        ["bitcoin", "ethereum", "binancecoin"].includes(item.cgId)
      );
      setTrendingCoins(trendingCoin);
      console.log(trendingCoin);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const renderHeader = () => {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={[
          styles.renderItemContainer,
          { marginLeft: index == 0 ? SIZES.padding : 0 }
        ]}
        onPress={() => navigation.navigate("CoinDetails", { id: item.id })}
      >
        {/* Currency */}
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={{ marginTop: 5, width: 25, height: 25 }}
            />
          </View>
          <View style={{ marginLeft: SIZES.base }}>
            <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
              {item.symbol.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Value */}
        <View style={styles.valueContainer}>
          <Text style={{ ...FONTS.h3, marginRight: SIZES.base }}>
            ${item.currentPrice}
          </Text>
          <PercentageChange value={item.valueChange24H} />
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.renderHeaderContainer}>
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={styles.imageBg}
        >
          {/* Header Bar */}
          <View style={styles.headerBar}>
            {/* Notifications */}
            <TouchableOpacity
              onPress={() => console.log("Notification pressed")}
            >
              <Ionicons name="notifications-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Header Text */}
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Invest your virtual</Text>
            <Text style={styles.headerBalance}>$100.000 USD</Text>
            <Text style={styles.headerDescription}>
              and compete with other investor
            </Text>
          </View>

          {/* Trending */}
          <View style={styles.trendingContainer}>
            <Text style={styles.trendingText}>Trending</Text>
            <FlatList
              contentContainerStyle={styles.flatListContainer}
              data={trendingCoins}
              renderItem={renderItem}
              refreshing={loading}
              onRefresh={fetchCoins}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderPriceAlert = () => {
    return (
      <TouchableOpacity style={styles.priceAlertContainer}>
        <Ionicons name="notifications" size={25} color="#AE38D6" />
        <View style={{ marginLeft: SIZES.radius }}>
          <Text style={{ color: COLORS.lightPurple, ...FONTS.h3 }}>
            Set Price Alert
          </Text>
          <Text style={{ color: COLORS.black, fontSize: 16 }}>
            Get notified when your coins are moving
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderNotice = () => {
    return (
      <TouchableOpacity style={styles.noticeContainer}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          Investing Safety
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4
          }}
        >
          It's very difficult to time an investment especially when the market
          is volatile. Lets train your investment skill by doing it virtual.
        </Text>
        <TouchableOpacity
          style={{ marginTop: SIZES.base }}
          onPress={() => console.log("Learn more")}
        >
          <Text style={styles.learnMore}>Learn More</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {renderHeader()}
        {renderPriceAlert()}
        {renderNotice()}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
