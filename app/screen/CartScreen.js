import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  SearchBox,
  ImageBackground,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-elements";
import { Text, Searchbar } from "react-native-paper";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";
import HeaderBg from "../components/HeaderBackground";
import ListView from "../components/ListView";
import CheckBox from "../components/Checkbox";

import styles from "../style/style";
import functions from "../../app/function/function";

const carouselItems = [
  {
    title: "Đồng hồ lô",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Zippo",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Seiko",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Citizen",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Credor",
    img: require("../../app/assets/Close-circle.png"),
  },
];

const dataProductSlider = [
  {
    text1: "[Crocs] Classic All Terrain",
    text2: "Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All Terrain",
    text2: "Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All Terrain",
    text2: "Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All Terrain",
    text2: "Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
];

const image3 = require("../../app/assets/setting-2.png");
const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image4 = require("../../app/assets/Filler.png");

class CartScreen extends Component {
  state = {
    dataProductSlider: []
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.title}</Text>
        <Image source={item.img} />
      </View>
    );
  }

  _renderItem_2_({ item, index }) {
    return (
      <View
        style={{
          alignItems: "center",
          borderRadius: 16,
          backgroundColor: "#E6E8EC",
          padding: 10,
        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
          {item.title}
        </Text>
      </View>
    );
  }

  _renderItem_3 = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: "white",
          borderBottomColor: "#ccc",
          borderBottomWidth: 3,
        }}
      >
        <View style={{ width: "100%", flexDirection: "row" }}>
        <Image style={{width: 128, height: 128}} source={{ uri: item.Image }} />
          <View style={{ marginTop: 0, marginLeft: 20 }}>
            <Text style={styles.money3}>{item.Name }</Text>
            <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
              Từ {item.Shop}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                  {item.Price} ¥
                </Text>
                <Text style={{ fontSize: 12, color: "#777E90" }}>
                  {item.PriceVN} VND
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Footer */}
        <View style={[styles.seach, { marginTop: 0 }]}>
          <CheckBox label="" status="checked" onPress={null} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            {/* Minutes */}
            <View style={[styles.circleSmall, { marginRight: 0 }]}>
              <TouchableOpacity>
                <Text style={{ fontSize: 12 }}>-</Text>
              </TouchableOpacity>
            </View>
            {/* END */}
            <Text>1</Text>
            {/* Plus */}
            <View
              style={[
                styles.circleSmall,
                { marginRight: 0, backgroundColor: "black" },
              ]}
            >
              <TouchableOpacity>
                <Text style={{ fontSize: 12, color: "white" }}>+</Text>
              </TouchableOpacity>
            </View>
            {/* END */}
          </View>
        </View>
        {/* END */}
      </View>
    );
  };

  onChangeSearch = (navigation) => {
    functions.gotoScreen(navigation, "ForgotPassWordScreen");
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,
    headerRight: (
      <View style={{ paddingRight: 20, marginTop: 0, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => functions.gotoScreen(navigation, "SearchScreen")}
        >
          <Image source={image3} style={{ marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    ),
    headerTitleStyle: {
      color: "white",
    },
    title: "Giỏ hàng("+navigation.state.params.itemId+")"
  });

  componentDidMount() {
    this.setCart();
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  setCart = async () => {
     var cart = await functions.getCart();

     this.setState({ dataProductSlider: JSON.parse(cart) }); 
  }

  render() {
    return (
      <ScrollView>
        <Background full="1" start="1">
          <View style={styles.homeBody}>
            {/* Header */}
            <View style={[styles.seach, { paddingRight: 20, paddingLeft: 20 }]}>
              <CheckBox label="Chọn tất cả" status="checked" onPress={null} />
              <TouchableOpacity onPress={null}>
                <Text>Bỏ chọn</Text>
              </TouchableOpacity>
            </View>
            {/* END */}
            {/* Slider Product */}
            <SliderProduct
              dataCarouselSlider={null}
              renderCarouselSlider={this._renderItem_2_}
              dataProductSlider={this.state.dataProductSlider}
              renderProductSlider={this._renderItem_3}
              col={1}
            />
            {/* END */}
            {/* Money1 */}
            <View
              style={[
                styles.seach,
                { paddingRight: 20, paddingLeft: 20, marginTop: 0 },
              ]}
            >
              <Text style={styles.money1}>Tổng phụ</Text>
              <Text style={styles.money2}>10,868 ¥</Text>
            </View>
            {/* END */}
            {/* Money2 */}
            <View
              style={[
                styles.seach,
                { paddingRight: 20, paddingLeft: 20, marginTop: 10 },
              ]}
            >
              <Text style={styles.money1}>Phí ship</Text>
              <Text style={styles.money2}>10,868 ¥</Text>
            </View>
            {/* END */}
            {/* Money3 */}
            <View
              style={[
                styles.seach,
                { paddingRight: 20, paddingLeft: 20, marginTop: 10 },
              ]}
            >
              <Text style={styles.money1}>Phiếu giảm giá</Text>
              <Text style={styles.money2}>0,2 ¥</Text>
            </View>
            {/* END */}
            {/* Total */}
            <View
              style={[
                styles.seach,
                {
                  padding: 20,
                  marginTop: 20,
                  alignItems: "center",
                  borderTopColor: "#ccc",
                  borderTopWidth: 3,
                },
              ]}
            >
              {/* LEFT */}
              <View style={{ marginTop: 0 }}>
                <Text
                  style={{ fontSize: 18, color: "#23262F", fontWeight: "700" }}
                >
                  Tổng thanh toán
                </Text>
                <Text
                  style={{ fontSize: 22, color: "#D63F5C", fontWeight: "700" }}
                >
                  22222 ¥
                </Text>
                <Text style={{ fontSize: 14, color: "#23262F" }}>
                  3.753.600 đ
                </Text>
              </View>
              {/* end */}
              <TouchableOpacity
                style={[
                  //styles.button,
                  {
                    backgroundColor: "#3187EA",
                    paddingVertical: 10,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    //paddingVertical: 20,
                    //alignItems: 'center'
                  },
                ]}
                onPress={() =>
                  functions.gotoScreen(this.props.navigation, "PaymentScreen")
                }
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  Thanh toán
                </Text>
              </TouchableOpacity>
            </View>
            {/* END */}
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default CartScreen;
