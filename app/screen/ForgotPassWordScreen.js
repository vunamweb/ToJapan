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

class ForgotPassWordScreen extends Component {
  render() {
    return (
      <Background center="true">
        <Logo type="forgot" />
        <Header>Đăng Nhập</Header>
        <Text>
          Để bảo mật cho bạn, chúng tôi cần đảm bảo đó thực sự là bạn. Vui lòng
          cho chúng tôi biết email của bạn.
        </Text>
        <View style={[styles.titleTextinput, styles.textGeneral, {marginTop: 20}]}>
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
          leftIcon="email-outline"
          styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3187EA", marginTop: 0 }]}
        >
          <Text style={{ color: "white" }}>Xác Nhận</Text>
        </TouchableOpacity>
      </Background>
    );
  }
}

export default ForgotPassWordScreen;
