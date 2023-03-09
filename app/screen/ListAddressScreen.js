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
  state = {
    listAddress: [],
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Danh sách địa chỉ",
  });

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    functions.getListAddress(this);
  }

  getListAddress = () => {
    var listAddress = this.state.listAddress;
    var addressArray = [];

    try {
      for (position = 0; position < listAddress.data.length; position++) {
        var name = listAddress.data[position].Name;
        var phone = listAddress.data[position].Phone;
        var address = listAddress.data[position].Address;

        if (position == 0)
          addressArray.push(
            <Address1 text1={name} text2={phone} text3={address} border="1" />
          );
        else
          addressArray.push(
            <Address1 text1={name} text2={phone} text3={address} />
          );
      }
    } catch (error) {
      console.log(error);
    }

    return addressArray;
  };

  render() {
    var listAddress = this.getListAddress();
    return (
      <Provider>
        <ScrollView>
          <Background full="1" start="1">
            <View
              style={[styles.homeBody, styles.marginHeader, styles.padding]}
            >
              {listAddress}
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
                    functions.gotoScreen(
                      this.props.navigation,
                      "AddDressScreen"
                    )
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
