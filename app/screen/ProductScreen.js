import React, { Component, useRef } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text, Modal, Portal, Provider } from "react-native-paper";

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

var component;

class ProductScreen extends Component {
  state = {
    order: false,
    visibleFilter: false,
    product: {
      images: [],
      buy_now: null,
    },
    countCart: 0,
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

    //component = this;

    var cat = this.props.navigation.state.params.cat;
    var id = this.props.navigation.state.params.id;

    functions.getProduct(this, cat, id);
  }

  gotoTop = () => {
    this.refs._scrollView.scrollTo({
      y: 0,
      animated: true,
    });
  };

  addProduct = async () => {
    await functions.addCart(
      this.state.product,
      this.props.navigation.state.params.cat,
      this
    );

    /*this.setState({
      order: true,
    });*/

    this.gotoTop();
  };

  hideModal = () => {
    this.setState({
      visibleFilter: false,
    });
  };

  showModal = () => {
    this.setState({
      visibleFilter: true,
    });
  };

  render() {
    var buttonBuyNow =
      this.state.product.buy_now != undefined &&
      this.state.product.buy_now > 0 ? (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#E3F2FC", marginTop: 20 }]}
        >
          <Text style={{ color: "black" }}>Mua ngay</Text>
        </TouchableOpacity>
      ) : (
        <View />
      );

    var additionalButton =
      this.state.product.description != undefined ? (
        <View>
          {/* BUTTON 1 */}
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#3187EA", marginTop: 20 },
            ]}
            onPress={() =>
              functions.gotoScreenWithParam(JSON.stringify(this.state.product), this.props.navigation, "ProductDaugiaScreen")
            }
          >
            <Text style={{ color: "white" }}>Trả giá lại</Text>
          </TouchableOpacity>
          {/* END button1 */}
          {/* BUTTON 2 */}
          {buttonBuyNow}
          {/* END button2 */}
        </View>
      ) : (
        <View>
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
        </View>
      );

    var priceMyself =
      this.state.product.description != undefined ? (
        <View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 14,
                color: "#23262F",
                fontWeight: "700",
              }}
            >
              Giá bạn đã trả cho sản phẩm
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#13AB2C", fontSize: 22 }}>{this.state.product.BidData != undefined ? this.state.product.BidData.Bid + '¥' : global.noBid} </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#23262F",
                  marginLeft: 10,
                  marginTop: 5,
                }}
              >
                {this.state.product.BidData != undefined ? (this.state.product.BidData.Bid * 196) + 'đ' : ''} 
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View />
      );

    var informationProduct =
      this.state.product.description != undefined ? (
        <View>
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
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
            >
              {this.state.product.startTime}
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
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
            >
              {this.state.product.endTime}
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
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
            >
              {this.state.product.auto_time}
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
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
            >
              {this.state.product.return_item}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 16, color: "#777E90" }}>Kết thúc sớm</Text>
            <Text
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
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
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
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
              style={{
                fontSize: 16,
                color: "#23262F",
                fontWeight: "600",
              }}
            >
              Có
            </Text>
          </View>
          {/* END thông tin san pham */}
        </View>
      ) : (
        <View />
      );

    var productSimilar =
      this.state.product.description != undefined ? (
        <View>
          <Header1>Sản phẩm Tương tự</Header1>
          {/* Slider Product */}
          <SliderProduct
            dataCarouselSlider={null}
            renderCarouselSlider={this._renderItem_2}
            dataProductSlider={dataProductSlider}
            renderProductSlider={this._renderItem_3}
          />
        </View>
      ) : (
        <View />
      );

    return (
      <Provider>
        <ScrollView ref="_scrollView">
          <Portal>
            <Modal
              visible={this.state.visibleFilter}
              contentContainerStyle={styles.shortModal}
            >
              {/* HEADER */}
              <View style={styles.shortHeaderModal}>
                <Text style={{ color: "white", fontSize: 20 }}>Thuộc tính</Text>
                <TouchableOpacity
                  onPress={this.hideModal.bind(this)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 0,
                    marginRight: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>x</Text>
                </TouchableOpacity>
              </View>
              {/* END */}
              {/* Body */}
              <View style={{ backgroundColor: "white" }}>
                <View style={styles.shortOption}>
                  {/* List product */}
                  <View
                    style={[
                      styles.marginTop20,
                      styles.marginBottom20,
                      { width: "100%", flexDirection: "row" },
                    ]}
                  >
                    <Image
                      source={require("../../app/assets/product.png")}
                      style={{ width: 70, height: 70 }}
                    />
                    <View style={{ marginTop: 0, marginLeft: 20 }}>
                      <Text style={styles.money3}>
                        釣り用フックキーパー 釣り用フ...
                      </Text>
                      <Text style={styles.money3}>x1</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View>
                          <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                            1.200.000 đ
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* End list product */}
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View>
                  <Text style={styles.shortText}>Thuộc tính</Text>

                  <View style={styles.flexRowStart}>
                    <Image source={require("../../app/assets/Frame_568.png")} />
                    <Image source={require("../../app/assets/Frame_568.png")} />
                    <Image source={require("../../app/assets/Frame_568.png")} />
                    <Image source={require("../../app/assets/Frame_568.png")} />
                    <Image source={require("../../app/assets/Frame_568.png")} />
                    <Image source={require("../../app/assets/Frame_568.png")} />
                  </View>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />

                <View style={[styles.seach, { padding: 20, marginTop: 0 }]}>
                  <Text>Số lượng</Text>
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

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    marginBottom: 20,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                >
                  {/* Button huy */}
                  <TouchableOpacity
                    style={[
                      styles.buttonNotFull,
                      {
                        backgroundColor: "white",
                        marginTop: 0,
                        borderColor: "#3187EA",
                        borderWidth: 1,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                      },
                    ]}
                    onPress={null}
                  >
                    <Text style={{ color: "#3187EA" }}>Thêm vào gio hang</Text>
                  </TouchableOpacity>
                  {/* END */}
                  {/* Button ap dung */}
                  <TouchableOpacity
                    style={[
                      styles.buttonNotFull,
                      { backgroundColor: "#3187EA", marginTop: 0 },
                    ]}
                    onPress={null}
                  >
                    <Text style={{ color: "white" }}>Mua ngay</Text>
                  </TouchableOpacity>
                  {/* END */}
                </View>
              </View>
              {/* END */}
            </Modal>
          </Portal>
          <Background start="1" full="1">
            {/* Toolbar */}
            <View style={styles.fullWith}>
              <Image
                style={[styles.fullWith, { width: "100%", height: 300 }]}
                source={{
                  uri:
                    this.state.product.image != undefined
                      ? this.state.product.image
                      : this.state.product.images[0],
                }}
              />
              <CustomToolbar1 component={this} />
            </View>
            {/* END */}
            <View style={[styles.homeBody, { marginTop: -40 }]}>
              <ActivityIndicator
                size="large"
                animating={this.state.ActivityIndicator}
              />
              <View style={styles.homeContent}>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  {this.state.product.title != undefined
                    ? this.state.product.title
                    : this.state.product.Title}
                </Text>
                {/* 1 */}
                <View style={{ marginTop: 20 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#23262F",
                      fontWeight: "700",
                    }}
                  >
                    Giá hiện tại
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#D63F5C", fontSize: 22 }}>
                      {this.state.product.price != undefined
                        ? this.state.product.price
                        : this.state.product.Price}{" "}
                      ¥
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#23262F",
                        marginLeft: 10,
                        marginTop: 5,
                      }}
                    >
                      {this.state.product.priceVN != undefined
                        ? this.state.product.priceVN
                        : this.state.product.PriceVN}{" "}
                      đ
                    </Text>
                  </View>
                </View>
                {/* END 1 */}
                {priceMyself}
                <Text style={{ fontSize: 14, color: "#777E90", marginTop: 5 }}>
                  Trạng thái đơn hàng: Tạm ứng
                </Text>
                <TouchableOpacity onPress={this.showModal.bind(this)}>
                  <View
                    style={[
                      styles.flexRowStart,
                      styles.marginTop20,
                      styles.borderNormal,
                      {
                        justifyContent: "space-between",
                        paddingLeft: 10,
                        backgroundColor: "#F4F5F6",
                        paddingVertical: 10,
                      },
                    ]}
                  >
                    <Text style={styles.money2}>Thuộc tính (6)</Text>
                    <Image
                      source={require("../../app/assets/arrow-right-3.png")}
                    />
                  </View>
                </TouchableOpacity>

                {additionalButton}
                {informationProduct}
                {/* Mô tả sản phẩm */}
                <Text
                  style={{ fontSize: 18, fontWeight: "700", marginTop: 20 }}
                >
                  Mô tả sản phẩm
                </Text>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 16, color: "#23262F" }}>
                    {this.state.product.content != undefined
                      ? this.state.product.content
                      : this.state.product.description}
                  </Text>
                </View>
                {/* END mô tả san pham */}
                {productSimilar}
                {/* END */}
              </View>
            </View>
          </Background>
        </ScrollView>
      </Provider>
    );
  }
}

export default ProductScreen;
