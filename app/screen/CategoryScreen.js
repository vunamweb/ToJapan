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
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text } from "react-native-paper";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import SliderProduct1 from "../components/SliderProduct1";
import IconBottom from "../components/IconBottom";
import HeaderBg from "../components/HeaderBackground";

import Auction from "./render/Auction";

import styles from "../style/style";
import functions from "../../app/function/function";

import { HeaderBackground } from "react-navigation-stack";

import moment from "moment";

const img3 = require("../../app/assets/heart.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image2_auction = require("../../app/assets/auction-buy.png");
const image3 = require("../../app/assets/search-normal.png");
const img = require("../../app/assets/circle_bg.png");
const heart = require("../../app/assets/heart.png");
const heart_active = require("../../app/assets/heart-active.png");
const clock = require("../../app/assets/clock.png");

var component;

var height = Math.floor((Dimensions.get("window").width * 0.9 * 296) / 1560);

const minHeight = 50;

class CategoryScreen extends React.PureComponent {
  state = {
    listService: [],
    listProductByTag: [],
    listPopularItem: [],
    listPopularName: [],
    ListFavorite: [],
    dataPopularBranch: [],
    dataBanner: [],
    service: "",
    ActivityIndicator1: true,
    ActivityIndicator2: true,
    ActivityIndicator3: false,
    ActivityIndicator4: true,
    ActivityIndicator5: true,
    intervalId: null,
    currentCount: 0,
  };
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => component.getListProductByTagClick(item.catid, item.ten)}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={img} />
          <Text>{item.ten}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _renderItem_PopularBranch = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../app/assets/Maskgroup_1.png")} />
        <Text>{item.Brand}</Text>
      </View>
    );
  };

  gotoProduct = () => {
    this.refs._scrollView.scrollTo({
      y: 300,
      animated: true,
    });
  };

  getListProductByTagClick = (catid, ten) => {
    functions.getListProductByTagClick(
      component,
      component.props.navigation.state.params.itemId,
      catid,
      ten,
      component.state.listService
    );
    this.gotoProduct();
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

    return response
   }

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

  _renderItem_Banner({ item, index }) {
    return (
      <Image
        style={{
          width: "90%",
          height: height,
          marginLeft: "5%",
          marginRight: "5%",
        }}
        source={{ uri: item.img }}
      />
    );
  }

  _renderItem_2({ item, index }) {
    if (item.ten == component.state.service)
      return (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#3187EA",
            borderRadius: 16,
            padding: 10,
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              functions.getListProductByTagClick(
                component,
                component.props.navigation.state.params.itemId,
                item.catid,
                item.ten,
                component.state.listService
              )
            }
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
              {item.ten}
            </Text>
          </TouchableOpacity>
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
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              functions.getListProductByTagClick(
                component,
                component.props.navigation.state.params.itemId,
                item.catid,
                item.ten,
                component.state.listService
              )
            }
          >
            <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
              {item.ten}
            </Text>
          </TouchableOpacity>
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
          {item.vi}
        </Text>
      </View>
    );
  }

  _renderItem_3 = ({ item, index }) => {
    return <Auction item={item} index={index} parent={this}/>
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,
    headerRight: (
      <View style={{ paddingRight: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.getParam("my").gotoSearch()}
        >
          <Image source={image3} />
        </TouchableOpacity>
      </View>
    ),
    headerTitleStyle: {
      color: "white",
    },
    title: navigation.state.params.itemId,
  });

  gotoSearch = () => {
    var data = {};

    data.listService = this.state.listService;
    data.shop = this.props.navigation.state.params.itemId;
    data.listProductByTag = this.state.listProductByTag;

    functions.gotoScreenWithParam(
      JSON.stringify(data),
      this.props.navigation,
      "KeywordPopularScreen"
    );
  };

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    component = this;

    this.props.navigation.setParams({
      my: this,
    });

    //var intervalId = setInterval(this.time, 1000);
    //this.setState({ intervalId: intervalId });

    //this.getData();

    var itemId = this.props.navigation.state.params.itemId;

    //functions.getBanners(this);
    //functions.getPopularItem(this, itemId);
    //functions.getPopularName(this);
    //functions.getPoplularBranch(this);
    functions.getListService(this, itemId);
    //functions.getListFavorite(this);
  }

  componentWillUnmount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    //clearInterval(this.state.intervalId);
  }

  time = () => {
    //callBack((count) => count + 1);
    /*this.setState({
      currentCount: this.state.currentCount + 1,
    });*/
  };

  getData = async () => {
    var itemId = this.props.navigation.state.params.itemId;

    await functions.getListService(this, itemId);
    functions.getListProductByTag(this, itemId);
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

  addRemoveFavorite = (product) => {
    if (this.checkFavorite(product))
      functions.deleteFavorite(this, this.getIdFavoriteFromProduct(product));
    else
      functions.addFavorite(
        product,
        this.props.navigation.state.params.itemId,
        this
      );
  };

  render() {
    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
        size="large"
        animating={this.state.ActivityIndicator}
      />
    );

    return (
      <ScrollView ref="_scrollView">
        <Background full="1">
      <View full="1">
          <View
            style={[
              styles.fullWith,
              { padding: 20, paddingTop: 0, marginTop: 0 },
            ]}
          >
            {/* Banner */}
            {this.state.ActivityIndicator5 == "" ? View1 : View2}
            <Banner
              renderItem={this._renderItem_Banner}
              carouselItems={this.state.dataBanner}
            />
            {/* END */}
          </View>
          <View style={styles.homeBody}>
            <View>
              <Header1>Danh mục phổ biến</Header1>
              {this.state.ActivityIndicator1 == "" ? View1 : View2}
              {/* Slider 1 */}
              <Carousel
                data={this.state.listPopularItem}
                renderItem={this._renderItem}
                top={0}
                itemWidth={100}
                loop={true}
              />
              {/* END */}
              {/* Từ khoá phổ biến */}
              <Header1>Từ khoá phổ biến</Header1>
              {this.state.ActivityIndicator2 == "" ? View1 : View2}
              <Carousel
                data={this.state.listPopularName}
                renderItem={this._renderItem_2_}
                top={0}
                itemWidth={140}
                loop={true}
              />
              {/* END */}
              <View style={{ marginTop: 30 }} />
              <Header1>Thương hiệu phổ biến</Header1>
              {this.state.ActivityIndicator3 == "" ? View1 : View2}
              {/* Slider 2 */}
              <Carousel
                data={this.state.dataPopularBranch}
                renderItem={this._renderItem_PopularBranch}
                top={20}
                itemWidth={100}
                loop={true}
              />
              {/* END */}
              <View style={{ marginTop: 40 }}>
                <Header1>Hot! categories</Header1>
              </View>
              {this.state.ActivityIndicator4 == "" ? View1 : View2}
              {/* Slider Product */}
              <View>
              <SliderProduct1
                dataCarouselSlider={this.state.listService}
                renderCarouselSlider={this._renderItem_2}
                dataProductSlider={this.state.listProductByTag}
                renderProductSlider={this._renderItem_3}
                scrollEnabled={true}
              />
              </View>
              {/* END */}
            </View>
          </View>
        </View>
        </Background>
        </ScrollView>
    );
  }
}

export default CategoryScreen;
