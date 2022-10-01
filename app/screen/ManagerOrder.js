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

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const carouselItems = [
  {
    title: "Thời trang nam",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang nữ",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang trẻ em",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "NHà cửa đời sống",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang nam",
    img: require("../../app/assets/circle_bg.png"),
  },
];

const carouselItems_ = [
  {
    title: "Vé & thẻ ảnh",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Điện gia dụng và thiết bị số",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Ô tô và xe máy",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thể thao và dã ngoại",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang nam",
    img: require("../../app/assets/circle_bg.png"),
  },
];

const carouselItems1 = [
  {
    title: "Bape",
    img: require("../../app/assets/Maskgroup_1.png"),
  },
  {
    title: "Zara",
    img: require("../../app/assets/Maskgroup_2.png"),
  },
  {
    title: "Zippo",
    img: require("../../app/assets/Maskgroup_3.png"),
  },
  {
    title: "Credor",
    img: require("../../app/assets/Maskgroup_4.png"),
  },
];

const carouselItems2 = [
  {
    title: "Playstation",
    img: require("../../app/assets/Maskgroup_5.png"),
  },
  {
    title: "GUCCI",
    img: require("../../app/assets/Maskgroup_6.png"),
  },
  {
    title: "Canon",
    img: require("../../app/assets/Maskgroup_7.png"),
  },
  {
    title: "Adidas",
    img: require("../../app/assets/Maskgroup_8.png"),
  },
];

const carouselItems3 = [
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
];

const dataCarouselSlider = [
  {
    title: "Tất cả",
  },
  {
    title: "Y!Auction",
  },
  {
    title: "Mercari",
  },
  {
    title: "Amazon",
  },
];

const dataCarouselSlider1 = [
  {
    title: "Tất cả",
  },
  {
    title: "Thời trang nam",
  },
  {
    title: "Thời trang nữ",
  },
];

const dataTKPB1 = [
  {
    title: "Đồ Câu cá",
  },
  {
    title: "Nintendo Switch",
  },
  {
    title: "Nike",
  },
  {
    title: "Đồ Câu cá",
  },
];

const dataTKPB2 = [
  {
    title: "Túi xách",
  },
  {
    title: "Giày dép",
  },
  {
    title: "Áo nữ",
  },
  {
    title: "Máy chơi game",
  },
];

const dataProductSlider = [
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    text2: "Terrain Sandals 2...",
    text3: "x1",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    text2: "Terrain Sandals 2...",
    text3: "x1",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    text2: "Terrain Sandals 2...",
    text3: "x1",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "釣り用フックキーパー 釣り用フ...",
    text2: "Terrain Sandals 2...",
    text3: "x1",
    text4: "5,434",
    text5: "1,016,158",
  },
];

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/arrow-right.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image4 = require("../../app/assets/Filler.png");

class ManagerOrder extends Component {
  state = {
    index: 0,
    routes: [
      { key: "1", title: "Tất cả", icon: "ios-paper" },
      { icon: "ios-paper", key: "2", title: "Đang vận chuyển" },
      { icon: "ios-paper", key: "3", title: "Đã giao" },
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
    title: "Quản lý đơn hàng",
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

  FirstRoute = () => 
  <View style={[{ flex: 1, backgroundColor: '#FAFAFA'}, styles.borderNormal, styles.margin]}>
     <SliderProduct
              dataCarouselSlider={null}
              renderCarouselSlider={this._renderItem_2_}
              dataProductSlider={dataProductSlider}
              renderProductSlider={this._renderItem_3}
              col={1}
              style="1"
            />
  </View>;

  SecondRoute = () => <View style={[{ flex: 1, backgroundColor: '#FAFAFA'}, styles.borderNormal, styles.margin]}>
  <SliderProduct
           dataCarouselSlider={null}
           renderCarouselSlider={this._renderItem_2_}
           dataProductSlider={dataProductSlider}
           renderProductSlider={this._renderItem_3}
           col={1}
           style="1"
         />
</View>;

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
          backgroundColor: 'white'
        }}
      >
        {/* Text HEADER */}
        <View style={[styles.seach, styles.marginBottom20, {marginTop: 0}]}>
          <Text style={[styles.fontBold, styles.paymentText4]}>MER220718103</Text>
          <Text style={styles.mangerOderText1}>Chờ hàng lấy hàng</Text>
        </View>
        <Text style={styles.mangerOderText2, styles.marginBottom20}>Ngày tạo đơn: 19/07/2022 - 08:53 (GMT+9)</Text>
        {/* END TEXT HEADER */}
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Image source={img} />
          <View style={{ marginTop: 0, marginLeft: 20 }}>
            <Text style={styles.money3}>{item.text1}</Text>
            <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
              {item.text3}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                  {item.text4} đ
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Text FOOTER */}
        <View style={[styles.seach, styles.marginBottom20]}>
          <Text style={[styles.fontBold, styles.paymentText6]}>Tổng thanh toán</Text>
          <View style={styles.flexRowStart}>
          <Text style={styles.mangerOderText3}>1.250.000đ</Text>
          <Image source={image1} style={[styles.marginLeft5, {marginTop: 2}]} />
          </View>
        </View>
        {/* END TEXT FOOTER */}
        {/* LINE */}
        <View style={styles.line} />
        {/* LINE */}
        <TouchableOpacity
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
                <Text style={{ color: "#3187EA" }}>Xem chi tiết</Text>
              </TouchableOpacity>

      </View>
    );
  };

  render() {
    return (
<View style={{marginTop: 30, flex: 1}}>
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

export default ManagerOrder;
