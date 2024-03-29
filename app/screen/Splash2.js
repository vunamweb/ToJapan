import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  AppRegistry,
  TouchableOpacity,
  ImageBackground,
  Button,
  AsyncStorage
} from "react-native";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const image = require("../../app/access/img/bg_splash_1.png");
const imageAuction = require("../../app/access/img/Group_auction.png");
const imageAmazon = require("../../app/access/img/Group_amazon.png");
const imageRakuten = require("../../app/access/img/Group_rakuten.png");
const imageMercari = require("../../app/access/img/Group_mecari.png");

class Splash2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    try {
      let value = await AsyncStorage.getItem("dataPersonal");

      if (value != "" && value != null)
        functions.gotoScreen(this.props.navigation, "HomeScreen");
      else functions.gotoScreen(this.props.navigation, "LoginScreen");
    } catch (error) {
      return null;
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={[styles.imageBackground, { paddingTop: 20 }]}
        >
          {/* ViewHeader */}
          <View style={styles.containerTopSplash1}>
            <Image source={require("../../app/access/img/Logo_white.png")} />
            <Text style={styles.textSplash}>
              <Text style={styles.textSplash1}>Welcome to</Text>
              <Text style={styles.textSplash2}>ToJapan</Text>
            </Text>
          </View>
          {/* End viewheader */}
          {/* ViewBody1 */}
          <View style={styles.containerBody1Splash1}>
            <Image source={imageAuction} />
          </View>
          {/* End ViewBody1 */}
          {/* ViewBody2 */}
          <View style={styles.containerBody2Splash1}>
            <Image source={imageAmazon} />
            <Image source={imageRakuten} />
          </View>
          {/* End ViewBody2 */}
          {/* ViewBody3 */}
          <View style={styles.containerBody3Splash1}>
            <Image source={imageMercari} />
          </View>
          {/* End ViewBody3 */}
          <View style={styles.container_root_full_center}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "white" }]}
            >
              <Text style={{ color: "#2A64C4" }}>Explore Us</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Splash2;
