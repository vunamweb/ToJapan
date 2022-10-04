import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";

export default function CustomToolbar2({ mode, style, ...props }) {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Text style={[styles.profileText1, styles.fontBold, styles.marginBottom20]}>
            Hi chang Trai
        </Text>
        <View style={[styles.flexRowStart, {alignItems: 'center'}]}>
        <Image source={require("../assets/Vector_profile.png")} />
        <Text style={[styles.marginLeft5, styles.profileText2]}>Regular</Text>
        <View style={[styles.marginLeft10, styles.borderNormal, {backgroundColor: '#F5B204', paddingVertical: 3, paddingHorizontal: 15}]}>
<Text style={[{color: 'white'}, styles.fontBold]}>Thành viên</Text>
        </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightIcon}>
          <Image source={require("../assets/SMS.png")} />
        </View>
        <View style={styles.rightIcon}>
          <Image source={require("../assets/setting-2.png")} />
        </View>
      </View>
    </View>
  );
}

