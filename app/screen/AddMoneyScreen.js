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

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/arrow-right.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image4 = require("../../app/assets/Filler.png");

class AddMoneyScreen extends Component {
  state = {
    index: 0,
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
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    this.props.navigation.setParams({
      my: this,
    });
  }

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
            label="Nhập số tiền nạp"
            title="Nhập số tiền nạp"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            notflex="1"
          />

          <View style={[styles.titleTextinput, styles.textGeneral]}>
            <Text style={(styles.shopText2, styles.marginBottom20)}>
              Phương thức thanh toán
            </Text>
          </View>
          <View style={(styles.borderNormal, styles.bgWhite)}>
            <View style={[styles.shortOption, { padding: 0 }]}>
              <RadioButton />
              <Text style={styles.shortText}>
                Thanh toán chuyển khoản bằng mã QR
              </Text>

              <View
                style={[
                  {
                    backgroundColor: "##E3F2FC",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                  },
                  styles.flexRowStart,
                ]}
              >
                <Text style={{ color: "#777E90" }}>
                  Phí:
                  <Text style={[{ color: "black" }, styles.marginLeft5]}>
                    1,000 đ
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <View style={[styles.shortOption, { padding: 0 }]}>
              <RadioButton />
              <Text style={styles.shortText}>Thẻ ATM</Text>

              <View
                style={[
                  {
                    backgroundColor: "##E3F2FC",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                  },
                  styles.flexRowStart,
                ]}
              >
                <Text style={{ color: "#777E90" }}>
                  Phí:
                  <Text style={[{ color: "black" }, styles.marginLeft5]}>
                    1,000 đ
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <View style={[styles.shortOption, { padding: 0 }]}>
              <RadioButton />
              <Text style={styles.shortText}>Mã QR</Text>

              <View
                style={[
                  {
                    backgroundColor: "##E3F2FC",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                  },
                  styles.flexRowStart,
                ]}
              >
                <Text style={{ color: "#777E90" }}>
                  Phí:
                  <Text style={[{ color: "black" }, styles.marginLeft5]}>
                    1,000 đ
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <View>
              <Text style={styles.shortText}>Chuyển khoản ngân hàng</Text>

              <View style={[styles.shortOption, { padding: 0 }]}>
                <RadioButton />
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
                  <Text style={[styles.shortText, { marginTop: 0 }]}>VCB</Text>
                  <Text style={(styles.shopText2, styles.marginTop10)}>
                    Ngân hàng thương mại cổ phần Ngoại thương Việt Nam
                  </Text>
                </View>
              </View>
              <View style={styles.line} />

              <View style={[styles.shortOption, { padding: 0 }]}>
                <RadioButton />
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
                  <Text style={[styles.shortText, { marginTop: 0 }]}>STB</Text>
                  <Text style={(styles.shopText2, styles.marginTop10)}>
                    Ngân hàng TMCP Sài Gòn Thương Tín
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
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
              22222 ¥
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
              this.setState({
                visible: true,
              })
            }
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

  SecondRoute = () => (
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
            label="Nhập số tiền nạp"
            title="Nhập số tiền nạp"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            notflex="1"
          />

          <View style={[styles.titleTextinput, styles.textGeneral]}>
            <Text style={(styles.shopText2, styles.marginBottom20)}>
              Phương thức thanh toán
            </Text>
          </View>
          <View style={(styles.borderNormal, styles.bgWhite)}>
            <View style={[styles.shortOption, { padding: 0 }]}>
              <RadioButton />
              <Text style={styles.shortText}>
                Thanh toán chuyển khoản bằng mã QR
              </Text>

              <View
                style={[
                  {
                    backgroundColor: "##E3F2FC",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                  },
                  styles.flexRowStart,
                ]}
              >
                <Text style={{ color: "#777E90" }}>
                  Phí:
                  <Text style={[{ color: "black" }, styles.marginLeft5]}>
                    1,000 đ
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <View style={[styles.shortOption, { padding: 0 }]}>
              <RadioButton />
              <Text style={styles.shortText}>Thẻ ATM</Text>

              <View
                style={[
                  {
                    backgroundColor: "##E3F2FC",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                  },
                  styles.flexRowStart,
                ]}
              >
                <Text style={{ color: "#777E90" }}>
                  Phí:
                  <Text style={[{ color: "black" }, styles.marginLeft5]}>
                    1,000 đ
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <View style={[styles.shortOption, { padding: 0 }]}>
              <RadioButton />
              <Text style={styles.shortText}>Mã QR</Text>

              <View
                style={[
                  {
                    backgroundColor: "##E3F2FC",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                  },
                  styles.flexRowStart,
                ]}
              >
                <Text style={{ color: "#777E90" }}>
                  Phí:
                  <Text style={[{ color: "black" }, styles.marginLeft5]}>
                    1,000 đ
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.line} />

            <View>
              <Text style={styles.shortText}>Chuyển khoản ngân hàng</Text>

              <View style={[styles.shortOption, { padding: 0 }]}>
                <RadioButton />
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
                  <Text style={[styles.shortText, { marginTop: 0 }]}>VCB</Text>
                  <Text style={(styles.shopText2, styles.marginTop10)}>
                    Ngân hàng thương mại cổ phần Ngoại thương Việt Nam
                  </Text>
                </View>
              </View>
              <View style={styles.line} />

              <View style={[styles.shortOption, { padding: 0 }]}>
                <RadioButton />
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
                  <Text style={[styles.shortText, { marginTop: 0 }]}>STB</Text>
                  <Text style={(styles.shopText2, styles.marginTop10)}>
                    Ngân hàng TMCP Sài Gòn Thương Tín
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
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
              22222 ¥
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
              this.setState({
                visible: true,
              })
            }
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
    "2": this.SecondRoute,
    //"3": this.SecondRoute,
  });

  render() {
    return (
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
    );
  }
}

export default AddMoneyScreen;
