import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";

export default function CustomToolbar1({ mode, style, ...props }) {
  let order = props.component.state.order;

  if (!order)
    return (
      <View style={[styles.fullWith, { position: "absolute", height: "100%" }]}>
        {/* top container */}
        <View style={[styles.navBar]}>
          {/* left icon */}
          <View style={styles.leftContainer}>
            <Image source={require("../assets/arrow-left.png")} />
          </View>
          {/* END */}
          {/* right icon */}
          <View style={styles.rightContainer}>
            <View style={styles.rightIcon}>
              <Image source={require("../assets/shopping-bag.png")} />
            </View>
            <View style={styles.rightIcon}>
              <Image source={require("../assets/dot.png")} />
            </View>
          </View>
          {/* END */}
        </View>
        {/* END top container */}
        {/* bottom container */}
        <View
          style={[
            styles.rightContainer,
            { position: "absolute", bottom: 80, right: 20, width: "100%" },
          ]}
        >
          <View style={styles.rightIcon}>
            <Image source={require("../assets/share.png")} />
          </View>
          <View style={styles.rightIcon}>
            <Image source={require("../assets/heart_2.png")} />
          </View>
        </View>
        {/* END bottom container */}
      </View>
    );
  else
    return (
      <View style={[styles.fullWith, { position: "absolute", backgroundColor: '#13AB2C', padding: 20 }]}>
        <View style={[styles.leftContainer, { flexDirection: "row" }]}>
          <TouchableOpacity
          onPress={null}
          >
            <Image source={require("../assets/shopping-bag.png")} />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
              Thành công
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              Đã thêm sản phầm vào giỏ hàng
            </Text>
          </View>
        </View>
      </View>
    );
}
