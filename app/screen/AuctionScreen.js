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
} from "react-native";
import { Rating, AirbnbRating, Tooltip } from "react-native-elements";
import {
  Text,
  Searchbar,
  RadioButton,
  Provider,
  Portal,
  Modal,
} from "react-native-paper";

import moment from "moment";

import Background from "../components/Background";
import BackgroundHome from "../components/BackgroundHome";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";
import HeaderBg from "../components/HeaderBackground";
import ListView from "../components/ListView";
import CheckBox from "../components/Checkbox";
import Address from "../components/Address";
import Dropdown from "../components/Select";

import styles from "../style/style";
import functions from "../../app/function/function";

const countries = [
  "Gói cơ bản 700",
  "Gói nâng cao 700",
  "Gói cơ bản 700",
  "Gói cơ bản 700",
];

const img = require("../../app/assets/kiemtra_hang.png");
const image1 = require("../../app/assets/mercari_1.png");
const image2 = require("../../app/assets/goitieuchuan.png");
const image3 = require("../../app/assets/downright-3.png");
const image4 = require("../../app/assets/info.png");
const image5 = require("../../app/assets/ship.png");
const image6 = require("../../app/assets/product.png");
const image7 = require("../../app/assets/Gift_Codes.png");
const image8 = require("../../app/assets/phuongthucthanhtoan.png");
const image9 = require("../../app/assets/image_75.png");
const image10 = require("../../app/assets/Icon_R.png");

class AuctionScreen extends Component {
  state = {
    visible: false,
    visibleGTGT: false,
    listAddress: {
      data: [
        {
          Name: global.noName,
          Phone: global.noPhone,
          Address: global.noAddress,
        },
      ],
    },
    currentCount: 0,
    intervalId: null,
    saveShip: true,
    transfer: true,
    userDetail: {
      Balance: 0,
      Hold: 0,
      JPY: 0,
    },
    money: 0,
    ActivityIndicator: true,
  };

