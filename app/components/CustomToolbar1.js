import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const heart = require("../../app/assets/heart.png");
const heart_active = require("../../app/assets/heart-active.png");

export default function CustomToolbar1({ mode, style, ...props }) {
  let order = props.component.state.order;

  if (!order)
    return (
      <View style={[styles.fullWith, { position: "absolute", height: "100%" }]}>
        {/* top container */}
        <View style={[styles.navBar]}>
          {/* left icon */}
          <View
            style={[
              styles.leftContainer,
              { borderRadius: 10, backgroundColor: "red" },
            ]}
          >
            <TouchableOpacity
              onPress={() => props.component.props.navigation.goBack()}
            >
              <Image source={require("../assets/arrow-left.png")} />
            </TouchableOpacity>
          </View>
          {/* END */}
          {/* right icon */}
          <View style={styles.rightContainer}>
            <View style={styles.rightIcon}>
              <TouchableOpacity
                onPress={() => functions.gotoCart(props.component)}
              >
                <Image
                  style={{ width: 24, height: 24 }}
                  source={require("../assets/shopping-bag.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.rightIcon, styles.hide]}>
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
          <View style={[styles.rightIcon, styles.hide]}>
            <Image source={require("../assets/share.png")} />
          </View>
          <View style={styles.rightIcon}>
            <TouchableOpacity
              onPress={() =>
                props.component.addRemoveFavorite(
                  props.component.props.navigation.state.params.id
                )
              }
            >
              {props.component.checkFavorite(
                props.component.props.navigation.state.params.id
              ) ? (
                <Image
                  style={{ width: 16, height: 16 }}
                  source={heart_active}
                />
              ) : (
                <Image source={heart} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* END bottom container */}
      </View>
    );
  else
    return (
      <View
        style={[
          styles.fullWith,
          {
            position: "absolute",
            top: 0,
            paddingTop: 70,
            backgroundColor: "#13AB2C",
            padding: 20,
          },
        ]}
      >
        <View
          style={[
            styles.leftContainer,
            {
              flexDirection: "row",
              position: "absolute",
              left: 90,
              bottom: 20,
            },
          ]}
        >
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => functions.gotoCart(props.component)}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/shopping-bag.png")}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "white" }}>
              Thành công
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>
              Đã thêm sản phầm vào giỏ hàng({props.component.state.countCart})
            </Text>
          </View>
        </View>
        {/* left icon */}
        <View style={[styles.leftContainer, { width: 30 }]}>
          <TouchableOpacity
            onPress={() => props.component.props.navigation.goBack()}
          >
            <Image source={require("../assets/arrow-left.png")} />
          </TouchableOpacity>
        </View>
        {/* END */}
      </View>
    );
}
