import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";

export default function Banner({ mode, style, ...props }) {
  return (
    <View style={{width: '100%', height: 184, backgroundColor: '#2A64C4', borderRadius: 16, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'white'}}>Banner</Text>
    </View>
  );
}

