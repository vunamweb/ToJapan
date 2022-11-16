import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Carousel from "../components/Carousel";

import styles from "../../app/style/style";

export default function Banner({ mode, style, ...props }) {
  return (
    <View style={{width: '100%', borderRadius: 16, alignItems: 'center', justifyContent: 'center'}}>
      <Carousel
                data={props.carouselItems}
                renderItem={props.renderItem}
                top={0}
                itemWidth={Dimensions.get('window').width}
                loop={true}
                autoplay={true}
              />
    </View>
  );
}

