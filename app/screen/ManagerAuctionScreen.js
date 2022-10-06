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

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/Rectangle_1944.png");
const image1 = require("../../app/assets/arrow-right.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/notification-bing.png");
const image4 = require("../../app/assets/shopping-bag.png");

class ManagerAuctionScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: "1", title: "Đang đấu", icon: "ios-paper" },
      { icon: "ios-paper", key: "2", title: "Săn phút chót" },
      { icon: "ios-paper", key: "3", title: "Đấu thắng" },
    ],
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
    title: "Quản lý đấu giá",
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    this.props.navigation.setParams({
      my: this,
    });
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
        dataProductSlider={dataProductSlider}
        renderProductSlider={this._renderItem_3}
        col={1}
        style="1"
      />
      <IconBottom component={this}/>
    </View>
  );

  SecondRoute = () => (
    <View
      style={[
        { flex: 1, backgroundColor: "#FAFAFA" },
        styles.borderNormal,
        styles.margin,
      ]}
    >
      <SliderProduct
        dataCarouselSlider={null}
        renderCarouselSlider={this._renderItem_2_}
        dataProductSlider={dataProductSlider}
        renderProductSlider={this._renderItem_3}
        col={1}
        style="1"
      />
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
          marginBottom: 20,
          backgroundColor: "white",
        }}
      >
        <View style={{ width: "100%", flexDirection: "row" }}>
          <TouchableOpacity
          onPress={() =>
            functions.gotoScreen(this.props.navigation, "ProductDaugiaScreen")
          }
          >
          <Image source={img} style={{width: 70}} />
          </TouchableOpacity>
          <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>{item.status1}</Text>
              <Text style={[styles.auctionText1, styles.fontBold]}>
                {item.status2}
              </Text>
            </View>

            <Text style={styles.money3}>{item.text1}</Text>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>Mã đấu</Text>
              <Text style={[styles.auctionText2]}>{item.madau}</Text>
            </View>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between"},
              ]}
            >
              <Text style={styles.paymentText2}>Giá hiện tại</Text>
              <Text style={[styles.mangerOderText3, styles.fontBold]}>
                {item.giahientai}¥
                <Text style={[styles.containerHeaderText2]}> 4,387,480 VND</Text>
              </Text>
            </View>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>Giá đấu</Text>
              <Text style={[styles.mangerOderText3, styles.fontBold]}>
                {item.giadau}¥
                <Text style={styles.containerHeaderText2}>4,387,480 VND</Text>
              </Text>
            </View>

            <View style={[styles.flexRowStart, { justifyContent: "flex-end" }]}>
              <Text style={[styles.mangerOderText3, styles.fontBold]}>Xoá</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ marginTop: 30, flex: 1 }}>
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
                  {route.key == "1" ? (
                    <View
                      style={[
                        styles.circleSmall,
                        styles.marginLeft10,
                        { backgroundColor: "#3187EA" },
                      ]}
                    >
                      <Text>2</Text>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.circleSmall,
                        styles.marginLeft10,
                        { backgroundColor: "#ccc" },
                      ]}
                    >
                      <Text>2</Text>
                    </View>
                  )}
                </View>
              )}
            />
          )}
        />
      </View>
    );
  }
}

export default ManagerAuctionScreen;
