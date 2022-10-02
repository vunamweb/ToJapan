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

const img = require("../../app/assets/plus2.png");

class ListAddressScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Danh sách địa chỉ",
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    return (
      <Provider>
        <ScrollView>
          <Background full="1" start="1">
            <View
              style={[styles.homeBody, styles.marginHeader, styles.padding]}
            >
              {/* Address */}
              <Address1
                text1="Nguyen Van Nam"
                text2="+84 0393301497"
                text3="Số 9 ngõ 25/36 Phú Minh, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội, Việt Nam"
                border="1"
              />
              <Address1
                text1="Nguyen Van Nam"
                text2="+84 0393301497"
                text3="Số 9 ngõ 25/36 Phú Minh, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội, Việt Nam"
              />
              {/* END */}
              <View
                style={[
                  styles.borderNormal,
                  styles.bgWhite,
                  styles.padding,
                  { flexDirection: "row", justifyContent: "space-between" },
                ]}
              >
                <Text>Thêm địa chỉ mới</Text>
                <TouchableOpacity
                onPress={() =>
                  functions.gotoScreen(this.props.navigation, "AddDressScreen")
                }
                >
                <Image source={img} />
                </TouchableOpacity>
              </View>
            </View>
          </Background>
        </ScrollView>
      </Provider>
    );
  }
}

export default ListAddressScreen;
