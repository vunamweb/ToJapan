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

class ChangePasswordScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Đổi mật khẩu",
  });

  render() {
    return (
      <ScrollView>
        <Background>
        <View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>Mật khẩu cũ</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            label="Nhập mật khẩu cũ"
            title="Email *"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

<View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>Mật khẩu</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            label="Nhập mật khau"
            title="Email *"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

<View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>Nhập lại Mật khẩu</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            label="Nhập lại mât khẩu"
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
            <Text style={{ color: "white" }}>Xác nhận</Text>
          </TouchableOpacity>
        </Background>
      </ScrollView>
    );
  }
}

export default ChangePasswordScreen;
