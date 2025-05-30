import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text, Switch } from "react-native-paper";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

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

import Countdown from "./render/Countdown";

const image2_auction = require("../../app/assets/auction-buy.png");
const image3 = require("../../app/assets/ship.png");
const heart = require("../../app/assets/heart.png");
const heart_active = require("../../app/assets/heart-active.png");

const minHeight = 50;

var component;

class ProductDaugiaScreen extends Component {
  state = {
    order: false,
    currentCount: 0,
    intervalId: null,
    product: {
      images: [],
      buy_now: null,
      description: "",
      price: 0,
      priceVN: 0,
      buy_now: 0,
    },
    productSimilar1: [],
    productSimilar2: [],
    activeAuction: true,
    ActivityIndicator: false,
    ListFavorite: [],
    bgDaugia: "#E3F2FC",
    colorDaugia: "black",
    bgSPC: "#E3F2FC",
    colorSPC: "black",
  };

  addRemoveFavorite = (product) => {
    if (this.checkFavorite(product))
      functions.deleteFavorite(this, this.getIdFavoriteFromProduct(product));
    else
      functions.addFavorite(
        product,
        this.props.navigation.state.params.cat,
        this
      );
  };

  checkFavorite = (product) => {
    var count;
    var listFavorite = this.state.ListFavorite;

    for (count = 0; count < listFavorite.length; count++)
      if (listFavorite[count].Product == product) return true;

    return false;
  };

  getIdFavoriteFromProduct = (product) => {
    var count;
    var listFavorite = this.state.ListFavorite;

    for (count = 0; count < listFavorite.length; count++)
      if (listFavorite[count].Product == product)
        return listFavorite[count]._id;
  };

