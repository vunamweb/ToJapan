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
import Address1 from "../components/Address1";
import Dropdown from "../components/Select";

import styles from "../style/style";
import functions from "../function/function";

const img4 = require("../../app/assets/VN.png");
const image4 = require("../../app/assets/info.png");
const img2 = require("../../app/assets/check.png");
const img3 = require("../../app/assets/JP.png");
const img5 = require("../../app/assets/history.png");

var moneyJYP, moneyJYPHOLD, moneyVN, moneyVNHOLD, QD;

class WaletScreen extends Component {
  state= {
     change: false
  }

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerRight: (
      <View style={{ paddingRight: 20, marginTop: 0, flexDirection: "row" }}>
        <TouchableOpacity onPress={null}>
          <Image source={img5} style={{ marginTop: 0 }} />
        </TouchableOpacity>
      </View>
    ),

    headerTitleStyle: {
      color: "white",
    },
    title: "Ví",
  });

  componentDidMount() {
    var userDetail = this.props.navigation.state.params.itemId;
    userDetail = JSON.parse(userDetail);

    moneyVN = userDetail.Balance;
    moneyVNHOLD = userDetail.Hold;

    moneyJYP = userDetail.Balance * userDetail.JPY;
    moneyJYPHOLD = userDetail.Hold * userDetail.JPY;

    QD = userDetail.JPY;

    this.setState({ change: true });
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    
    return (
      <Provider>
        <ScrollView>
          <Background full="1" start="1">
            <View style={[styles.homeBody, styles.marginHeader]}>
              <View
                style={[
                  styles.address,
                  styles.bgWhite,
                  styles.padding,
                  styles.borderNormal,
                  styles.marginBottom20,
                  styles.margin,
                  {
                    borderColor: "#3187EA",
                    borderWidth: 1,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  },
                ]}
              >
                <View>
                  <Text style={styles.paymentText2}>Tiền có sẵn</Text>
                  <Text style={(styles.marginTop5, styles.waletText1)}>
                    { functions.convertMoney(moneyJYP) } ¥
                  </Text>
                </View>
                <View style={{ marginLeft: 50 }}>
                  <View style={styles.flexRowStart}>
                    <Text style={styles.paymentText2}>Tiền giữ</Text>
                    <Tooltip popover={<Text>Info here</Text>}>
                      <Image
                        source={image4}
                        style={{ marginTop: 2, marginLeft: 10 }}
                      />
                    </Tooltip>
                  </View>

                  <Text style={(styles.marginTop5, styles.waletText1)}>
                    { functions.convertMoney(moneyJYPHOLD) } ¥
                  </Text>
                </View>
              </View>

              <Text style={(styles.paymentText6, styles.margin)}>
                Số tiền này là một ước tính dựa trên tỷ lệ chuyển đổi tiền tệ
                gần đây nhất.
              </Text>

              {/* JPY */}
              <View
                style={[styles.marginTop20, styles.bgWhite, styles.padding]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.flexRowStart}>
                    <Image source={img3} />
                    <Text
                      style={[
                        styles.marginLeft10,
                        styles.waletText2,
                        styles.fontBold,
                      ]}
                    >
                      JPY
                    </Text>
                  </View>
                  <View style={[styles.flexRowStart]}>
                    <View
                      style={[
                        {
                          backgroundColor: "#3187EA",
                          paddingVertical: 3,
                          paddingHorizontal: 15,
                          borderRadius: 10,
                        },
                        styles.flexRowStart,
                      ]}
                    >
                      <Image source={img2} />
                      <Text style={{ color: "white" }}>Mặc định</Text>
                    </View>
                  </View>
                </View>

                <View
                  style={[
                    styles.address,
                    styles.bgWhite,
                    styles.marginBottom20,
                    styles.marginTop20,
                    { justifyContent: "flex-start", alignItems: "flex-start" },
                  ]}
                >
                  <View>
                    <Text style={styles.paymentText2}>Tiền có sẵn</Text>
                    <Text style={(styles.marginTop5, styles.waletText1)}>
                      { functions.convertMoney(moneyJYP) } ¥
                    </Text>
                    <Text style={styles.paymentText2}>
                      Quy đổi
                      <Text style={[styles.fontBold, styles.marginLeft5]}>
                        {QD} ¥
                      </Text>
                    </Text>
                  </View>
                  <View style={{ marginLeft: 50 }}>
                    <View style={styles.flexRowStart}>
                      <Text style={styles.paymentText2}>Tiền giữ</Text>
                      <Tooltip popover={<Text>Info here</Text>}>
                        <Image
                          source={image4}
                          style={{ marginTop: 2, marginLeft: 10 }}
                        />
                      </Tooltip>
                    </View>

                    <Text style={(styles.marginTop5, styles.waletText1)}>
                      { functions.convertMoney(moneyJYPHOLD) } ¥
                    </Text>
                    <Text style={styles.paymentText2}>
                      Quy đổi
                      <Text style={[styles.fontBold, styles.marginLeft5]}>
                        {QD} ¥
                      </Text>
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: "#cccccc",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                />

                <View
                  style={[
                    {
                      flexDirection: "row",
                    },
                    styles.padding,
                  ]}
                >
                  {/* Button ap dung */}
                  <TouchableOpacity
                    style={[
                      styles.buttonNotFull,
                      { backgroundColor: "#3187EA", marginTop: 0 },
                    ]}
                    onPress={() =>
                      functions.gotoScreen(this.props.navigation, "AddMoneyScreen")
                    }
                  >
                    <Text style={{ color: "white" }}>Nạp tiền</Text>
                  </TouchableOpacity>
                  {/* END */}
                  {/* Button huy */}
                  <TouchableOpacity
                    style={[
                      styles.buttonNotFull,
                      {
                        backgroundColor: "white",
                        marginTop: 0,
                        borderColor: "#3187EA",
                        borderWidth: 1,
                        marginStart: 10,
                      },
                    ]}
                    onPress={null}
                  >
                    <Text style={{ color: "#3187EA" }}>Rút tiền</Text>
                  </TouchableOpacity>
                  {/* END */}
                </View>
              </View>
              {/* END JPY */}
              {/* VND */}
              <View
                style={[styles.marginTop20, styles.bgWhite, styles.padding]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.flexRowStart}>
                    <Image source={img4} />
                    <Text
                      style={[
                        styles.marginLeft10,
                        styles.waletText2,
                        styles.fontBold,
                      ]}
                    >
                      Viêt nam đồng
                    </Text>
                  </View>
                  <View style={[styles.flexRowStart]}>
                  </View>
                </View>

                <View
                  style={[
                    styles.address,
                    styles.bgWhite,
                    styles.marginBottom20,
                    styles.marginTop20,
                    { justifyContent: "flex-start", alignItems: "flex-start" },
                  ]}
                >
                  <View>
                    <Text style={styles.paymentText2}>Tiền có sẵn</Text>
                    <Text style={(styles.marginTop5, styles.waletText1)}>
                      { functions.convertMoney(moneyVN) } ¥
                    </Text>
                    <Text style={styles.paymentText2}>
                      Quy đổi
                      <Text style={[styles.fontBold, styles.marginLeft5]}>
                        {QD} ¥
                      </Text>
                    </Text>
                  </View>
                  <View style={{ marginLeft: 50 }}>
                    <View style={styles.flexRowStart}>
                      <Text style={styles.paymentText2}>Tiền giữ</Text>
                      <Tooltip popover={<Text>Info here</Text>}>
                        <Image
                          source={image4}
                          style={{ marginTop: 2, marginLeft: 10 }}
                        />
                      </Tooltip>
                    </View>

                    <Text style={(styles.marginTop5, styles.waletText1)}>
                      {moneyVNHOLD} ¥
                    </Text>
                    <Text style={styles.paymentText2}>
                      Quy đổi
                      <Text style={[styles.fontBold, styles.marginLeft5]}>
                        {QD} ¥
                      </Text>
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: "#cccccc",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                />

                <View
                  style={[
                    {
                      flexDirection: "row",
                    },
                    styles.padding,
                  ]}
                >
                  {/* Button ap dung */}
                  <TouchableOpacity
                    style={[
                      styles.buttonNotFull,
                      { backgroundColor: "#3187EA", marginTop: 0 },
                    ]}
                    onPress={() =>
                      functions.gotoScreen(this.props.navigation, "AddMoneyScreen")
                    }
                  >
                    <Text style={{ color: "white" }}>Nạp tiền</Text>
                  </TouchableOpacity>
                  {/* END */}
                  {/* Button huy */}
                  <TouchableOpacity
                    style={[
                      styles.buttonNotFull,
                      {
                        backgroundColor: "white",
                        marginTop: 0,
                        borderColor: "#3187EA",
                        borderWidth: 1,
                        marginStart: 10,
                      },
                    ]}
                    onPress={null}
                  >
                    <Text style={{ color: "#3187EA" }}>Rút tiền</Text>
                  </TouchableOpacity>
                  {/* END */}
                </View>
              </View>
              {/* END VND */}
            </View>
          </Background>
        </ScrollView>
      </Provider>
    );
  }
}

export default WaletScreen;
