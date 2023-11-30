import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, ActivityIndicator } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import BackgroundHome from "../components/BackgroundHome";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import styles from "../../app/style/style";
import functions from "../../app/function/function";
import { ScrollView } from "react-native-gesture-handler";

class RegisterScreen extends Component {
  state = {
    email: null,
    name: '',
    phone: '',
    passWord: '', 
    confirmPassword: '',
    errorMessage: '',
    ActivityIndicator: false,
    colorBorderEmail: '#E6E8EC',
    colorBorderName: '#E6E8EC',
    colorBorderPhone: '#E6E8EC',
    colorBorderID: '#E6E8EC',
    colorBorderPassWord: '#E6E8EC',
    colorBorderConfirmPassWord: '#E6E8EC',
    secureTextEntry: true
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Đăng ký"
  });

  gotoTop = () => {
    this.refs._scrollView.scrollTo({
      y: 0,
      animated: true,
    });
  };

  onClickEye = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry });
  };

  render() {
    var name = this.state.name.split(" ");
    name = name[name.length - 1];

    if( this.state.phone.length <=4 )
      var ID = name + this.state.phone;
    else {
       var length = this.state.phone.length;
       ID = name + this.state.phone.charAt(length-1) + this.state.phone.charAt(length-2) + this.state.phone.charAt(length-3) + this.state.phone.charAt(length-4);
    }

    return (
      <ScrollView ref="_scrollView">
      <Background center="true">
        <Logo type="register" />
        <Header>Đăng ký</Header>
        <Text style={styles.error}>{this.state.errorMessage}</Text>
        <ActivityIndicator size="large" animating={this.state.ActivityIndicator}></ActivityIndicator>
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Email</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          placeholder="Nhập địa chỉ email"
          onChangeText={(value) => this.setState({email: value})}
          value={this.state.email}
          autoCapitalize="none"
          leftIcon="email-outline"
          styleParent={{borderColor: this.state.colorBorderEmail, backgroundColor: 'white'}}
          theme={{
            colors: {text: '777E90'}
          }}
        />
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Tên</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          placeholder="Nhập Tên"
          onChangeText={(value) => this.setState({name: value})}
          value={this.state.name}
          autoCapitalize="none"
          styleParent={{borderColor: this.state.colorBorderName, backgroundColor: 'white'}}
          theme={{
            colors: {text: '777E90'}
          }}
        />
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Số điện thoại</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          placeholder="Nhập số điện thoại"
          onChangeText={(value) => this.setState({phone: value.replace(/[^0-9]/g, '')})}
          value={this.state.phone}
          autoCapitalize="none"
          leftIcon="phone-outline"
          styleParent={{borderColor: this.state.colorBorderPhone,  backgroundColor: 'white'}}
          theme={{
            colors: {text: '777E90'}
          }}
        />
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Username</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          placeholder="Nhập Username"
          autoCapitalize="none"
          value={ID}
          styleParent={{borderColor: this.state.colorBorderID,  backgroundColor: 'white'}}
          theme={{
            colors: {text: '777E90'}
          }}
        />
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Mật khẩu</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          secureTextEntry={this.state.secureTextEntry}
          title="Mật khẩu *"
          placeholder="Nhập mật khẩu"
          onChangeText={(value) => this.setState({passWord: value})}
          onPress={() => this.onClickEye()}
          value={this.state.passWord}
          returnKeyType="next"
          leftIcon="lock-outline"
          rightIcon="eye-outline"
          component={this}
          styleParent={{borderColor: this.state.colorBorderPassWord, backgroundColor: 'white'}}
        />
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Nhập lại Mật khẩu</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          secureTextEntry={this.state.secureTextEntry}
          title="Nhập lại Mật khẩu *"
          placeholder="Nhập lại mật khẩu"
          onChangeText={(value) => this.setState({confirmPassword: value})}
          value={this.state.confirmPassword}
          returnKeyType="next"
          leftIcon="lock-outline"
          rightIcon="eye-outline"
          component={this}
          styleParent={{borderColor: this.state.colorBorderConfirmPassWord, backgroundColor: 'white'}}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3187EA", marginTop: 0 }]}
          onPress={() => functions.register(this.state.name, this.state.passWord, this.state.confirmPassword, this.state.phone, this.state.email, ID, this)} 
        >
          <Text style={{ color: "white" }}>Đăng Ký</Text>
        </TouchableOpacity>
        <View style={[styles.flexRow, styles.hide]}>
          <View style={styles.LineRegistration} />
          <View style={styles.viewTextRegistration}>
            <Text style={styles.textRegistration}>Hoặc đăng nhập với</Text>
          </View>
          <View style={styles.LineRegistration} />
        </View>
        <View style={[styles.flexRow, styles.hide]}>
          <View style={styles.googleButton}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "white",
                  borderColor: "#E6E8EC",
                  borderWidth: 1,
                  marginTop: 0,
                  paddingHorizontal: 50,
                  paddingVertical: 10,
                },
              ]}
            >
              <Logo type="google" />
            </TouchableOpacity>
          </View>
          <View style={styles.googleButton}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "white",
                  borderColor: "#E6E8EC",
                  borderWidth: 1,
                  marginTop: 0,
                  paddingHorizontal: 50,
                  paddingVertical: 10,
                },
              ]}
            >
              <Logo type="facebook" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.row, { marginTop: 30 }]}>
          <Text>Bạn đã có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => functions.gotoScreen(this.props.navigation, "LoginScreen")} 
          >
            <Text style={styles.link}> Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </Background>
      </ScrollView>
    );
  }
}

export default RegisterScreen;