  getCountDown = (endTime) => {
    var response = {};

    var dateCurrent = moment().unix();
    var dateEndBid = moment(endTime).unix();

    var time = dateEndBid - dateCurrent;
    var date = new Date(time * 1000);

    var day = Math.floor(time / 86400);
    var hours = Math.floor((time - day * 24 * 3600) / 3600);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    response.day = day;
    response.hours = hours;
    response.minutes = minutes;
    response.seconds = seconds;

    return response;
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
      <TouchableOpacity onPress={() => component.showSimilarProduct(item.ID)}>
        <View
          style={{
            padding: 0,
            marginBottom: 20,
            width: Dimensions.get("window").width / 2 - 20,
          }}
        >
          <View
            style={{
              borderRadius: 30,
              backgroundColor: "white",
              //width: "100%",
              padding: 10,
              marginRight: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: 128, marginTop: 20 }}
              source={{ uri: item.Image }}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 10, right: 15 }}
              onPress={() => this.addRemoveFavorite(item.ID)}
            >
              <View>
                {this.checkFavorite(item.ID) ? (
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={heart_active}
                  />
                ) : (
                  <Image source={heart} />
                )}
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 30 }}>
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Image style={{ width: 16, height: 16 }} source={clock} />
                <Text style={{ marginLeft: 10, color: "#3187EA" }}>
                  {this.getCountDown(item.End).day}d:{" "}
                  {this.getCountDown(item.End).hours}h :{" "}
                  {this.getCountDown(item.End).minutes}m :{" "}
                  {this.getCountDown(item.End).seconds}s
                </Text>
              </View>
              <Text
                style={{ color: "#23262F", fontSize: 16, minHeight: minHeight }}
              >
                {functions.formatTitle(item.Title)}
              </Text>
              <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
                Từ {component.props.navigation.state.params.cat}
              </Text>
              <Rating
                imageSize={15}
                readonly
                startingValue={3}
                style={styles.rating}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={[
                      { color: "#D63F5C", fontSize: 16 },
                      styles.fontBold,
                    ]}
                  >
                    {functions.convertMoney(item.Price)} ¥
                  </Text>
                  <Text style={{ fontSize: 12, color: "#777E90" }}>
                    {functions.convertMoney(item.Price * 184)} VND
                  </Text>
                </View>
                <Image
                  style={{ width: 32, height: 32 }}
                  source={image2_auction}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    //var intervalId = setInterval(this.time, 1000);
    //this.setState({ intervalId: intervalId });

    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreAllLogs(true);

    component = this;

    var cat = this.props.navigation.state.params.cat;
    var id = this.props.navigation.state.params.id;

    functions.getProduct(this, cat, id);

    functions.getListFavorite(this);
  }

  componentWillUnmount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    //clearInterval(this.state.intervalId);
  }

  /*time = () => {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  };*/

  addProduct = () => {
    this.setState({
      order: true,
    });
  };

  getProduct = () => {
    var product = this.state.product;

    return product;
  };

  showSimilarProduct = (id) => {
    functions.getProduct(this, this.props.navigation.state.params.cat, id);

    this.gotoTop();
  };

  gotoTop = () => {
    this.refs._scrollView.scrollTo({
      y: 0,
      animated: true,
    });
  };

  SPC = (product) => {
    this.setState({
      colorSPC: "white",
      bgSPC: "#3187EA",
      colorDaugia: "black",
      bgDaugia: "#E3F2FC",
    });

    functions.gotoScreenWithParam(
      JSON.stringify(product),
      this.props.navigation,
      "LastMinutesScreen"
    );
  };

  DG = (product) => {
    this.setState({
      colorDaugia: "white",
      bgDaugia: "#3187EA",
      colorSPC: "black",
      bgSPC: "#E3F2FC",
    });

    functions.gotoScreenWithParam(
      JSON.stringify(product),
      this.props.navigation,
      "AuctionScreen"
    );
  };

  static navigationOptions = ({ navigation }) => ({
    title: "",
  });

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

    //var dateCurrent = moment().unix();
    //var dateEndBid = moment(product.end).unix();

    //var time = dateEndBid - dateCurrent;
    //var date = new Date(time * 1000);

    //var day = Math.floor(time / 86400);
    /*var hours = Math.floor((time - day * 24 * 3600) / 3600);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();*/

    var productSimilar =
      this.state.product.description != undefined ? (
        <View style={{ flex: 1, width: "100%" }}>
          <Header1>Sản phẩm Tương tự</Header1>
          {/* Slider Product */}
          <SliderProduct
            dataCarouselSlider={null}
            renderCarouselSlider={this._renderItem_2}
            dataProductSlider={this.state.productSimilar1}
            renderProductSlider={this._renderItem_3}
            scrollEnabled={true}
            horizontal={true}
            col={1}
          />
          <SliderProduct
            dataCarouselSlider={null}
            renderCarouselSlider={this._renderItem_2}
            dataProductSlider={this.state.productSimilar2}
            renderProductSlider={this._renderItem_3}
            scrollEnabled={true}
            horizontal={true}
            col={1}
          />
        </View>
      ) : (
        <View />
      );

    return (
      <ScrollView ref="_scrollView">
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
            <ActivityIndicator
              size="large"
              animating={this.state.ActivityIndicator}
            />
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
                    <Countdown type={true} end={product.end} />
                  </Text>
                </View>
                <View style={[styles.flexRowStart]}>
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/auction_daugia.png")}
                  />
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
                    {functions.convertMoney(product.price)} ¥
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#23262F",
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    {functions.convertMoney(product.priceVN)} đ
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
                    {product.buy_now > 0
                      ? functions.convertMoney(product.buy_now) + "¥"
                      : global.noBuyNow}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#23262F",
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    {product.buy_now > 0 ? product.buy_now * 169 + "đ" : ""}
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
                <Image
                  style={{ width: 48, height: 48 }}
                  source={require("../assets/Y!Auction.png")}
                />
                <View style={[styles.addressContent, { paddingLeft: 5 }]}>
                  <Text style={styles.paymentText2}>
                    Kích hoạt VIP ToJapan
                  </Text>
                  <Text style={styles.money3}>10.000 Point</Text>
                </View>
                <Switch
                  value={this.state.activeAuction}
                  onValueChange={() => functions.activeAuction(this)}
                />
              </View>
              {/* BUTTON 1 */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: this.state.bgDaugia, marginTop: 20 },
                ]}
                onPress={() => this.DG(product)}
              >
                <Text style={{ color: this.state.colorDaugia }}>Đấu giá</Text>
              </TouchableOpacity>
              {/* END button1 */}
              {/* BUTTON 2 */}
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: this.state.bgSPC, marginTop: 20 },
                ]}
                onPress={() => this.SPC(product)}
              >
                <Text style={{ color: this.state.colorSPC }}>
                  Săn phút chót
                </Text>
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
              {productSimilar}
            </View>
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default ProductDaugiaScreen;
