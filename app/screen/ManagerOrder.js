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
  ActivityIndicator,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { Rating, AirbnbRating, Slider } from "react-native-elements";
import { Modal, Portal, Provider, RadioButton } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

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
    id: 1,
    Status: "Done",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 30,
    text4: "5,434",
    Total: "1,016,158",
  },
  {
    id: 2,
    Status: "No",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 10,
    text4: "5,434",
    Total: "1,016,158",
  },
  {
    id: 3,
    Status: "Payment",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 50,
    text4: "5,434",
    Total: "1,016,158",
  },
  {
    id: 4,
    Status: "Done",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 90,
    text4: "2,434",
    Total: "4,016,158",
  },
  {
    id: 5,
    Status: "Payment",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 30,
    text4: "5,434",
    Total: "1,016,158",
  },
];

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/arrow-right.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image3_1 = require("../../app/assets/downright-3.png");
const image4 = require("../../app/assets/Filler.png");

//var component;

class ManagerOrder extends Component {
  state = {
    index: 0,
    routes: [
      { key: "1", title: "Tất cả" },
      { icon: "ios-paper", key: "2", title: "Đơn hàng đã hủy" },
      { icon: "ios-paper", key: "3", title: "Đã mua hàng" },
      { icon: "ios-paper", key: "4", title: "Đang chở xử lý" },
      { icon: "ios-paper", key: "5", title: "Đang vận chuyển VN" },
      { icon: "ios-paper", key: "6", title: "Đang vận chuyển JP" },
      { icon: "ios-paper", key: "7", title: "Tracking" },
      { icon: "ios-paper", key: "8", title: "Đã hoàn thành" },
    ],
    visibleFilter: false,
    orderList: [],
    ActivityIndicator: false,
    bgHUY: "white",
    colorHUY: "#23262F",
    bgAD: "white",
    colorAD: "#23262F",
    bg1: "white",
    bg2: "white",
    bg3: "white",
    bg4: "white",
    bg5: "white",
    price: 0,
    rating: 1
  };

  getCountTab = (key) => {
    var status;
    var listOrder = this.state.orderList;
    var count = 0,
      key;

    switch (key) {
      case "1":
        status = "";
        break;

      case "2":
        status = global.orderCancel;
        break;

      case "3":
        status = global.orderBuy;
        break;

      case "4":
        status = global.orderWaiting;
        break;

      case "5":
        status = global.orderVN;
        break;

      case "6":
        status = global.orderJYP;
        break;

      default:
        status = "check";
    }

    for (key = 0; key < listOrder.length; key++) {
      var statusOrder = listOrder[key].OrderStatus;

      if (status == "") count++;
      else if (statusOrder == status) count++;
    }

    return "1"; //count.toString();
  };

  showOrder = (status) => {
    var listOrder = this.state.orderList;
    var response = [];
    var count;

    for (count = 0; count < listOrder.length; count++)
      if (status == "") response.push(listOrder[count]);
      else if (listOrder[count].OrderStatus == status)
        response.push(listOrder[count]);

    return response;
  };

  HUY = () => {
    this.setState({
      bgHUY: "#3187EA",
      colorHUY: "white",
      bgAD: "white",
      colorAD: "#23262F",
      visibleFilter: false,
    });
  };

  AD = () => {
    this.setState({
      bgAD: "#3187EA",
      colorAD: "white",
      bgHUY: "white",
      colorHUY: "#23262F",
      visibleFilter: false,
    });
  };

  selectAuction = (auction) => {
    switch (auction) {
      case 2:
        this.setState({ bg2: this.state.bg2 == "white" ? "#3187EA" : "white" });
        break;

      case 3:
        this.setState({ bg3: this.state.bg3 == "white" ? "#3187EA" : "white" });
        break;

      case 4:
        this.setState({ bg4: this.state.bg4 == "white" ? "#3187EA" : "white" });
        break;

      case 5:
        this.setState({ bg5: this.state.bg5 == "white" ? "#3187EA" : "white" });
        break;

      default:
        this.setState({ bg1: this.state.bg1 == "white" ? "#3187EA" : "white" });
        break;
    }
  };

