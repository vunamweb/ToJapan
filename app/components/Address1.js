import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const img1 = require("../../app/assets/more-circle.png");
const img2 = require("../../app/assets/check.png");

function Dedault({...props}) {
  if (props.props.border) return (
  <View
    style={[
      {
        backgroundColor: "#3187EA",
        paddingVertical: 3,
        paddingHorizontal: 15,
        borderRadius: 10,
      },
      styles.flexRowStart,
    ]}
  >
    <Image source={img2} />
    <Text style={{ color: "white" }}>Mặc định</Text>
  </View>
  )
}

export default function Address({ mode, style, ...props }) {
  let widthBorder = props.border ? 1 : 0;

  return (
    <View
      style={[
        styles.address,
        styles.bgWhite,
        styles.padding,
        styles.borderNormal,
        styles.marginBottom20,
        { borderColor: "#3187EA", borderWidth: widthBorder },
      ]}
    >
      <View style={styles.addressContent}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.addressText1}>{props.text1}</Text>
          <View style={[styles.flexRowStart, {marginLeft: 80}]}>
            <Dedault props={props} />
            <Image source={img1} style={styles.marginLeft5} />
          </View>
        </View>

        <Text style={styles.addressText2}>{props.text2}</Text>
        <Text style={styles.addressText2}>{props.text3}</Text>
      </View>
    </View>
  );
}
