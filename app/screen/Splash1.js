import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  AppRegistry,
  TouchableOpacity,
} from "react-native";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

//import Splash2 from '../../app/screen/Splash2';

class Splash1 extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        4000
      )
    );
  }

  render() {
    if (this.state.isLoading) 
    return (
      <View style={styles.center}>
        <Image source={require("../../app/access/img/Logo.png")} />
      </View>
    );
    else {
      this.props.navigation.navigate('Splash2')
      //return <Splash2 />;
    }
  }
}

export default Splash1;
