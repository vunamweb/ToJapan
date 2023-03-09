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

class IconBottom extends Component {
  render() {
    const renderItem = ({ item, index }) =>
      <TouchableOpacity style={styles.touchableOpacityBottom}
      onPress={() =>
        functions.gotoScreen(this.props.component.props.navigation, item.link)
      }
      >
        <Image
          style={[styles.img, { width: 24, height: 24 }]}
          source={item.src}
        />
        <Text style={{color: '#777E90'}}>{item.title}</Text>
      </TouchableOpacity>

const data = [
  {
    title: 'Trang chủ',
    src: (this.props.type == '1') ? require('../../app/assets/home-active.png') : require('../../app/assets/home.png'),
    link: 'HomeScreen'
  },
  {
    title: 'Đấu giá',
    src: (this.props.type == '2') ? require('../../app/assets/auction-buy.png') : require('../../app/assets/Auction.png') ,
    link: 'ManagerAuctionScreen'
  },
  {
    title: 'Yêu thích',
    src: (this.props.type == '3') ? require('../../app/assets/heart-active.png') : require('../../app/assets/heart_1.png'),
    link: 'FavourScreen'
  },
  {
    title: 'Đơn hàng',
    src: (this.props.type == '4') ? require('../../app/assets/order-active.png') : require('../../app/assets/oder.png'),
    link: 'ManagerOrder'
  },
  /*{
    title: 'Bưu phẩm',
    src: require('../../app/assets/box.png')
  },*/
  {
    title: 'Cá nhân',
    src: (this.props.type == '5') ? require('../../app/assets/users-active.png') : require('../../app/assets/users.png'),
    link: 'ProfileScreen'
  }
];

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