  reset = () => {
    this.setState({ bg1: 'white', bg2: 'white', bg3: 'white', bg4: 'white', bg5: 'white', price: 0, rating: 1 });
  }

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,
    headerRight: (
      <View style={{ paddingRight: 20, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => functions.gotoScreen(navigation, "ManagerOrder1")}
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
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    this.props.navigation.setParams({
      my: this,
    });

    functions.getOrders(this);
  }

  _handleIndexChange = (index) => {
    this.setState({ index });
  };

  Route = (status) => (
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
        //dataProductSlider={this.showOrder(status)}
        dataProductSlider={dataProductSlider}
        renderProductSlider={this._renderItem_3}
        col={1}
        style="1"
      />
      <IconBottom component={this} type="4" />
    </View>
  );

  _renderScene = SceneMap({
    "1": () => this.Route(""),
    "2": () => this.Route(global.orderCancel),
    "3": () => this.Route(global.orderBuy),
    "4": () => this.Route(global.orderWaiting),
    "5": () => this.Route(global.orderVN),
    "6": () => this.Route(global.orderJYP),
    "7": () => this.Route("check"),
    "8": () => this.Route("check"),
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
          flex: 1
        }}
      >
        {/* Text HEADER */}
        <View style={[styles.seach, styles.marginBottom20, { marginTop: 0, flex: 1 }]}>
          <Text style={[styles.fontBold, styles.paymentText4, { fontSize: 15, paddingRight: 10 }]}>{item.id}</Text>
          <Text style={[styles.mangerOderText1, { flex: 1 }]}>{item.Status}</Text>
        </View>
        <Text style={[styles.mangerOderText2, styles.marginBottom20]}>
          Ngày tạo đơn: {item.created_at}
        </Text>
        {/* END TEXT HEADER */}
        <View style={{ width: "100%", flexDirection: "row", flex: 1 }}>
          <Image
            style={{ width: 128, height: 90 }}
            source={{ uri: item.image }}
          />
          <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
            <Text style={styles.money3}>{item.Description}</Text>
            <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
              x{item.Amount}
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
          <Text style={[styles.fontBold, styles.paymentText6]}>
            Tổng thanh toán
          </Text>
          <View style={styles.flexRowStart}>
            <Text style={styles.mangerOderText3}>{item.Total}đ</Text>
            <Image
              source={image1}
              style={[styles.marginLeft5, { marginTop: 2 }]}
            />
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
          onPress={() =>
            functions.gotoScreenWithParam(
              JSON.stringify(item),
              this.props.navigation,
              "DetailOrderScreen"
            )
          }
        >
          <Text style={{ color: "#3187EA" }}>Xem chi tiết</Text>
        </TouchableOpacity>
      </View>
    );
  };

  hideModalFilter = () => {
    this.setState({
      visibleFilter: false,
    });
  };

  render() {
    var View1 = <View />;
    var View2 = (
      <View style={{ marginTop: 40 }}>
        <ActivityIndicator
          size="large"
          animating={this.state.ActivityIndicator}
        />
      </View>
    );

    var component = this;

    return (
      <Provider>
        {/* Modal filter */}
        <Portal>
          <Modal
            visible={this.state.visibleFilter}
            contentContainerStyle={styles.filterModal1}
          >
            {/* HEADER */}
            <View style={styles.filterHeaderModal}>
              <TouchableOpacity onPress={this.hideModalFilter.bind(this)}>
                <IconFontAwesome name="close" size={10} color="black" />
              </TouchableOpacity>
              <Text style={{ color: "black", fontSize: 20 }}>Bộ lọc</Text>
              <TouchableOpacity
              onPress={this.reset.bind(this)}
              >
              <Text style={{ color: "#3187EA", fontSize: 20 }}>Đặt lại</Text>
              </TouchableOpacity>
            </View>
            {/* END */}
            {/* Body */}
            <View style={{ backgroundColor: "white", padding: 20 }}>
              <View style={[styles.flexRowStart]}>
                <TouchableOpacity
                  style={[
                    styles.buttonNotFull,
                    styles.filter1,
                    { backgroundColor: this.state.bg1 },
                  ]}
                  onPress={() => this.selectAuction(1)}
                >
                  <Text style={styles.money2}>Y!Auction</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonNotFull,
                    styles.filter1,
                    { backgroundColor: this.state.bg2 },
                  ]}
                  onPress={() => this.selectAuction(2)}
                >
                  <Text style={styles.money2}>Mercari</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.flexRowStart}>
                <TouchableOpacity
                  style={[
                    styles.buttonNotFull,
                    styles.filter1,
                    { backgroundColor: this.state.bg3 },
                  ]}
                  onPress={() => this.selectAuction(3)}
                >
                  <Text style={styles.money2}>Rakuten</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonNotFull,
                    styles.filter1,
                    { backgroundColor: this.state.bg4 },
                  ]}
                  onPress={() => this.selectAuction(4)}
                >
                  <Text style={styles.money2}>Amazon JP</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.flexRowStart}>
                <TouchableOpacity
                  style={[
                    styles.buttonNotFull,
                    styles.filter1,
                    { backgroundColor: this.state.bg5 },
                  ]}
                  onPress={() => this.selectAuction(5)}
                >
                  <Text style={styles.money2}>Y!Shoppoing</Text>
                </TouchableOpacity>
              </View>

              <View
                style={[styles.line, { marginTop: 20, marginBottom: 20 }]}
              />

              <Text style={styles.filterTitle}>Khoảng giá</Text>
              <Slider
                    style={[{ width: "100%", height: 1 }]}
                    minimumValue={0}
                    maximumValue={50000}
                    value={this.state.price}
    onValueChange={(value) => this.setState({ price: value })}
                    minimumTrackTintColor="#777E90"
                    maximumTrackTintColor="#777E90"
                    thumbStyle={{
                      width: 10,
                      height: 10,
                      backgroundColor: "#777E90",
                    }}
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text>{global.min}</Text>
                    <Text>{Math.round(this.state.price)}</Text>
                    <Text>{global.max}</Text>
                  </View>

              <View
                style={[styles.line, { marginTop: 40, marginBottom: 20 }]}
              />

              <Text style={[styles.filterTitle]}>Đánh giá sản phẩm</Text>

              <View style={styles.flexRowStart}>
                <Rating
                  type='custom'
                  imageSize={15}
                  startingValue={this.state.rating}
                  ratingColor='#ccc'
                  ratingBackgroundColor='white'
                  style={[styles.rating]}
                />
              </View>

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
                      backgroundColor: this.state.bgHUY,
                      marginTop: 0,
                      borderColor: "#23262F",
                      borderWidth: 1,
                    },
                  ]}
                  onPress={this.HUY.bind(this)}
                >
                  <Text style={{ color: this.state.colorHUY }}>Huỷ</Text>
                </TouchableOpacity>
                {/* END */}
                {/* Button ap dung */}
                <TouchableOpacity
                  style={[
                    styles.buttonNotFull,
                    {
                      backgroundColor: this.state.bgAD,
                      marginTop: 0,
                      borderWidth: 1,
                    },
                  ]}
                  onPress={this.AD.bind(this)}
                >
                  <Text style={{ color: this.state.colorAD }}>Áp dụng</Text>
                </TouchableOpacity>
                {/* END */}
              </View>
            </View>
            {/* END */}
          </Modal>
        </Portal>
        {/* END */}
        <View style={{ marginTop: 0, flex: 1 }}>
          {this.state.ActivityIndicator == "" ? View1 : View2}
          <TabView
            navigationState={this.state}
            renderScene={this._renderScene}
            onIndexChange={this._handleIndexChange}
            //tabStyle={{ color: "red", width: 500 }}
            labelStyle={{ fontSize: 5 }}
            //initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={(props) => (
              <TabBar
                scrollEnabled
                {...props}
                style={{ backgroundColor: "white" }}
                renderLabel={({ route, color }) => (
                  <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <Text style={{ color: "black" }}>{route.title}</Text>
                    {route.key == this.state.index +1 ? (
                      <View
                        style={[
                          styles.circleSmall,
                          styles.marginLeft10,
                          { backgroundColor: "#3187EA" },
                        ]}
                      >
                        <Text>{component.getCountTab(route.key)}</Text>
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.circleSmall,
                          styles.marginLeft10,
                          { backgroundColor: "#ccc" },
                        ]}
                      >
                        <Text>{component.getCountTab(route.key)}</Text>
                      </View>
                    )}
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

export default ManagerOrder;
