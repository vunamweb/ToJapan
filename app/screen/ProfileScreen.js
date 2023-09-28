import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  AsyncStorage,
} from "react-native";
import { CheckBox, Rating, AirbnbRating, Tooltip } from "react-native-elements";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar2 from "../components/CustomToolbar2";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";
import Collapse from "../components/Collapse";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const data1 = [
  {
    text: "Lịch sử tìm kiếm",
    img: require("../../app/assets/history.png"),
  },
  {
    text: "Đấu giá",
    img: require("../../app/assets/Auction.png"),
  },
  {
    text: "Ưu đãi",
    img: require("../../app/assets/uu_dai.png"),
  },
  {
    text: "Yêu thích",
    img: require("../../app/assets/heart-black.png"),
    border: "none",
  },
];

const data2 = [
  {
    text: "Quản lý đơn hàng",
    img: require("../../app/assets/quanlydonhang.png"),
  },
  {
    text: "Quản lý gói hàng",
    img: require("../../app/assets/quanlydonhang_1.png"),
  },
  {
    text: "Phiếu giảm giá/ Mã quà tặng",
    img: require("../../app/assets/Gift_Codes.png"),
  },
  {
    text: "Ví ToJapan",
    img: require("../../app/assets/waller.png"),
    border: "none",
  },
];

const data3 = [
  {
    text: "Người dùng lần đầu",
    img: require("../../app/assets/nguoidungdautien.png"),
  },
  {
    text: "Hướng dẫn sử dụng/Trợ giúp",
    img: require("../../app/assets/huongdan.png"),
  },
  {
    text: "FAQ/ Liên hệ chúng tôi",
    img: require("../../app/assets/faq.png"),
  },
  {
    text: "Liên hệ ToJapan",
    img: require("../../app/assets/Contact.png"),
    border: "none",
  },
];

const data4 = [
  {
    text: "Giới thiệu ToJapan",
    img: require("../../app/assets/gioithieu.png"),
  },
  {
    text: "Tin tức",
    img: require("../../app/assets/tintuc.png"),
  },
  {
    text: "Điều khoản dịch vụ",
    img: require("../../app/assets/dieukhoan.png"),
  },
  {
    text: "Chính sách bảo mật",
    img: require("../../app/assets/chinhsachbaomat.png"),
  },
  {
    text: "Quy chế hoạt động sàn TMĐT",
    img: require("../../app/assets/quyche.png"),
    border: "none",
  },
];

const img1 = require("../../app/assets/question.png");
const img2 = require("../../app/assets/arrow-right-3.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image4 = require("../../app/assets/info.png");

let name;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.retrieveDataPersonal.bind(this);
  }

  state = {
    name: "",
    userDetail: {
      Balance: 0,
      Hold: 0,
      JPY: 0,
    },
  };

  goto = (link) => {
    if(link != "" && link != null)
    functions.gotoScreen(this.props.navigation, link) 
  }

  _renderItem = ({ item, index }) => {
    let height = item.border == "none" ? 0 : 1;
    let link = item.link != null ? item.link : "";

    return (
      <TouchableOpacity
        onPress={() => this.goto(link)}
      >
        <View style={[styles.flexRowStart, {paddingLeft: 10, paddingTop: 10}]}>
          <Image style={{ width: 24, height: 24 }}  source={item.img} />
          <View style={{ flex: 1 }}>
            <View
              style={[
                styles.flexRowStart,
                {
                  justifyContent: "space-between",
                  paddingLeft: 10,
                },
              ]}
            >
              <Text style={styles.money1}>{item.text}</Text>
              <Image source={img2} />
            </View>

            <View
              style={[
                { height: height, backgroundColor: "#cccccc", marginLeft: 10 },
                styles.marginTop15,
                styles.marginBottom15,
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    this.retrieveDataPersonal();
    functions.getUserDetail(this);
  }

  retrieveDataPersonal = async () => {
    try {
      let value = await functions.getDataUser();

      value = JSON.parse(value);

      name = value.data.name;

      this.setState({ name: name });
    } catch (error) {
      return null;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Background sourse="true" start="1">
            {/* Toolbar */}
            <CustomToolbar2 name={this.state.name} component={this} />
            {/* END */}
            <View
              style={[
                styles.homeBody,
                styles.padding,
                styles.marginTop10,
                { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
              ]}
            >
              {/* MONEY */}
              <View
                style={[
                  styles.address,
                  styles.bgWhite,
                  styles.padding,
                  styles.borderNormal,
                  styles.marginBottom20,
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
                    {this.state.userDetail.Balance} ¥
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
                    {this.state.userDetail.Hold} ¥
                  </Text>
                </View>
              </View>
              {/* END MONEY */}
              <Text style={styles.paymentText6}>
                Số tiền này là một ước tính dựa trên tỷ lệ chuyển đổi tiền tệ
                gần đây nhất.
              </Text>
              <Collapse
                title="Hoạt động của tôi"
                data={data1}
                renderItem={this._renderItem}
                col={1}
              />

              <Collapse
                title="Quản lý mua bán"
                data={data2}
                renderItem={this._renderItem}
                col={1}
              />

              <Collapse
                title="Hỗ trợ khách hàng"
                data={data3}
                renderItem={this._renderItem}
                col={1}
              />

              <Collapse
                title="Về chúng tôi"
                data={data4}
                renderItem={this._renderItem}
                col={1}
              />

              <TouchableOpacity
                onPress={() => functions.logout(this)}
                style={[
                  styles.button,
                  {
                    backgroundColor: "white",
                    marginTop: 20,
                    borderColor: "#D63F5C",
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={{ color: "#D63F5C" }}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </Background>
        </ScrollView>
        <View style={[styles.bottom, { marginTop: 0 }]}>
          {/* Bottom */}
          <IconBottom component={this} type="5" />
          {/* END */}
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
