import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
const image = require("../../../assets/images/Saly-31.png");
import styles from "./styles";

import { API, graphqlOperation } from "aws-amplify";
import { exchangeCoins } from "./mutations";
import { listPortfolioCoins } from "../../graphql/queries";
import formatMoney from "../../utils/formatMoney";
import AppContext from "../../utils/AppContext";

const USD_COIN_ID = "7a14239b-af31-4b3e-972d-276340ab0051";

const CoinExchangeScreen = () => {
  const [coinAmount, setCoinAmount] = useState("");
  const [coinUSDValue, setCoinUSDValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const { userId } = useContext(AppContext);

  const maxUSD = 100000;

  const route = useRoute();

  const isBuy = route?.params?.isBuy;
  const coin = route?.params?.coin;
  const portfolioCoin = route?.params?.portfolioCoin;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinUSDValue((amount * coin?.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUSDValue);
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinAmount((amount / coin?.currentPrice).toString());
  }, [coinUSDValue]);

  const getPortfolioCoinId = async (coinId: string) => {
    try {
      const response = await API.graphql(
        graphqlOperation(listPortfolioCoins, {
          filter: {
            and: {
              coinId: { eq: coinId },
              userId: { eq: userId }
            }
          }
        })
      );
      if (response.data.listPortfolioCoins.items.length > 0) {
        return response.data.listPortfolioCoins.items[0].id;
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const placeOrder = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const variables = {
        coinId: coin.id,
        isBuy,
        amount: parseFloat(coinAmount),
        usdPortfolioCoinId: await getPortfolioCoinId(USD_COIN_ID),
        coinPortfolioCoinId: await getPortfolioCoinId(coin.id)
      };

      const response = await API.graphql(
        graphqlOperation(exchangeCoins, variables)
      );
      if (response.data.exchangeCoins) {
        navigation.navigate("Portfolio");
      } else {
        Alert.alert("Error", "There was an error exchanging coins");
      }
    } catch (e) {
      Alert.alert("Error", "There was an error exchanging coins");
      console.error(e);
    }
    setIsLoading(false);
  };

  const onPlaceOrder = async () => {
    if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
      Alert.alert("Error", `Not enough USD coins. Max: ${maxUSD}`);
      return;
    }
    if (
      !isBuy &&
      (!portfolioCoin || parseFloat(coinAmount) > portfolioCoin.amount)
    ) {
      Alert.alert(
        "Error",
        `Not enough ${coin.symbol} coins. Max: ${coin.amount || 0}`
      );
      return;
    }

    await placeOrder();
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={200}
    >
      <Text style={styles.title}>
        {isBuy ? "Buy " : "Sell "}
        {coin?.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coin?.symbol}
        {" = "}${formatMoney(coin?.currentPrice)}
      </Text>
      <Image style={styles.image} source={image} />

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
          <Text>{coin?.symbol}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>

        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinUSDValue}
            onChangeText={setCoinUSDValue}
          />
          <Text>USD</Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={onPlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
        {isLoading && <ActivityIndicator color={"white"} />}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
