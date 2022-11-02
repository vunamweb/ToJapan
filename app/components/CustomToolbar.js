import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

export default function CustomToolbar({ mode, style, ...props }) {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Image source={require("../assets/Logo_small_white.png")} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightIcon}>
          <Image source={require("../assets/notification-bing.png")} />
        </View>
        <View style={styles.rightIcon}>
          <TouchableOpacity
          onPress={() =>
            functions.gotoCart(props.component)
          }
          >
          <Image source={require("../assets/shopping-bag.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

