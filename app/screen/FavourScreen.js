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
  Text,
  useWindowDimensions,
  ActivityIndicator
} from "react-native";
import { Rating, AirbnbRating, Slider } from "react-native-elements";
import { Modal, Portal, Provider, RadioButton } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

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
import Dropdown from "../components/Select";
import CheckBox from "../components/Checkbox";

import styles from "../style/style";
import functions from "../../app/function/function";

import { HeaderBackground } from "react-navigation-stack";
//import { Provider } from "react-native-paper/lib/typescript/core/settings";

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/Rectangle_1944.png");
const image1 = require("../../app/assets/arrow-right.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image4 = require("../../app/assets/Filler.png");

const dataProductSlider = [
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    status1: "Đã kết thúc",
    status2: "Đấu giá thất bại",
    madau: "g1057850171",
    giahientai: "23,845",
    giadau: "11",
  },
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    status1: "Đã kết thúc",
    status2: "Đấu giá thất bại",
    madau: "g1057850171",
    giahientai: "23,845",
    giadau: "11",
  },
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    status1: "Đã kết thúc",
    status2: "Đấu giá thất bại",
    madau: "g1057850171",
    giahientai: "23,845",
    giadau: "11",
  },
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    status1: "Đã kết thúc",
    status2: "Đấu giá thất bại",
    madau: "g1057850171",
    giahientai: "23,845",
    giadau: "11",
  },
];

class FavourScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: "1", title: "Sản phẩm", icon: "ios-paper" },
      { icon: "ios-paper", key: "2", title: "Cửa hàng" },
    ],
    ListFavorite: [],
    ActivityIndicator3: false
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,
    headerRight: (
      <View style={{ paddingRight: 20, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() =>
            functions.gotoScreen(navigation, "KeywordPopularScreen")
          }
        >
          <Image source={image3} style={{ marginRight: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () =>
              navigation.getParam("my").setState({
                visibleFilter: true,
              })
            //navigation.getParam('my').showModalFilter.bind(navigation.getParam('my'))
          }
        >
          <Image source={image4} />
        </TouchableOpacity>
      </View>
    ),

    headerTitleStyle: {
      color: "white",
    },
    title: "Yêu thích",
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    this.props.navigation.setParams({
      my: this,
    });

    functions.getListFavorite(this);
  }

  _handleIndexChange = (index) => {
    this.setState({ index });
  };

  FirstRoute = () => (
    <View
      style={[{ flex: 1, backgroundColor: "#FAFAFA" }, styles.borderNormal]}
    >
      <SliderProduct
        dataCarouselSlider={null}
        renderCarouselSlider={this._renderItem_2_}
        dataProductSlider={this.state.ListFavorite}
        renderProductSlider={this._renderItem_3}
        col={1}
        style="1"
      />
      <IconBottom component={this} type="3" />
    </View>
  );

  SecondRoute = () => (
    <View
      style={[{ flex: 1, backgroundColor: "#FAFAFA" }, styles.borderNormal]}
    >
      <SliderProduct
        dataCarouselSlider={null}
        renderCarouselSlider={this._renderItem_2_}
        dataProductSlider={dataProductSlider}
        renderProductSlider={this._renderItem_2_}
        col={1}
        style="1"
      />
      <IconBottom />
    </View>
  );

  _renderScene = SceneMap({
    "1": this.FirstRoute,
    "2": this.SecondRoute,
    "3": this.SecondRoute,
  });

  //layout = useWindowDimensions();

  TabBar = () => {
    return;
  };

  _renderItem_2_({ item, index }) {
    return (
      <View style={[styles.bgWhite, styles.marginBottom20]}>
        <View
          style={[
            styles.shortOption,
            {
              justifyContent: "space-between",
              paddingTop: 0,
              paddingBottom: 0,
              marginTop: 20,
            },
          ]}
        >
          <View style={styles.flexRowStart}>
            <Image source={require("../../app/assets/shop.png")} />
            <View style={styles.marginLeft10}>
              <Text style={styles.paymentText2}>Rekuten</Text>
              <Text style={[styles.paymentText3, styles.marginTop5]}>
                darkangel
              </Text>
            </View>
          </View>
          <Image source={require("../../app/assets/delete.png")} />
        </View>

        <View style={[styles.line, styles.margin]} />

        <View
          style={[
            styles.shortOption,
            {
              justifyContent: "space-between",
              paddingTop: 0,
              paddingBottom: 0,
            },
          ]}
        >
          <Text style={styles.paymentText3}>Thời trang</Text>
          <Image source={require("../../app/assets/edit.png")} />
        </View>
      </View>
    );
  }

  _renderItem_3 = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 20,
          backgroundColor: "white",
        }}
      >
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Image source={{ uri: item.Image }} style={{ width: 100 }} />
          <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>{item.Site}</Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                functions.gotoScreenProduct(
                  item.Site,
                  item.Product,
                  this.props.navigation,
                  "ProductScreen"
                )
              }
            >
              <Text style={styles.money3}>{item.Name}</Text>
            </TouchableOpacity>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={[styles.mangerOderText3, styles.fontBold]}>
                { functions.convertMoney( functions.convertMoney(item.Price) ) }¥
                <Text style={[styles.containerHeaderText2]}>
                  {" "}
                  { functions.convertMoney(item.PriceVN) } VND
                </Text>
              </Text>
            </View>

            <View style={[styles.flexRowStart, { justifyContent: "flex-end" }]}>
              <TouchableOpacity
              onPress={() =>
                functions.deleteFavorite(this, item._id)
              }
              >
                <Text style={[styles.mangerOderText3, styles.fontBold]}>
                  Xoá
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
        size="large"
        animating={true}
      />
    );

    return (
      <View style={{ marginTop: 0, flex: 1 }}>
        {this.state.ActivityIndicator3 == "" ? View1 : View2}
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          tabStyle={{ color: "red" }}
          //initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: "white" }}
              renderLabel={({ route, color }) => (
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                  <Text style={{ color: "black" }}>{route.title}</Text>
                </View>
              )}
            />
          )}
        />
      </View>
    );
  }
}

export default FavourScreen;
