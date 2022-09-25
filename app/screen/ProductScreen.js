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
import { Text } from "react-native-paper";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar1 from "../components/CustomToolbar1";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";

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

class ProductScreen extends Component {
    state = {
        order: false,
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

  _renderItem_2({ item, index }) {
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
  }

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
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  addProduct = () => {
    this.setState({
      order: true,
    });
  };
  render() {
    return (
      <ScrollView>
        <Background start="1" full="1">
          {/* Toolbar */}
          <View style={styles.fullWith}>
            <Image style={styles.fullWith} source={img1} />
            <CustomToolbar1 component={this} />
          </View>
          {/* END */}
          <View style={[styles.homeBody, { marginTop: -40 }]}>
            <View style={styles.homeContent}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                CASIO g-shock mini Gショックミニ g-baller カスタム
              </Text>
              {/* 1 */}
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ fontSize: 14, color: "#23262F", fontWeight: "700" }}
                >
                  Giá hiện tại
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#D63F5C", fontSize: 22 }}>
                    20.400 ¥
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#23262F",
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    3.753.600 đ
                  </Text>
                </View>
              </View>
              {/* END 1 */}
              {/* 2 */}
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{ fontSize: 14, color: "#23262F", fontWeight: "700" }}
                >
                  Giá bạn đã trả cho sản phẩm
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#13AB2C", fontSize: 22 }}>
                    19.400 ¥
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#23262F",
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    3.753.600 đ
                  </Text>
                </View>
              </View>
              {/* END 2 */}
              <Text style={{ fontSize: 14, color: "#777E90", marginTop: 5 }}>
                Trạng thái đơn hàng: Tạm ứng
              </Text>
              {/* BUTTON 1 */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#3187EA", marginTop: 20 },
                ]}
              >
                <Text style={{ color: "white" }}>Trả giá lại</Text>
              </TouchableOpacity>
              {/* END button1 */}
              {/* BUTTON 2 */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#E3F2FC", marginTop: 20 },
                ]}
              >
                <Text style={{ color: "black" }}>Mua ngay</Text>
              </TouchableOpacity>
              {/* END button2 */}
              {/* BUTTON 3 */}
              <TouchableOpacity
              onPress={this.addProduct.bind(this)}
                style={[
                  styles.button,
                  {
                    backgroundColor: "white",
                    marginTop: 20,
                    borderColor: "#3187EA",
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={{ color: "#3187EA" }}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
              {/* END button3 */}
              {/* 3 */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image source={img2} />
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{ fontSize: 18, fontWeight: "700", color: "#000" }}
                    >
                      Aqua0710398
                    </Text>
                    <Text style={{ fontSize: 12, color: "#777E90" }}>
                      9826 Đơn hàng
                    </Text>
                    <Text style={{ fontSize: 12, color: "#3187EA" }}>
                      Shop có độ uy tín cao
                    </Text>
                  </View>
                </View>
                <Image source={image1} style={{ marginTop: 20 }} />
              </View>
              {/* END 3 */}
              {/* 4 */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                {/* 4-1 */}
                <View>
                  <Text style={{ fontSize: 14, color: "#777E90" }}>Tốt</Text>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: "700" }}
                  >
                    1.000
                  </Text>
                </View>
                {/* End */}
                {/* 4-2 */}
                <View>
                  <Text style={{ fontSize: 14, color: "#777E90" }}>
                    Bình thường
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: "700" }}
                  >
                    0
                  </Text>
                </View>
                {/* End */}
                {/* 4-3 */}
                <View>
                  <Text style={{ fontSize: 14, color: "#777E90" }}>
                    không Tốt
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "#000", fontWeight: "700" }}
                  >
                    6
                  </Text>
                </View>
                {/* End */}
              </View>
              {/* END 4 */}
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
                  12:15 05/07/2022
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
                  12:15 05/07/2022
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
                <Text style={{ fontSize: 16, color: "#777E90" }}>Hoàn trả</Text>
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
                  Ends July 10, 2022 Seiko CHRONOGRAPH Chronograph Ref.6138-8000
                  Panda Day-Date Men's Mechanical Self-winding Watch Gentleman
                  Antique
                  {"\n"}
                  Country of origin ... Made in Switzerland
                  {"\n"}{"\n"}
                  Specifications ... Mechanical manual winding
                  {"\n"}{"\n"}
                  Case size: about 39 mm
                  {"\n"}{"\n"}
                  Consumption tax, shipping fee, and because we are opening an
                  individual store, we do not charge consumption tax. The
                  shipping fee is freight collect.
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

export default ProductScreen;
