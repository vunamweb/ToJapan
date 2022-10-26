import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, Image, AsyncStorage, ActivityIndicator } from "react-native";
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

class PersonalScreen extends Component {
  state = {
    data:{
      name: '',
      phone: '',
      address: '',
      token: ''
    },
    messageError: '',
    messageSuccess: '',
    ActivityIndicator: false
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Thông tin cá nhân",
  });

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    this.retrieveDataPersonal();
  }

  retrieveDataPersonal = async () => {
    let data = {};

    try {
      let value = await functions.getDataUser();

      value = JSON.parse(value);
  
      data.name = value.data.name;
      data.phone = value.data.phone;
      data.address = value.data.address;
      data.token = value.token;

      this.setState({ data: data });
    } catch (error) {
      return null;
    }
  };

  render() {
    var View1 = <View />;
    var View2 = (
      <View style={{ marginTop: 30 }}>
        <Text style={styles.error}>{this.state.messageError}</Text>
        <Text style={styles.success}>{this.state.messageSuccess}</Text>
        <ActivityIndicator
          size="large"
          animating={this.state.ActivityIndicator}
        />
      </View>
    );

    return (
      <ScrollView>
        <Background>
        {this.state.messageError == "" && this.state.messageSuccess == "" ? View1 : View2}
          <View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
        <Text>Tên đầy đủ</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            label="Nhập họ và tên"
            title="Email *"
            value={this.state.data.name}
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

          <View style={[styles.titleTextinput, styles.textGeneral]}>
            <Text>Xác minh số điện thoại</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          
          <View style={[styles.flexRowStart, {alignItems: 'center'}]}>
          <Dropdown
            data={countries}
            buttonStyle={{ borderRadius: 20, width: 80, backgroundColor: 'transparent', borderColor: '#ccc', borderWidth: 1 }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={[styles.flexRowStart]}>
                  <Text style={[styles.marginLeft10]}>
                    {selectedItem ? selectedItem : "+84"}
                  </Text>
                  <View style={[styles.flexRowEnd]}>
                    <Image source={image3} />
                  </View>
                </View>
              );
            }}
          />
          <TextInput
            title="Số điện thoại"
            label="Số điện thoại"
            value={this.state.data.phone}
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            notflex="1"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />
          </View>

          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginBottom10,
            ]}
          >
            <Text>Quốc gia/khu vực</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          {/* Dropdown */}
          <Dropdown
            data={countries}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={[styles.flexRowStart]}>
                  <Text style={[styles.marginLeft10]}>
                    {selectedItem ? selectedItem : "Chọn quốc gia"}
                  </Text>
                  <View style={[styles.flexRowEnd]}>
                    <Image source={image3} />
                  </View>
                </View>
              );
            }}
          />
          {/* END Dropdown */}

          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginBottom10,
              styles.marginTop10,
            ]}
          >
            <Text>Tỉnh/ Thành phố</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          {/* Dropdown */}
          <Dropdown
            data={countries}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={[styles.flexRowStart]}>
                  <Text style={[styles.marginLeft10]}>
                    {selectedItem ? selectedItem : "Chọn Tỉnh/ Thành phố"}
                  </Text>
                  <View style={[styles.flexRowEnd]}>
                    <Image source={image3} />
                  </View>
                </View>
              );
            }}
          />
          {/* END Dropdown */}

          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginBottom10,
              styles.marginTop10,
            ]}
          >
            <Text>Quận/ Huyện</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          {/* Dropdown */}
          <Dropdown
            data={countries}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={[styles.flexRowStart]}>
                  <Text style={[styles.marginLeft10]}>
                    {selectedItem ? selectedItem : "Chọn Quận/ Huyện"}
                  </Text>
                  <View style={[styles.flexRowEnd]}>
                    <Image source={image3} />
                  </View>
                </View>
              );
            }}
          />
          {/* END Dropdown */}

          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginBottom10,
              styles.marginTop10,
            ]}
          >
            <Text>Phường/ Xã</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          {/* Dropdown */}
          <Dropdown
            data={countries}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={[styles.flexRowStart]}>
                  <Text style={[styles.marginLeft10]}>
                    {selectedItem ? selectedItem : "Chọn Phường/ Xã"}
                  </Text>
                  <View style={[styles.flexRowEnd]}>
                    <Image source={image3} />
                  </View>
                </View>
              );
            }}
          />
          {/* END Dropdown */}

          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
              styles.marginTop10,
            ]}
          >
            <Text>Mã bưu điện</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            label="Nhập Mã bưu điện"
            title="Email *"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

          <View
            style={[
              styles.titleTextinput,
              styles.textGeneral,
            ]}
          >
            <Text>Địa chỉ chi tiết</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            label="Nhập Địa chỉ chi tiết"
            title="Email *"
            value={this.state.data.address}
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

          <CheckBox
            label="Đặt làm địa chỉ mặc định"
            status="checked"
            onPress={null}
          />

          <TouchableOpacity
            style={[
              styles.button,
              styles.marginBottom10,
              { backgroundColor: "#3187EA", marginTop: 0 },
            ]}
            onPress={() =>
              functions.updateUser(this.state.data, this)
            }
          >
            <Text style={{ color: "white" }}>Xác nhận</Text>
          </TouchableOpacity>
        </Background>
      </ScrollView>
    );
  }
}

export default PersonalScreen;
