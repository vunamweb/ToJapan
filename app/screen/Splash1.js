import React, { Component } from 'react';
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
  TouchableOpacity
} from 'react-native';

import styles from '../../app/style/style';
import functions from '../../app/function/function';

class Splash1 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Image
          source={require('../../app/access/img/Logo.png')}
        />
      </View>
    )
  }
}

export default Splash1;