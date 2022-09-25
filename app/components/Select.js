import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import styles from "../../app/style/style";

export default function Select({ mode, style, ...props }) {
  return (
    <SelectDropdown
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      dropdownStyle={{ borderRadius: 20 }}
      buttonStyle={{ borderRadius: 20, width: '100%', backgroundColor: 'transparent', borderColor: '#ccc', borderWidth: 1 }}
      buttonTextStyle={{alignItems: 'flex-start', alignContent: 'flex-start'}}
      {...props}
    />
  );
}
