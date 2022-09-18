import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
//import BackButton from '../components/BackButton'
//import { theme } from '../core/theme'
//import { emailValidator } from '../helpers/emailValidator'
//import { passwordValidator } from '../helpers/passwordValidator'
import styles from '../../app/style/style';

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
          right={<TextInput.Icon icon="eye" />}
        />
        <View style={styles.titleTextinput}>
          <Text>Mật khẩu</Text>
          <Text style={styles.mandatoryColor}>*</Text>
        </View>
        <TextInput
          title="Mật khẩu *"
          label="Nhập mật khẩu"
          returnKeyType="done"
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained">Login</Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}

export default LoginScreen;
