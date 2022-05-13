import React, { createRef } from "react";
import { View, SafeAreaView } from "react-native";
import DelayInput from "react-native-debounce-input";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export interface SearchBarProps {
  term: string;
  onTermChange: any;
}

const SearchBar = (props: SearchBarProps) => {
  const { term, onTermChange } = props;
  const inputRef = createRef();

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}></Feather>
        <DelayInput
          value={term}
          minLength={3}
          inputRef={inputRef}
          onChangeText={term => onTermChange(term)}
          delayTimeout={500}
          style={styles.inputStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
