import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text, Switch } from "react-native-paper";

import moment from "moment";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar1 from "../components/CustomToolbar1";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";
import Address from "../components/Address";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const dataProductSlider = [
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
];

const img1 = require("../../app/assets/product.png");
const img2 = require("../../app/assets/circle_bg.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/ship.png");

class ProductDaugiaScreen extends Component {
  state = {
    order: false,
    currentCount: 0,
    intervalId: null,
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            functions.gotoScreen(this.props.navigation, "CategoryScreen")
          }
        >
          <Image source={item.img} />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderItem_1({ item, index }) {
    return (
      <View style={styles.shop}>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.circle, { marginRight: 20 }]} />
          <View>
            <Text style={styles.shopText1}>{item.title}</Text>
            <Text style={styles.shopText2}>{item.text}</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Image source={img3} />
        </View>
      </View>
    );
  }

  _renderItem_2 = ({ item, index }) => {
    if (index == 0)
      return (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#3187EA",
            borderRadius: 16,
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            {item.title}
          </Text>
        </View>
      );
    else
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
  };

  _renderItem_3 = ({ item, index }) => {
    return (
      <View style={{ padding: 15, width: "50%" }}>
        <View
          style={{ borderRadius: 30, backgroundColor: "white", width: "100%" }}
        >
          <Image source={img} />
          <View style={{ position: "absolute", top: 5, right: 5 }}>
            <Image source={image1} />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: "#23262F", fontSize: 16 }}>{item.text1}</Text>
            <Text style={{ color: "#23262F", fontSize: 16 }}>{item.text2}</Text>
            <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
              {item.text3}
            </Text>
            <Rating
              imageSize={15}
              readonly
              startingValue={3}
              style={styles.rating}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                  {item.text4} ¥
                </Text>
                <Text style={{ fontSize: 12, color: "#777E90" }}>
                  {item.text5} VND
                </Text>
              </View>
              <Image source={image2} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  componentDidMount() {
    var intervalId = setInterval(this.time, 1000);
    this.setState({ intervalId: intervalId });
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  componentWillUnmount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    clearInterval(this.state.intervalId);
  }

  time = () => {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  };

  addProduct = () => {
    this.setState({
      order: true,
    });
  };

  getProduct = () => {
    var product = this.props.navigation.state.params.itemId;
    product = JSON.parse(product);

    return product;
  };

  render() {
    var product = this.getProduct();

    var buttonBuyNow =
      product.buy_now != undefined && product.buy_now > 0 ? (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E3F2FC", marginTop: 20 }]}
        >
          <Text style={{ color: "black" }}>Mua ngay</Text>
        </TouchableOpacity>
      ) : (
        <View />
      );

    var dateCurrent = moment().unix();
    var dateEndBid = moment(product.end).unix();

    var time = dateEndBid - dateCurrent;
    var date = new Date(time * 1000);

    var day = Math.floor(time / 86400);
    var hours = Math.floor((time - (day * 24 * 3600))/3600);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    return (
      <ScrollView>
        <Background start="1" full="1">
          {/* Toolbar */}
          <View style={styles.fullWith}>
            <Image
              style={[styles.fullWith, { width: "100%", height: 300 }]}
              source={{ uri: product.images[0] }}
            />
            <CustomToolbar1 component={this} />
          </View>
          {/* END */}
          <View style={[styles.homeBody, { marginTop: -40 }]}>
            <View style={styles.homeContent}>
              <Text
                style={[
                  { fontSize: 18, fontWeight: "700" },
                  styles.marginBottom20,
                ]}
              >
                {product.title}
              </Text>

              <View
                style={[
                  { backgroundColor: "white" },
                  styles.padding,
                  styles.borderNormal,
                ]}
              >
                <Text style={styles.paymentText6}>Thời gian đấu giá:</Text>
                <View
                  style={[
                    { alignItems: "center" },
                    styles.marginTop20,
                    styles.marginBottom20,
                  ]}
                >
                  <Text style={styles.money2}>
                    {day}d: {hours}h : {minutes}m : {seconds}s
                  </Text>
                </View>
                <View style={[styles.flexRowStart]}>
                  <Image source={require("../assets/Auction.png")} />
                  <Text style={(styles.paymentText2, styles.marginLeft5)}>
                    Đang đấu giá:{" "}
                    <Text style={styles.money3}>{product.bids}</Text>
                  </Text>
                  <View
                    style={[
                      styles.flexRowStart,
                      { justifyContent: "flex-end", flex: 1 },
                    ]}
                  >
                    <Image source={require("../assets/Button.png")} />
                  </View>
                </View>
              </View>
              {/* 1 */}
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ fontSize: 14, color: "#23262F", fontWeight: "700" }}
                >
                  Giá hiện tại
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#D63F5C", fontSize: 22 }}>
                    {product.price} ¥
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#23262F",
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    {product.priceVN} đ
                  </Text>
                </View>

                <Text style={[styles.paymentText2, styles.marginTop10]}>
                  (Thuế tại Nhật 0%)
                </Text>
              </View>
              {/* END 1 */}
              {/* 2 */}
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ fontSize: 14, color: "#23262F", fontWeight: "700" }}
                >
                  Giá mua ngay
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#D63F5C", fontSize: 22 }}>
                    {product.buy_now >0 ? product.buy_now + '¥' : global.noBuyNow} 
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#23262F",
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    {product.buy_now >0 ? (product.buy_now * 169) + 'đ' : ''}
                  </Text>
                </View>
              </View>
              {/* END 2 */}
              <View
                style={[
                  styles.flexRowStart,
                  styles.marginTop20,
                  styles.marginBottom20,
                ]}
              >
                <Image source={image3} />
                <Text style={[{ marginTop: 5, marginLeft: 5 }, styles.money1]}>
                  Phí vận chuyển nội địa: <Text style={styles.money2}>Có</Text>
                </Text>
              </View>
              <View
                style={[
                  styles.address,
                  { backgroundColor: "#E6E8EC" },
                  styles.padding,
                  styles.borderNormal,
                ]}
              >
                <Image source={require("../assets/Y!Auction.png")} />
                <View style={[styles.addressContent, { paddingLeft: 5 }]}>
                  <Text style={styles.paymentText2}>
                    Kích hoạt VIP Yahoo! Auction
                  </Text>
                  <Text style={styles.money3}>10.000 Point</Text>
                </View>
                <Switch />
              </View>
              {/* BUTTON 1 */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#3187EA", marginTop: 20 },
                ]}
                onPress={() =>
                  functions.gotoScreen(this.props.navigation, "AuctionScreen")
                }
              >
                <Text style={{ color: "white" }}>Đấu giá</Text>
              </TouchableOpacity>
              {/* END button1 */}
              {/* BUTTON 2 */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#E3F2FC", marginTop: 20 },
                ]}
                onPress={() =>
                  functions.gotoScreen(
                    this.props.navigation,
                    "LastMinutesScreen"
                  )
                }
              >
                <Text style={{ color: "black" }}>Săn phút chót</Text>
              </TouchableOpacity>
              {/* END button2 */}
              {buttonBuyNow}
              {/* Thông tin sản phẩm */}
              <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 20 }}>
                Thông tin sản phẩm
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>
                  Thời gian bắt đầu
                </Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  {product.startTime}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>
                  Thời gian kết thúc
                </Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  {product.endTime}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>
                  Mở rộng thời gian đấu
                </Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  {product.auto_time}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>Hoàn trả</Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  {product.return_item}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>
                  Kết thúc sớm
                </Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  Có
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>
                  Giới hạn xác thực
                </Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  Có
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: "#777E90" }}>
                  Hạn chế thẩm định
                </Text>
                <Text
                  style={{ fontSize: 16, color: "#23262F", fontWeight: "600" }}
                >
                  Có
                </Text>
              </View>
              {/* END thông tin san pham */}
              {/* Mô tả sản phẩm */}
              <Text style={{ fontSize: 18, fontWeight: "700", marginTop: 20 }}>
                Mô tả sản phẩm
              </Text>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: "#23262F" }}>
                  {product.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </Text>
              </View>
              {/* END mô tả san pham */}

              <Header1>Sản phẩm Tương tự</Header1>
              {/* Slider Product */}
              <SliderProduct
                dataCarouselSlider={null}
                renderCarouselSlider={this._renderItem_2}
                dataProductSlider={dataProductSlider}
                renderProductSlider={this._renderItem_3}
              />
              {/* END */}
            </View>
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default ProductDaugiaScreen;