  _renderItem({ item, index }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.title}</Text>
        <Image source={item.img} />
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
      <View
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: "white",
          borderBottomColor: "#ccc",
          borderBottomWidth: 3,
        }}
      >
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Image source={img} />
          <View style={{ marginTop: 0, marginLeft: 20 }}>
            <Text style={styles.money3}>{item.text1}</Text>
            <Text style={styles.money3}>{item.text2}</Text>
            <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
              {item.text3}
            </Text>
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
            </View>
          </View>
        </View>
        {/* Footer */}
        <View style={[styles.seach, { marginTop: 0 }]}>
          <CheckBox label="" status="checked" onPress={null} />
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
        {/* END */}
      </View>
    );
  };

  onChangeSearch = (navigation) => {
    functions.gotoScreen(navigation, "ForgotPassWordScreen");
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Đấu giá",
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    var intervalId = setInterval(this.time, 1000);
    this.setState({ intervalId: intervalId });

    functions.getListAddress(this);
    functions.getUserDetail(this);
  }

  componentWillUnmount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    clearInterval(this.state.intervalId);
  }

  getProduct = () => {
    var product = this.props.navigation.state.params.itemId;
    product = JSON.parse(product);

    return product;
  };

  time = () => {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  };

  render() {
    var name = this.state.listAddress.data[0].Name;
    var phone = this.state.listAddress.data[0].Phone;
    var namePhone = name + " |" + "  " + phone;

    var address = this.state.listAddress.data[0].Address;

    var product = this.getProduct();

    var dateCurrent = moment().unix();
    var dateEndBid = moment(product.end).unix();

    var time = dateEndBid - dateCurrent;
    var date = new Date(time * 1000);

    var day = Math.floor(time / 86400);
    var hours = Math.floor((time - day * 24 * 3600) / 3600);
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
        size="large"
        animating={this.state.ActivityIndicator}
      />
    );

    return (
      <Provider>
        <ScrollView>
          <Portal>
            {/* Modal short */}
            <Modal
              visible={this.state.visibleGTGT}
              contentContainerStyle={styles.shortModal}
            >
              {/* HEADER */}
              <View style={[styles.shortHeaderModal, { display: "none" }]}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  Chọn dịch vụ GTGT
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      visibleGTGT: false,
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
              {/* Body */}
              <View style={{ backgroundColor: "white" }}>
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
                  <CheckBox
                    label="Gói cơ bản"
                    status="checked"
                    onPress={null}
                  />
                  <Text style={[styles.shortText, styles.fontBold]}>0¥</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
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
                  <CheckBox
                    label="Gói kiểm tra hàng hóa"
                    status="checked"
                    onPress={null}
                  />
                  <Text style={[styles.shortText, styles.fontBold]}>0¥</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
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
                  <CheckBox
                    label="Bảo hiểm hàng hóa"
                    status="checked"
                    onPress={null}
                  />
                  <Text style={[styles.shortText, styles.fontBold]}>0¥</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
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
                  <CheckBox label="Chụp ảnh" status="checked" onPress={null} />
                  <Text style={[styles.shortText, styles.fontBold]}>0¥</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View>
                  <View
                    style={[
                      styles.shortOption,
                      { justifyContent: "space-between", paddingBottom: 0 },
                    ]}
                  >
                    <CheckBox
                      label="Gói tiêu chuẩn"
                      status="checked"
                      onPress={null}
                    />
                    <View>
                      <Text style={[styles.shortText, styles.fontBold]}>
                        500¥
                      </Text>
                      <View style={styles.flexRowStart}>
                        <Text style={[styles.shortText]}>800¥</Text>
                        <Text style={{ position: "absolute", top: 8 }}>
                          ------------
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ paddingLeft: 50 }}>
                    <View
                      style={[styles.shortOption, { paddingTop: 0, margin: 0 }]}
                    >
                      <RadioButton status="checked" />
                      <Text style={styles.shortText}>
                        Gói kiểm tra hàng hóa
                      </Text>
                    </View>
                    <View
                      style={[styles.shortOption, { paddingTop: 0, margin: 0 }]}
                    >
                      <RadioButton />
                      <Text style={styles.shortText}>Bảo hiểm hàng hóa</Text>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                </View>

                <View>
                  <View
                    style={[
                      styles.shortOption,
                      { justifyContent: "space-between", paddingBottom: 0 },
                    ]}
                  >
                    <CheckBox
                      label="Gói Bổ sung"
                      status="checked"
                      onPress={null}
                    />
                    <View>
                      <Text style={[styles.shortText, styles.fontBold]}>
                        500¥
                      </Text>
                      <View style={styles.flexRowStart}>
                        <Text style={[styles.shortText]}>800¥</Text>
                        <Text style={{ position: "absolute", top: 8 }}>
                          ------------
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ paddingLeft: 50 }}>
                    <View
                      style={[styles.shortOption, { paddingTop: 0, margin: 0 }]}
                    >
                      <RadioButton status="checked" />
                      <Text style={styles.shortText}>
                        Gói kiểm tra hàng hóa
                      </Text>
                    </View>
                    <View
                      style={[styles.shortOption, { paddingTop: 0, margin: 0 }]}
                    >
                      <RadioButton />
                      <Text style={styles.shortText}>Bảo hiểm hàng hóa</Text>
                    </View>
                    <View
                      style={[styles.shortOption, { paddingTop: 0, margin: 0 }]}
                    >
                      <RadioButton />
                      <Text style={styles.shortText}>Chụp ảnh</Text>
                    </View>
                  </View>
                  <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        justifyContent: "space-between",
                      },
                      styles.padding,
                    ]}
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
                        },
                      ]}
                      onPress={null}
                    >
                      <Text style={{ color: "#3187EA" }}>Huỷ bỏ</Text>
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
              </View>
              {/* END */}
            </Modal>
            {/* END */}
          </Portal>
          <Portal>
            <Modal
              visible={this.state.visible}
              transparent={true}
              contentContainerStyle={[
                styles.bgWhite,
                styles.borderNormal,
                styles.padding,
                { marginLeft: 30, marginRight: 30, alignItems: "center" },
              ]}
            >
              <Image source={image9} />
              <Text
                style={[
                  styles.fontBold,
                  styles.paymentText8,
                  styles.marginTop10,
                ]}
              >
                Cảm ơn bạn đã mua hàng tại ToJapan
              </Text>
              <Text style={[styles.paymentText6, styles.marginTop10]}>
                Thông tin chi tiết đơn hàng đã được đến email
                phannlinh140601@gmail.com. Nếu k tìm thấy vui lòng kiểm tra
                trong hộp thư Span hoặc Junk Folder
              </Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#3187EA", marginTop: 20 },
                ]}
                onPress={() =>
                  functions.gotoScreen(this.props.navigation, "HomeScreen")
                }
              >
                <View style={[styles.flexRowStart, styles.alignCenter]}>
                  <Text style={{ color: "white" }}>Mua sắm ngay</Text>
                  <Image source={image10} style={[styles.marginLeft10]} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { marginTop: 0 }]}
                onPress={() =>
                  functions.gotoScreen(this.props.navigation, "ManagerOrder")
                }
              >
                <Text
                  style={[{ color: "#3187EA", fontSize: 18 }, styles.fontBold]}
                >
                  Quản lý đơn hàng
                </Text>
              </TouchableOpacity>
            </Modal>
          </Portal>
          <BackgroundHome full="1" start="1">
            <View style={[styles.homeBody, styles.marginHeader]}>
              {/* Address */}
              <Address text1={namePhone} text2={address} component={this} />
              {/* END */}
              {/* Container 1 */}
              <View style={[styles.padding, styles.marginTop10]}>
                <Text
                  style={[
                    styles.paymentText2,
                    styles.marginTop10,
                    styles.marginBottom20,
                  ]}
                >
                  {global.TextAuction1}
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
                    <Text>
                      {day}d: {hours}h : {minutes}m : {seconds}s
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    { backgroundColor: "#FAE5EA" },
                    styles.padding,
                    styles.borderNormal,
                    styles.flexRowStart,
                    styles.marginTop20,
                  ]}
                >
                  <Image source={require("../assets/canbao.png")} />
                  <Text
                    style={[
                      styles.paymentText6,
                      styles.marginLeft5,
                      { color: "#D63F5C" },
                    ]}
                  >
                    {global.seller}: {product.seller} (
                    {global.informationSeller} {product.seller_url})
                  </Text>
                </View>

                <View
                  style={[
                    styles.titleTextinput,
                    styles.textGeneral,
                    styles.marginTop20,
                  ]}
                >
                  <Text style={styles.paymentText6}>Giá đấu của bạn</Text>
                </View>
                <TextInput
                  label="¥"
                  keyboardType="numeric"
                  onChangeText={(value) =>
                    this.setState({
                      money: value.replace(/[^0-9]/g, ''),
                    })
                  }
                  value={this.state.money}
                  styleParent={{
                    borderColor: "#E6E8EC",
                    backgroundColor: "white",
                  }}
                />

                <View style={{ paddingRight: 20 }}>
                  <CheckBox
                    label="Xác nhận đồng ý đấu giá sản phẩm và không khiếu nại"
                    status="checked"
                    onPress={null}
                  />
                </View>

                <Text
                  style={[
                    styles.paymentText3,
                    styles.marginTop20,
                    styles.marginBottom20,
                  ]}
                >
                  Chọn dịch vụ GTGT
                </Text>
                {/* Dropdown1 */}
                <Dropdown
                  onSelect={(selectedItem, index) => {
                    this.setState({
                      visibleGTGT: true,
                    });
                  }}
                  data={countries}
                  renderCustomizedButtonChild={(selectedItem, index) => {
                    return (
                      <View style={[styles.flexRowStart]}>
                        <Image source={image2} />
                        <Text
                          style={[styles.marginLeft10, styles.paymentText4]}
                        >
                          {selectedItem ? selectedItem : "Chọn gói"}
                        </Text>
                        <View style={[styles.flexRowEnd]}>
                          <Image source={image3} />
                        </View>
                      </View>
                    );
                  }}
                />
                {/* END Dropdown1 */}
                <Text
                  style={[
                    styles.paymentText3,
                    styles.marginTop20,
                    styles.marginBottom20,
                  ]}
                >
                  Phương thức vận chuyển
                </Text>
                <View style={[styles.shortOption, { padding: 0 }]}>
                  <RadioButton
                    status={this.state.saveShip ? "checked" : "unchecked"}
                    onPress={() => this.setState({ saveShip: true })}
                  />
                  <Text style={styles.shortText}>
                    Gom và giao hàng tiết kiệm
                  </Text>
                  <Tooltip popover={<Text>Info here</Text>}>
                    <Image
                      source={image4}
                      style={{ marginTop: 10, marginLeft: 10 }}
                    />
                  </Tooltip>
                </View>
                <View
                  style={[
                    styles.shortOption,
                    { padding: 0 },
                    styles.marginBottom20,
                  ]}
                >
                  <RadioButton
                    status={!this.state.saveShip ? "checked" : "unchecked"}
                    onPress={() => this.setState({ saveShip: false })}
                  />
                  <Text style={styles.shortText}>
                    Giao hàng ngay khi nhận được tại kho
                  </Text>
                  <Tooltip popover={<Text>Info here</Text>}>
                    <Image
                      source={image4}
                      style={{ marginTop: 10, marginLeft: 10 }}
                    />
                  </Tooltip>
                </View>
                {/* END */}
              </View>
              {/* END CONTAINER 1*/}
              {/* CONTAINER 2*/}
              <View
                style={[styles.padding, styles.bgWhite, styles.marginTop10]}
              >
                {/* HEADER */}
                <View style={[styles.flexRowStart, styles.alignCenter]}>
                  <Image source={image8} />
                  <Text style={[styles.paymentText1, styles.marginLeft10]}>
                    2. Chọn phương thức thanh toán
                  </Text>
                </View>
                {/* END HEADER */}
                <Text
                  style={[
                    styles.href,
                    styles.marginTop20,
                    styles.marginBottom10,
                  ]}
                >
                  Bạn có biết?
                </Text>
                <Text style={styles.paymentText6}>
                  Nếu bạn thanh toán bằng Jb Wallet, thanh toán của bạn sẽ không
                  bị chia nhỏ và được thực hiện nhiều lần.
                </Text>
                {/* OPTION PAYMENT */}
                <View style={styles.marginTop20}>
                  <View
                    style={[
                      styles.shortOption,
                      styles.borderNormal,
                      { borderWidth: 1, borderColor: "#3187EA" },
                    ]}
                  >
                    <RadioButton
                      status={this.state.transfer ? "checked" : "unchecked"}
                      onPress={() => this.setState({ transfer: true })}
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.paymentText4}>Chuyển khoản</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      functions.gotoScreenWithParam(
                        JSON.stringify(this.state.userDetail),
                        this.props.navigation,
                        "WaletScreen"
                      )
                    }
                  >
                    <View style={[styles.shortOption, styles.marginTop20]}>
                      <RadioButton
                        status={!this.state.transfer ? "checked" : "unchecked"}
                        onPress={() => this.setState({ transfer: false })}
                      />
                      <View style={{ flex: 1 }}>
                        <Text style={styles.paymentText4}>Ví VND</Text>
                        <Text style={[styles.marginTop10, styles.paymentText2]}>
                          Số dư khả dụng: {this.state.userDetail.Balance}đ
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* END OPTION PAYMENT */}
              </View>
              {/* END CONTAINER 2*/}
              {/* CONTAINER 3 */}
              <View
                style={[styles.padding, styles.bgWhite, styles.marginTop10]}
              >
                <View style={[styles.seach, { marginTop: 0 }]}>
                  <Text style={styles.money1}>Tổng tiền sản phẩm</Text>
                  <Text style={styles.money2}>{this.state.money} ¥</Text>
                </View>
                <View style={[styles.seach, styles.marginTop10]}>
                  <Text style={styles.money1}>Tiền thuế</Text>
                  <Text style={styles.money2}>{global.vat} ¥</Text>
                </View>
                <View style={[styles.seach, styles.marginTop10]}>
                  <Text style={styles.money1}>Phí dịch vụ ToJapan</Text>
                  <Text style={styles.money2}>{global.tojapan} ¥</Text>
                </View>
                <View style={[styles.seach, styles.marginTop10]}>
                  <Text style={styles.money1}>Phí thanh toán</Text>
                  <Text style={styles.money2}>{global.thanhtoan} ¥</Text>
                </View>
                <View
                  style={[
                    styles.seach,
                    styles.marginTop10,
                    styles.paddingBottom20,
                    { borderBottomColor: "#ccc", borderBottomWidth: 1 },
                  ]}
                >
                  <Text style={styles.money1}>Phiếu giảm giá</Text>
                  <Text style={[styles.money2, { color: "#13AB2C" }]}>
                    {global.giam_gia} ¥
                  </Text>
                </View>
                {/* TỒNG ĐƠN HÀNG */}
                <View>
                  <View style={[styles.seach, styles.marginTop10]}>
                    <Text style={[styles.money1, styles.fontBold]}>
                      Tổng đơn hàng
                    </Text>
                    <Text
                      style={[
                        styles.money2,
                        styles.fontBold,
                        { color: "#D63F5C" },
                      ]}
                    >
                      {this.state.money} ¥
                    </Text>
                  </View>
                </View>
                {/* END TỒNG ĐƠN HÀNG */}
              </View>
              {/* END CONTAINER 3 */}
              <View>
                <View style={[styles.flexRowStart, styles.padding]}>
                  <CheckBox label="" status="checked" onPress={null} />
                  <Text style={styles.containerHeaderText1}>
                    Đồng ý với
                    <Text style={[styles.href]}> Điều khoản & chính sách</Text>
                    <Text> của to japan</Text>
                  </Text>
                </View>

                <Text style={[styles.paymentText2, { marginLeft: 20 }]}>
                  Bạn nên tìm hiểu về các điều khoản và chính sách cỉa ToJapan
                  trước khi đấu thầu
                </Text>
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
                {/* end */}
                <TouchableOpacity
                  style={[
                    styles.button,
                    { backgroundColor: "#3187EA", marginTop: 0 },
                  ]}
                  onPress={() => functions.addBid(product, this)}
                >
                  {this.state.ActivityIndicator == "" ? View1 : View2}
                  <Text style={{ color: "white" }}>Đấu giá</Text>
                </TouchableOpacity>
              </View>
              {/* END */}
            </View>
          </BackgroundHome>
        </ScrollView>
      </Provider>
    );
  }
}

export default AuctionScreen;
