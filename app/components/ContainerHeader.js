import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";

export default function ContainerHeader({ mode, style, ...props }) {
  return (
    <View style={[styles.fullWith, styles.containerHeader, {marginTop: parseInt(props.top)}]}>
      <View style={styles.containerHeaderStart}>
        <Image source={props.img} />
      </View>
      <View>
        <Text style={styles.containerHeaderText1}>{props.text1}</Text>
        <Text style={styles.containerHeaderText2}>{props.text2}</Text>
      </View>
    </View>
  );
}

