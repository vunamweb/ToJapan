import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, Image, ActivityIndicator, AsyncStorage } from "react-native";
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

let token;

class ChangePasswordScreen extends Component {
  state = {
    oldPass: '',
    newPass: '',
    messageError: '',
    messageSuccess: '',
    ActivityIndicator: false
  };
  static navigationOptions = ({ navigation }) => ({
    headerStyle: { height: 90 },
    headerBackground: () => <HeaderBg />,

    headerTitleStyle: {
      color: "white",
    },
    title: "Đổi mật khẩu",
  });

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    this.retrieveDataPersonal();
  }

  retrieveDataPersonal = async () => {
    let data = {};

    try {
      let value = await AsyncStorage.getItem("dataPersonal");
      value = JSON.parse(value);
  
      token = value.token;
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
            <Text>Mật khẩu cũ</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            secureTextEntry
            placeholder="Nhập mật khẩu cũ"
            title="Email *"
            onChangeText={(value) => this.setState({oldPass: value})}
            value={this.state.oldPass}
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

<View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>Mật khẩu</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            secureTextEntry
            placeholder="Nhập mật khau"
            title="Email *"
            onChangeText={(value) => this.setState({newPass: value})}
            value={this.state.newPass}
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />

<View style={[styles.titleTextinput, styles.textGeneral, styles.marginHeader]}>
            <Text>Nhập lại Mật khẩu</Text>
            <Text style={styles.mandatoryColor}>*</Text>
          </View>
          <TextInput
            secureTextEntry
            placeholder="Nhập lại mât khẩu"
            styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          />
<TouchableOpacity
            style={[
              styles.button,
              styles.marginBottom10,
              { backgroundColor: "#3187EA", marginTop: 0 },
            ]}
            onPress={() =>
              functions.changePass(this.state.oldPass, this.state.newPass, token, this)
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
