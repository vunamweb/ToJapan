import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
//import BackButton from '../components/BackButton'
//import { theme } from '../core/theme'
//import { emailValidator } from '../helpers/emailValidator'
//import { passwordValidator } from '../helpers/passwordValidator'
import styles from "../../app/style/style";

class LoginScreen extends Component {
  render() {
    return (
      <Background>
        <Logo />
        <Header>Đăng nhập</Header>
        <View style={[styles.titleTextinput, styles.textGeneral]}>
          <Text>Email</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          label="Nhập địa chỉ email"
          title="Email *"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          leftIcon="email"
        />
        <View style={styles.titleTextinput}>
          <Text>Mật khẩu</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          title="Mật khẩu *"
          label="Nhập mật khẩu"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          leftIcon="lock"
          rightIcon="eye"
        />
        <View style={styles.remember}>
        <CheckBox containerStyle={styles.checkbox}
  title='Nhớ mật khẩu'
/>
          <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.forgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#3187EA', marginTop: 0}]}>
          <Text style={{ color: 'white' }}>Đăng nhâp</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Bạn đã chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace("RegisterScreen")}
          >
            <Text style={styles.link}> Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

export default LoginScreen;
