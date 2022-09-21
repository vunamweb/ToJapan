import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
//import BackButton from '../components/BackButton'
//import { theme } from '../core/theme'
//import { emailValidator } from '../helpers/emailValidator'
//import { passwordValidator } from '../helpers/passwordValidator'
import styles from "../../app/style/style";

class HomeScreen extends Component {
  render() {
    return (
      <Background sourse="true" style="1">
        <CustomToolbar/>
        <View style={[styles.fullWith, {padding: 20}]} >
        <TextInput
          label="Tìm kiếm"
          title=""
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          leftIcon="email"
        />
        <Banner/>
 </View>
 <View style={{width: '100%', height: 400, borderTopRightRadius: 16, borderTopLeftRadius: 16, backgroundColor: 'white'}}>
<Text>fsdd</Text>
 </View>
      </Background>
    );
  }
}

export default HomeScreen;
