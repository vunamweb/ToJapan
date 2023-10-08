import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const img = require("../../app/assets/location.png");
const img1 = require("../../app/assets/arrow-right-3.png");

export default function Address({ mode, style, ...props }) {
  return (
    <TouchableOpacity
    onPress={() =>
      functions.gotoScreen(props.component.props.navigation, "ListAddress")
    }
    >
    <View style={[styles.address, styles.bgWhite, styles.padding, styles.borderNormal]}>
      <Image source={img}/>
      <View style={styles.addressContent}>
          <Text style={styles.addressText1}>{props.text1}</Text>
          <Text style={styles.addressText2}>{props.text2}</Text>
      </View>
      <Image style={{ position: "absolute", right: 20, top: 20 }} source={img1}/>
    </View>
    </TouchableOpacity>
  );
}

