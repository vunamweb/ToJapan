import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

class RegisterScreen extends Component {
  render() {
    return (
      <Background center="true">
        <Logo type="register" />
        <Header>Đăng ký</Header>
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
          leftIcon="email-outline"
          styleParent={{borderColor: '#E6E8EC', backgroundColor: 'white'}}
          theme={{
            colors: {text: '777E90'}
          }}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3187EA", marginTop: 0 }]}
          onPress={() => functions.gotoScreen(this.props.navigation, "ConfirmScreen")} 
        >
          <Text style={{ color: "white" }}>Đăng Ký</Text>
        </TouchableOpacity>
        <View style={styles.flexRow}>
          <View style={styles.LineRegistration} />
          <View style={styles.viewTextRegistration}>
            <Text style={styles.textRegistration}>Hoặc đăng nhập với</Text>
          </View>
          <View style={styles.LineRegistration} />
        </View>
        <View style={styles.flexRow}>
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
    );
  }
}

export default RegisterScreen;
