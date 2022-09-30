import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";

const img = require("../../app/assets/location.png");
const img1 = require("../../app/assets/arrow-right-3.png");

export default function Address({ mode, style, ...props }) {
  return (
    <View style={[styles.address, styles.bgWhite, styles.padding, styles.borderNormal]}>
      <Image source={img}/>
      <View style={styles.addressContent}>
          <Text style={styles.addressText1}>{props.text1}</Text>
          <Text style={styles.addressText2}>{props.text2}</Text>
      </View>
      <Image source={img1}/>
    </View>
  );
}

