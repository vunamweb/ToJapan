import React, { Fragment, Component } from 'react';
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
import FlatListViewNormal from '../../app/components/library/FlatListViewNormal';

const data = [
  {
    title: 'Trang chủ',
    src: require('../../app/assets/home.png')
  },
  {
    title: 'Đấu giá',
    src: require('../../app/assets/Auction.png'),
    link: 'ManagerAuctionScreen'
  },
  {
    title: 'Yêu thích',
    src: require('../../app/assets/heart_1.png')
  },
  {
    title: 'Đơn hàng',
    src: require('../../app/assets/oder.png')
  },
  {
    title: 'Bưu phẩm',
    src: require('../../app/assets/box.png')
  },
  {
    title: 'Cá nhân',
    src: require('../../app/assets/users.png'),
    link: 'ProfileScreen'
  }
];

class IconBottom extends Component {
  render() {
    const renderItem = ({ item, index }) =>
      <TouchableOpacity style={styles.touchableOpacityBottom}
      onPress={() =>
        functions.gotoScreen(this.props.component.props.navigation, item.link)
      }
      >
        <Image
          style={styles.img}
          source={item.src}
        />
        <Text style={{color: '#777E90'}}>{item.title}</Text>
      </TouchableOpacity>

    return (
      <View style={styles.iconBottom}>
        <FlatListViewNormal
          data={data}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
    )
  }
}

export default IconBottom;