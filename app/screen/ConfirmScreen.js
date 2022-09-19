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

class ConfirmScreen extends Component {
  render() {
    return (
      <Background center="false">
        <Header>Xác Nhận</Header>
        <Text style={[styles.textCenter, {marginBottom: 20}]}>Liên kết xác minh của bạn đã gửi đến email của bạn</Text>
        <TextInput
          label="Ciskydsg.nv@gmail.com"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          bg="#E3F2FC"
        />
        <Text style={[{marginTop: 10}]}>
        Chúng tôi đã gửi một email đến địa chỉ email bạn đã nhập. Vui lòng nhấp vào URL đính kèm trong emial. Vui lòng nhấp các thông tin cần thiết và tiếp tục đăng ký.
        </Text>
        <Text style={[{marginTop: 20}]}>
        *Thời hạn hiệu lực của URL là 24 giờ
        </Text>
        <Text style={[{marginTop: 20, marginBottom: 20}]}>
        *Nếu đăng ký không thành công, chúng tôi sẽ gửi email với thông tin chi tiết về lỗi đến địa chỉ bạn đã cung cấp. Vui lòng kiểm tra email để biết thêm thông tin.
        </Text>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#3187EA', marginTop: 0}]}>
          <Text style={{ color: 'white' }}>Trang chủ</Text>
        </TouchableOpacity>
      </Background>
    );
  }
}

export default ConfirmScreen;
