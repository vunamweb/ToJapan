import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
} from "react-native";
import { CheckBox, Rating, AirbnbRating, Tooltip } from "react-native-elements";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar2 from "../components/CustomToolbar2";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";
import Collapse from "../components/Collapse";
import HeaderBg from "../components/HeaderBackground";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const data1 = [
  {
    text: "Thông tin cá nhân",
    img: require("../../app/assets/users.png"),
    link: "PersonalScreen"
  },
  {
    text: "Danh sách địa chỉ",
    img: require("../../app/assets/location_black.png"),
    link: "ListAddress"
  },
  {
    text: "Đổi mật khẩu",
    img: require("../../app/assets/lock-1.png"),
    link: "ChangePasswordScreen",
    border: "none",
  },
];

const data2 = [
  {
    text: "Ngôn ngữ",
    img: require("../../app/assets/ngongu.png"),
  },
  {
    text: "Vietnamese Dong",
    img: require("../../app/assets/waller.png"),
  },
  {
    text: "Vùng",
    img: require("../../app/assets/vung.png"),
    border: "none",
  },
];

const img1 = require("../../app/assets/question.png");
const img2 = require("../../app/assets/arrow-right-3.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image4 = require("../../app/assets/info.png");

class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 90 },
    headerBackground: () => <HeaderBg />,
    headerTitleStyle: {
      color: "white",
    },
    title: "Thiết lập tài khoản",
  });
  _renderItem = ({ item, index }) => {
    let height = item.border == "none" ? 0 : 1;
    let link = item.link != null ? item.link : "HomeScreen";

    return (
      <TouchableOpacity
        onPress={() => functions.gotoScreen(this.props.navigation, link)}
      >
        <View style={[styles.flexRowStart, {paddingLeft: 10, paddingTop: 10}]}>
          <Image style={{ width: 24, height: 24 }} source={item.img} />
          <View style={{ flex: 1 }}>
            <View
              style={[
                styles.flexRowStart,
                {
                  justifyContent: "space-between",
                  paddingLeft: 10,
                },
              ]}
            >
              <Text style={styles.money1}>{item.text}</Text>
              <Image source={img2} />
            </View>

            <View
              style={[
                { height: height, backgroundColor: "#cccccc", marginLeft: 10 },
                styles.marginTop15,
                styles.marginBottom15,
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    return (
      <ScrollView>
        <Background sourse="true" start="1">
          <View
            style={[
              styles.homeBody,
              styles.padding,
              //styles.marginTop0,
              { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
            ]}
          >
            <Collapse
              title="Hồ sơ"
              data={data1}
              renderItem={this._renderItem}
              col={1}
            />

            <Collapse
              title="Cài đặt"
              data={data2}
              renderItem={this._renderItem}
              col={1}
            />
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default SettingScreen;
