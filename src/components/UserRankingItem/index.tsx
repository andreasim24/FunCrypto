import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export interface UserRankingItemProps {
  user: {
    image: string;
    name: string;
    netWorth: number;
  };
  place: number;
}

const UserRankingItem = (props: UserRankingItemProps) => {
  const {
    user: { image, name, netWorth },
    place
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.value}>${netWorth}</Text>
      </View>
    </View>
  );
};

export default UserRankingItem;
