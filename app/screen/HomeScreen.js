import React, { Component} from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text } from "react-native-paper";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct"
import IconBottom from "../components/IconBottom"

import styles from "../../app/style/style";

const carouselItems = [
  {
    title: "Y!Auction",
    img: require("../../app/assets/Y!Auction.png"),
  },
  {
    title: "Mercari",
    img: require("../../app/assets/mercari_1.png"),
  },
  {
    title: "Amazon JP",
    img: require("../../app/assets/Amazon_JS.png"),
  },
  {
    title: "Rakuten",
    img: require("../../app/assets/Rakuten_1.png"),
  },
  {
    title: "Y!Shop",
    img: require("../../app/assets/yshopping_1.png"),
  },
];

const carouselItems1 = [
  {
    title: "Bape",
    img: require("../../app/assets/Maskgroup_1.png"),
  },
  {
    title: "Zara",
    img: require("../../app/assets/Maskgroup_2.png"),
  },
  {
    title: "Zippo",
    img: require("../../app/assets/Maskgroup_3.png"),
  },
  {
    title: "Credor",
    img: require("../../app/assets/Maskgroup_4.png"),
  },
];

const carouselItems2 = [
  {
    title: "Playstation",
    img: require("../../app/assets/Maskgroup_5.png"),
  },
  {
    title: "GUCCI",
    img: require("../../app/assets/Maskgroup_6.png"),
  },
  {
    title: "Canon",
    img: require("../../app/assets/Maskgroup_7.png"),
  },
  {
    title: "Adidas",
    img: require("../../app/assets/Maskgroup_8.png"),
  },
];

const carouselItems3 = [
  {
    title: "Ssol",
    text: "9826 Đơn Hàng"
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng"
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng"
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng"
  },
];

const dataCarouselSlider = [
  {
    title: "Tất cả",
  },
  {
    title: "Y!Auction",
  },
  {
    title: "Mercari",
  },
  {
    title: "Amazon",
  },
];

const dataProductSlider = [
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
  {
    text1: "[Crocs] Classic All",
    text2: "Terrain Sandals 2...",
    text3: "Từ: Amazon Nhật",
    text4: "5,434",
    text5: "1,016,158",
  },
];

const img1 = require("../../app/assets/question.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");

class HomeScreen extends Component {
  _renderItem({ item, index }) {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={item.img} />
        <Text>{item.title}</Text>
      </View>
    );
  }

  _renderItem_1({ item, index }) {
    return (
      <View style={styles.shop}>
         <View style={{flexDirection: 'row'}}>
            <View style={[styles.circle, {marginRight: 20}]}/>
            <View>
              <Text style={styles.shopText1}>{item.title}</Text>
              <Text style={styles.shopText2}>{item.text}</Text>
            </View>
         </View>
         <View style={{marginTop: 10}}>
           <Image source={img3}/>
         </View>
      </View>
    );
  }

  _renderItem_2({ item, index }) {
    if(index == 0)
    return (
      <View style={{ alignItems: "center", backgroundColor: '#3187EA', borderRadius: 16, padding: 10 }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>{item.title}</Text>
      </View>
    );
    else 
    return (
        <View style={{ alignItems: "center", borderRadius: 16, backgroundColor: '#E6E8EC', padding: 10 }}>
           <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>{item.title}</Text>
        </View>
      );
  }

  _renderItem_3 = ({ item, index }) => {
    return (
      <View style={{ padding: 15, width: '50%' }}>
      <View style={{borderRadius: 30, backgroundColor: 'white', width: '100%'}}>
        <Image source={img} />
        <View style={{ position: "absolute", top: 5, right: 5 }}>
          <Image source={image1} />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#23262F", fontSize: 16 }}>
            {item.text1}
          </Text>
          <Text style={{ color: "#23262F", fontSize: 16 }}>
          {item.text2}
          </Text>
          <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
          {item.text3}
          </Text>
          <Rating
  imageSize={15}
  readonly
  startingValue={3}
  style={styles.rating}
/>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: "#D63F5C", fontSize: 16 }}>{item.text4} ¥</Text>
              <Text style={{ fontSize: 12, color: "#777E90" }}>
              {item.text5} VND
              </Text>
            </View>
            <Image source={image2} />
          </View>
        </View>
      </View>
      </View>
    );
  };

  componentDidMount() {
    LogBox.ignoreAllLogs(['VirtualizedLists should never be nested']);
}

  render() {
    return (
      <ScrollView>
        <Background sourse="true" style="1">
          {/* Toolbar */}
          <CustomToolbar />
          {/* END */}
          <View style={[styles.fullWith, { padding: 20 }]}>
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
            {/* Banner */}
            <Banner />
            {/* END */}
          </View>
          <View style={styles.homeBody}>
            <View style={styles.homeContent}>
              {/* Container Header */}
              <ContainerHeader top="0" img={img1} text1="Tại sao chọn chúng tôi" text2="Mua hàng thuận tiện, thanh toán dễ dàng" />
              {/* END */}
              <Header1>Sàn thương mại</Header1>
              {/* Slider 1 */}
              <Carousel
                data={carouselItems}
                renderItem={this._renderItem}
                sliderWidth={350}
                top={0}
                itemWidth={100}
              />
              {/* END */}
              <Header1>Thương hiệu phổ biến</Header1>
              {/* Slider 2 */}
              <Carousel
                data={carouselItems1}
                renderItem={this._renderItem}
                sliderWidth={350}
                top={0}
                itemWidth={100}
              />
              {/* END */}
              {/* Slider 3 */}
              <Carousel
                data={carouselItems2}
                renderItem={this._renderItem}
                sliderWidth={350}
                top={20}
                itemWidth={100}
              />
              {/* END */}
              {/* Container Header */}
              <ContainerHeader top="50" img={img2} text1="Quy trình dịch vụ" text2="Xem chi tiết quy trình dịch vụ Janbox" />
              {/* END */}
              <Header1>Shop danh cho bạn</Header1>
              {/* Slider 4 */}
              <Carousel
                data={carouselItems3}
                renderItem={this._renderItem_1}
                sliderWidth={350}
                top={20}
                itemWidth={200}
              />
              {/* END */}
              {/* Slider 5 */}
              <Carousel
                data={carouselItems3}
                renderItem={this._renderItem_1}
                sliderWidth={350}
                top={20}
                itemWidth={200}
              />
              {/* END */}
              <Header1>Sản phẩm nổi bật</Header1>
              {/* Slider Product */}
              <SliderProduct 
                  dataCarouselSlider={dataCarouselSlider}
                  renderCarouselSlider={this._renderItem_2}
                  dataProductSlider={dataProductSlider}
                  renderProductSlider={this._renderItem_3}
              />
              {/* END */}
            </View>
            <View style={styles.bottom}>
              {/* Bottom */}
              <IconBottom/>
              {/* END */}
            </View>
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default HomeScreen;