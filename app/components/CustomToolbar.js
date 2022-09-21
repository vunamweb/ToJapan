import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";

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
          <Image source={require("../assets/shopping-bag.png")} />
        </View>
      </View>
    </View>
  );
}

