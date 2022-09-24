import React from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    ScrollView,
    LogBox,
    SearchBox,
    ImageBackground
  } from "react-native";

import styles from "../../app/style/style";

const image = require("../../app/access/img/bg_splash_1.png");

export default function headerBackground(props) {
  return <Image
  style={{height: 90, width: '100%'}}
  source={image}
/>
}