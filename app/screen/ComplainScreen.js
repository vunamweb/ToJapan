import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import CheckBox from "../components/Checkbox";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import HeaderBg from "../components/HeaderBackground";
import Dropdown from "../components/Select";

import styles from "../../app/style/style";
import functions from "../../app/function/function";
import { ScrollView } from "react-native-gesture-handler";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const image3 = require("../../app/assets/downright-3.png");

class ComplainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Gủi yêu cầu khiếu nại",
  });

  render() {
    return (
      <ScrollView>
        <Background>
        <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginBottom10,
            ]}
          >
            <Text>Chọn loại yêu cầu</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          {/* Dropdown */}
          <Dropdown
            data={countries}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={[styles.flexRowStart]}>
                  <Text style={[styles.marginLeft10]}>
                    {selectedItem ? selectedItem : "Vui lòng chọn"}
                  </Text>
                  <View style={[styles.flexRowEnd]}>
                    <Image source={image3} />
                  </View>
                </View>
              );
            }}
          />
          {/* END Dropdown */}
          
          
          <View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>Tiêu đề khiếu nại</Text>
          </View>
          <TextInput
            placeholder="Nhập tiêu đề"
            title="Email *"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

<View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>ID đấu giá/ Mã đơn hàng/ Mã gói hàng</Text>
          </View>
          <TextInput
            placeholder="Nhập ID"
            title="Email *"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

<View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>ID đấu giá/ Mã đơn hàng/ Mã gói hàng</Text>
          </View>
          <TextInput
            placeholder="Nhập Nôi dung"
            title="Email *"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />
<TouchableOpacity
            style={[
              styles.button,
              styles.marginBottom10,
              { backgroundColor: "#3187EA", marginTop: 0 },
            ]}
            onPress={() =>
              functions.gotoScreen(this.props.navigation, "HomeScreen")
            }
          >
            <Text style={{ color: "white" }}>Thêm đơn khiếu nại</Text>
          </TouchableOpacity>
        </Background>
      </ScrollView>
    );
  }
}

export default ComplainScreen;
