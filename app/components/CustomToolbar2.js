import React from "react";
import { Text, View, StyleSheet, Image, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";
import functions from "../function/function";

export default CustomToolbar2 = ({ mode, style, ...props }) => {
  let name = props.name;

  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Text
          style={[styles.profileText1, styles.fontBold, styles.marginBottom20]}
        >
          Hi {name}
        </Text>
        <View style={[styles.flexRowStart, { alignItems: "center" }]}>
          <Image source={require("../assets/Vector_profile.png")} />
          <Text style={[styles.marginLeft5, styles.profileText2]}>Regular</Text>
          <View
            style={[
              styles.marginLeft10,
              styles.borderNormal,
              {
                backgroundColor: "#F5B204",
                paddingVertical: 3,
                paddingHorizontal: 15,
              },
            ]}
          >
            <Text style={[{ color: "white" }, styles.fontBold]}>
              Thành viên
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightIcon}>
        <View style={[styles.circleSmall, { position: 'absolute', backgroundColor: 'white', right: 0, top: -10, zIndex: 9999 }]}>
        <Text style={{ fontSize: 15, fontWeight: "700", color: 'blue'}}>
        0
        </Text>
        </View>
          <Image style={{ width: 24, height: 24 }} source={require("../assets/SMS.png")} />
        </View>
        <View style={styles.rightIcon}>
          <TouchableOpacity
            onPress={() =>
              functions.gotoScreen(
                props.component.props.navigation,
                "SettingScreen"
              )
            }
          >
            <Image style={{ width: 24, height: 24 }} source={require("../assets/setting-2.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
