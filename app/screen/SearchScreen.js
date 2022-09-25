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
} from "react-native";
import { Rating, AirbnbRating } from "react-native-elements";
import { Text, Modal, Portal, Provider, RadioButton } from "react-native-paper";

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

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image4 = require("../../app/assets/Filler.png");

class SearchScreen extends Component {
  state = {
    visible: false,
    visibleFilter: false,
  };

  _renderItem({ item, index }) {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={item.img} />
        <Text>{item.title}</Text>
      </View>
    );
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
        onPress={() =>
          navigation.getParam('my').showModalFilter.bind(navigation.getParam('my'))
        }
        >
          <Image source={image4} />
        </TouchableOpacity>
      </View>
    ),

    headerTitleStyle: {
      color: "white",
    },
    title: "Đồng hồ lô",
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    this.props.navigation.setParams({
      my: this
  })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  showModalFilter = () => {
    this.setState({
      visibleFilter: true,
    });
  };

  hideModalFilter = () => {
    this.setState({
      visibleFilter: false,
    });
  };

  render() {
    return (
      <Provider>
        <ScrollView>
          {/* Modal */}
          <Portal>
            {/* Modal short */}
            <Modal
              visible={this.state.visible}
              contentContainerStyle={styles.shortModal}
            >
              {/* HEADER */}
              <View style={styles.shortHeaderModal}>
                <Text style={{ color: "white", fontSize: 20 }}>Sắp xếp</Text>
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
                  <RadioButton />
                  <Text style={styles.shortText}>Mặc định</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View style={styles.shortOption}>
                  <RadioButton />
                  <Text style={styles.shortText}>Giá từ thấp đến cao</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View style={styles.shortOption}>
                  <RadioButton />
                  <Text style={styles.shortText}>Giá từ cao đến thấp</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View style={styles.shortOption}>
                  <RadioButton />
                  <Text style={styles.shortText}>Sản phẩm mới</Text>
                </View>
              </View>
              {/* END */}
            </Modal>
            {/* END */}
            {/* Modal filter */}
            <ScrollView>
              <Portal>
                <Modal
                  visible={this.state.visibleFilter}
                  contentContainerStyle={styles.filterModal}
                >
                  {/* HEADER */}
                  <View style={styles.filterHeaderModal}>
                    <TouchableOpacity onPress={this.hideModal.bind(this)}>
                      <Text style={{ color: "black" }}>x</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "black", fontSize: 20 }}>Bộ lọc</Text>
                    <Text style={{ color: "#3187EA", fontSize: 20 }}>
                      Đặt lại
                    </Text>
                  </View>
                  {/* END */}
                  {/* Body */}
                  <View style={{ backgroundColor: "white", padding: 20 }}>
                    <Text style={styles.filterTitle}>Danh mục</Text>
                    <Dropdown
                      data={countries}
                      defaultButtonText="Chọn danh mục"
                    />
                    <Text style={styles.filterTitle}>Kích thước</Text>
                    <Dropdown data={countries} defaultButtonText="Tất cả" />
                    <Text style={styles.filterTitle}>
                      Lọc theo tình trạng hàng hoá
                    </Text>
                    <CheckBox label="Mới" status="checked" onPress={null} />
                    <CheckBox
                      label="Không có vết xước"
                      status="checked"
                      onPress={null}
                    />
                    <CheckBox
                      label="Vết xước"
                      status="checked"
                      onPress={null}
                    />
                    <CheckBox
                      label="Ít khi sử dụng"
                      status="checked"
                      onPress={null}
                    />
                    <CheckBox
                      label="Hơi xước"
                      status="checked"
                      onPress={null}
                    />
                    <CheckBox
                      label="Đã sử dụng"
                      status="checked"
                      onPress={null}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10,
                      }}
                    >
                      {/* Button huy */}
                      <TouchableOpacity
                        style={[
                          styles.buttonNotFull,
                          {
                            backgroundColor: "white",
                            marginTop: 0,
                            borderColor: "#23262F",
                            borderWidth: 1,
                          },
                        ]}
                        onPress={null}
                      >
                        <Text style={{ color: "#23262F" }}>Huỷ</Text>
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
                        <Text style={{ color: "white" }}>Áp dụng</Text>
                      </TouchableOpacity>
                      {/* END */}
                    </View>
                  </View>
                  {/* END */}
                </Modal>
              </Portal>
            </ScrollView>
            {/* END */}
          </Portal>
          {/* END */}
          <Background full="1">
            <View style={styles.homeBody}>
              <View>
                {/* kết quả tìm kiếm */}
                <View style={styles.seach}>
                  <Text>
                    Kết quả tìm kiếm:
                    <Text style={{ fontWeight: "700" }}>5.44</Text>
                  </Text>
                  <TouchableOpacity onPress={this.showModal.bind(this)}>
                    <Image source={img1} />
                  </TouchableOpacity>
                </View>
                {/* END */}
                {/* Từ khoá phổ biến */}
                <Header1>Từ khoá phổ biến</Header1>
                <Carousel
                  data={dataTKPB1}
                  renderItem={this._renderItem_2_}
                  sliderWidth={350}
                  top={0}
                  itemWidth={140}
                />
                {/* END */}
                <View style={{ marginTop: 30 }} />
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
      </Provider>
    );
  }
}

export default SearchScreen;
