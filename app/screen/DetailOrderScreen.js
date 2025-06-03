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
import { Rating, AirbnbRating, Tooltip } from "react-native-elements";
import {
  Text,
  Searchbar,
  RadioButton,
  Provider,
  Portal,
  Modal,
} from "react-native-paper";

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
import ListView from "../components/ListView";
import CheckBox from "../components/Checkbox";
import Address from "../components/Address";
import Dropdown from "../components/Select";

import styles from "../style/style";
import functions from "../../app/function/function";
import { or } from "react-native-reanimated";

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

class DetailOrderScreen extends Component {
  state = {
    visible: false,
    visibleGTGT: false,
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
    title: "Chi tiết đơn hàng",
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    var order = this.props.navigation.state.params.itemId;
    order = JSON.parse(order);

    var name = "釣り用フックキーパー 釣り用フ..."; //order.Address.Name;
    var phone = "+8492383934" //order.Address.Phone;
    var namePhone = name + " |" + "  " + phone;

    var address = "Viet Nam, TPHCM" //order.Address.Address;

    var MDH = "Mercari 1289"; //order.Shopping + order.id;

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
              <View style={styles.shortHeaderModal}>
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
          <Background full="1" start="1">
            <View style={[styles.homeBody, styles.marginHeader, { marginTop: 0 }]}>
              {/* Address */}
              <Address text1={namePhone} text2={address} component={this} />
              {/* END */}
              {/* Container 1 */}
              <View
                style={[styles.padding, styles.bgWhite, styles.marginTop10]}
              >
                <Text
                  style={[
                    styles.paymentText6,
                    styles.marginBottom10,
                    styles.marginTop10,
                  ]}
                >
                  Mã đơn hàng
                </Text>
                {/* Text HEADER */}
                <View
                  style={[
                    styles.seach,
                    styles.marginBottom20,
                    { marginTop: 0, flex: 1, flexDirection: 'column' },
                  ]}
                >
                  <Text style={[styles.fontBold, styles.paymentText4, { fontSize: 15 }]}>
                    {MDH}
                  </Text>
                  <Text style={[styles.mangerOderText1, { flex: 1 }]}>
                    {order.ProductStatus}
                  </Text>
                </View>
                {/* END TEXT HEADER */}
                <Text
                  style={[
                    styles.paymentText6,
                    styles.marginBottom10,
                    styles.marginTop10,
                  ]}
                >
                  Ngày tạo đơn
                </Text>
                <Text style={styles.paymentText1}>{order.created_at}</Text>
                <Text
                  style={[
                    styles.paymentText6,
                    styles.marginBottom10,
                    styles.marginTop10,
                  ]}
                >
                  {order.Shopping}
                </Text>
                <Text style={styles.paymentText1}>{order.Product}</Text>
                <Text
                  style={[
                    styles.paymentText6,
                    styles.marginBottom10,
                    styles.marginTop10,
                  ]}
                >
                  Phương thức vận chuyển
                </Text>
                <Text style={styles.paymentText1}>{order.Shipping}</Text>
              </View>
              <View
                style={[styles.padding, styles.bgWhite, styles.marginTop10]}
              >
                <Text style={styles.paymentText1}>Thông tin thanh toán</Text>
                {/* List product */}
                <View
                  style={[
                    styles.marginTop20,
                    styles.marginBottom20,
                    { width: "100%", flexDirection: "row", flex: 1 },
                  ]}
                >
                  <Image source={{ uri: "http://vunam.io.vn/tojapan/image/image_6.png" }} style={{ width: 70, height: 70 }} />
                  <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
                    <Text style={styles.money3}>{order.Description}</Text>
                    <Text style={styles.money3}>x{order.Amount}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                          đ
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* End list product */}
              </View>
              {/* CONTAINER 3 */}
              <View
                style={[styles.padding, styles.bgWhite, styles.marginTop10]}
              >
                <View style={[styles.seach, { marginTop: 0 }]}>
                  <Text style={styles.money1}>Tổng tiền sản phẩm</Text>
                  <Text style={styles.money2}>{order.Total} ¥</Text>
                </View>
                <View style={[styles.seach, styles.marginTop10]}>
                  <Text style={styles.money1}>Tiền thuế</Text>
                  <Text style={styles.money2}>0¥</Text>
                </View>
                <View style={[styles.seach, styles.marginTop10]}>
                  <Text style={styles.money1}>Phí dịch vụ ToJapan</Text>
                  <Text style={styles.money2}>0¥</Text>
                </View>
                <View style={[styles.seach, styles.marginTop10]}>
                  <Text style={styles.money1}>Phí thanh toán</Text>
                  <Text style={styles.money2}>0¥</Text>
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
                  <Text style={[styles.money2, { color: "#13AB2C" }]}>0¥</Text>
                </View>
                {/* TỒNG ĐƠN HÀNG */}
                <View>
                  <View style={[styles.seach, styles.marginTop10]}>
                    <Text style={[styles.money1, styles.fontBold]}>
                      Tổng thanh toán
                    </Text>
                    <View>
                      <Text
                        style={[
                          styles.money2,
                          styles.fontBold,
                          { color: "#D63F5C" },
                        ]}
                      >
                        {order.Total}¥
                      </Text>
                      <Text
                        style={[
                          styles.containerHeaderText1,
                          styles.marginTop10,
                        ]}
                      >
                        {order.Total * 13} đ
                      </Text>
                    </View>
                  </View>
                </View>
                {/* END TỒNG ĐƠN HÀNG */}
              </View>
              {/* END CONTAINER 3 */}
              {/* Total */}
              <View
                style={[
                  styles.bgWhite,
                  {
                    padding: 20,
                    marginTop: 40,
                    alignItems: "center",
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.button,
                    { backgroundColor: "#3187EA", marginTop: 0 },
                  ]}
                  onPress={() =>
                    functions.gotoScreen(this.props.navigation, "HomeScreen")
                  }
                >
                  <Text style={{ color: "white" }}>Thanh toán</Text>
                </TouchableOpacity>
              </View>
              {/* END */}
            </View>
          </Background>
        </ScrollView>
      </Provider>
    );
  }
}

export default DetailOrderScreen;
