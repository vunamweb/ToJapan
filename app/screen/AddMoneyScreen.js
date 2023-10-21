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
  ActivityIndicator,
  Clipboard,
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
import functions from "../function/function";

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

const img1 = require("../../app/assets/copy.png");
const img2 = require("../../app/assets/canbao.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/arrow-right.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image4 = require("../../app/assets/Filler.png");

var listBank, loading, component;

class AddMoneyScreen extends Component {
  state = {
    index: 0,
    visible: false,
    ActivityIndicator: true,
    money: 0,
    listBank: {
      data: {
        STK: null,
        TenTK: null,
        Bank: null,
      },
    },
    routes: [
      { key: "1", title: "JYP", icon: "ios-paper" },
      { icon: "ios-paper", key: "2", title: "VND" },
    ],
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Nạp tiền",
  });

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    component = this;

    this.props.navigation.setParams({
      my: this,
    });

    functions.getListBank(this);
  }

  copyText = (copyText) => {
    Clipboard.setString(copyText);
  };

  _handleIndexChange = (index) => {
    this.setState({ index });
  };

  FirstRoute = () => (
    <View style={[{ flex: 1, backgroundColor: "#FAFAFA" }]}>
      <View
        style={{
          width: "100%",
          marginBottom: 20,
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <View style={styles.padding}>
          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginHeader,
            ]}
          >
            <Text style={styles.shopText2}>Nạp tiền</Text>
          </View>
          <TextInput
            placeholder="Nhập số tiền nạp"
            title="Nhập số tiền nạp"
            keyboardType="numeric"
            onChangeText={(value) =>
              this.setState({ money: parseInt(value.replace(/[^0-9]/g, "")) })
            }
            value={this.state.money}
            styleParent={{ borderColor: "#E6E8EC", backgroundColor: "white" }}
          />

          <View style={[styles.titleTextinput, styles.textGeneral]}>
            <Text style={(styles.shopText2, styles.marginBottom20)}>
              Phương thức thanh toán
            </Text>
          </View>
          <View style={(styles.borderNormal, styles.bgWhite)}>
            <View>
              <Text style={styles.shortText}>Chuyển khoản ngân hàng</Text>
              {loading}
              {listBank}
            </View>
          </View>
        </View>
        {/* Total */}
        <View
          style={[
            styles.seach,
            styles.bgWhite,
            {
              padding: 20,
              marginTop: 40,
              alignItems: "center",
            },
          ]}
        >
          {/* LEFT */}
          <View style={{ marginTop: 0 }}>
            <Text
              style={{
                fontSize: 18,
                color: "#23262F",
                fontWeight: "700",
              }}
            >
              Tổng thanh toán
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: "#D63F5C",
                fontWeight: "700",
              }}
            >
              {functions.convertMoney(this.state.money)} ¥
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
            onPress={() => functions.depositBank(component)}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>
        {/* END */}
      </View>
    </View>
  );

  _renderScene = SceneMap({
    "1": this.FirstRoute,
    "2": this.FirstRoute,
    //"3": this.SecondRoute,
  });

  getListBank = () => {
    var listBank = this.state.listBank;
    var bankArray = [];
    var position;

    try {
      bankArray.push(
        <View>
          <View style={[styles.shortOption, { padding: 0 }]}>
            <RadioButton status="checked" />
            <View
              style={[
                {
                  backgroundColor: "##E3F2FC",
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                },
              ]}
            >
              <Text style={(styles.shopText2, styles.marginTop10)}>
                {listBank.data.Bank}
              </Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      );
    } catch (error) {
      console.log(error);
    }

    return bankArray;
  };

  render() {
    listBank = this.getListBank();

    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
        size="large"
        animating={this.state.ActivityIndicator}
      />
    );

    loading = this.state.ActivityIndicator == "" ? View1 : View2;

    return (
      <Provider>
        <Portal>
          <Modal
            visible={this.state.visible}
            contentContainerStyle={styles.shortModal}
          >
            {/* HEADER */}
            <View style={styles.shortHeaderModal}>
              <Text style={{ color: "white", fontSize: 20 }}>
                Thông tin thanh toán
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    visible: false,
                  })
                }
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
            {/* BODY */}
            <View style={styles.bgWhite}>
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
                <Text style={styles.containerHeaderText1}>Tổng thanh toán</Text>
                <Text style={[styles.inforPaymentText1, styles.fontBold]}>
                  {functions.convertMoney(this.state.money)} đ
                </Text>
              </View>

              <View style={[styles.marginLeft10, styles.marginTop20]}>
                <Text style={styles.shopText2}>Ngân hàng</Text>
                <Text
                  style={[styles.shortText, { marginLeft: 0, marginTop: 0 }]}
                >
                  {this.state.listBank.data.Bank}
                </Text>
              </View>

              <View
                style={[
                  styles.flexRowStart,
                  styles.marginTop20,
                  { justifyContent: "space-between" },
                ]}
              >
                <View style={styles.marginLeft10}>
                  <Text style={styles.shopText2}>Số tài khoản</Text>
                  <Text
                    style={[styles.shortText, { marginLeft: 0, marginTop: 0 }]}
                  >
                    {this.state.listBank.data.STK}
                  </Text>
                </View>
                <Image source={img1} />
              </View>

              <View style={[styles.marginLeft10, styles.marginTop20]}>
                <Text style={styles.shopText2}>Chủ tài khoản</Text>
                <Text
                  style={[styles.shortText, { marginLeft: 0, marginTop: 0 }]}
                >
                  {this.state.listBank.data.TenTK}
                </Text>
              </View>

              <View
                style={[
                  styles.flexRowStart,
                  styles.marginTop20,
                  { justifyContent: "space-between" },
                ]}
              >
                <View style={styles.marginLeft10}>
                  <Text style={styles.shopText2}>Nội dung chuyển khoản</Text>
                  <Text
                    style={[styles.shortText, { marginLeft: 0, marginTop: 0 }]}
                  >
                    DB712050FFI EZ6763 linh le
                  </Text>
                </View>
                <Image source={img1} />
              </View>

              <View
                style={[
                  styles.shortHeaderModal,
                  styles.padding,
                  styles.marginTop20,
                  {
                    marginLeft: 20,
                    marginRight: 20,
                    backgroundColor: "#FFF8DE",
                    flexDirection: "column",
                  },
                ]}
              >
                <View style={styles.flexRowStart}>
                  <Image source={img2} />
                  <Text style={styles.marginLeft5}>Lưu ý</Text>
                </View>

                <Text style={styles.marginTop10}>
                  Vui lòng chuyển tiền chính xác theo thông tin tài khoản ngân
                  hàng và nội dung chuyển khoản.
                </Text>

                <Text style={[styles.marginTop20, styles.marginLeft10]}>
                  Trường hợp được thanh toán tại máy ATM, vì không thể ghi được
                  nội dung thanh toán nên quý khách vui lòng thông báo qua email
                  hoặc gọi trực tiếp tổng đài ToJapan để được hỗ trợ.
                </Text>

                <Text style={[styles.marginTop10, styles.marginLeft10]}>
                  Giao dịch của quý khách chỉ được xác nhận thanh toán sau khi
                  ToJapan nhận được thông báo từ Ngân hàng với nội dung thanh
                  toán đầy đủ.
                </Text>
              </View>
            </View>
            {/* END BODY */}
          </Modal>
        </Portal>
        <View style={{ marginTop: 30, flex: 1, justifyContent: "flex-start" }}>
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
      </Provider>
    );
  }
}

export default AddMoneyScreen;
