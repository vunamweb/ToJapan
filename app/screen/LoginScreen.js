import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, ActivityIndicator, AsyncStorage } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    userName: '',
    passWord: '',
    colorBorderUserName: '#E6E8EC',
    colorBorderPassWord: '#E6E8EC',
    errorMessage: '',
    ActivityIndicator: false,
  };

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    this.retrieveDataPersonal();
  }

  retrieveDataPersonal = async () => {
    try {
      let value = await AsyncStorage.getItem("dataPersonal");

      if(value != '' && value != null )
        functions.gotoScreen(this.props.navigation, "HomeScreen");
    } catch (error) {
      return null;
    }
  };

  render() {
    return (
      <Background center="true">
        <Logo type="login" />
        <Header>Đăng nhập</Header>
        <Text style={styles.error}>{this.state.errorMessage}</Text>
        <ActivityIndicator size="large" animating={this.state.ActivityIndicator}></ActivityIndicator>
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Email</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          label="Nhập ID hoặc địa chỉ email"
          onChangeText={(value) => this.setState({userName: value})}
          value={this.state.userName}
          autoCapitalize="none"
          leftIcon="email-outline"
          styleParent={{borderColor: this.state.colorBorderUserName, backgroundColor: 'white'}}
        />
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Mật khẩu</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          secureTextEntry
          title="Mật khẩu *"
          label="Nhập mật khẩu"
          onChangeText={(value) => this.setState({passWord: value})}
          value={this.state.passWord}
          returnKeyType="next"
          leftIcon="lock-outline"
          rightIcon="eye-outline"
          styleParent={{borderColor: this.state.colorBorderPassWord, backgroundColor: 'white'}}
        />
        <View style={styles.remember}>
          <CheckBox containerStyle={styles.checkbox} title="Nhớ mật khẩu" />
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() =>
                functions.login(this.state.userName, this.state.passWord, this)
              }
            >
              <Text style={styles.forgot}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3187EA", marginTop: 0 }]}
          onPress={() =>
            functions.login(this.state.userName, this.state.passWord, this)
          }
        >
          <Text style={{ color: "white" }}>Đăng nhâp</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Bạn đã chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => functions.gotoScreen(this.props.navigation, "RegisterScreen")}
          >
            <Text style={styles.link}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

export default LoginScreen;
