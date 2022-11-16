import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text } from "react-native-paper";

import BackgroundHome from "../components/BackgroundHome";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";

import styles from "../../app/style/style";
import functions from "../../app/function/function";

const carouselItems = [
  {
    title: "Mercari",
    shop: 'mercari',
    img: require("../../app/assets/mercari_1.png"),
  },
  {
    title: "Y!Auction",
    shop: 'yahoo_auction',
    img: require("../../app/assets/Y!Auction.png"),
  },
  {
    title: "Y!Shopping",
    shop: 'yahoo_shopping',
    img: require("../../app/assets/yahoo-shopping.png"),
  },
  {
    title: "Amazon JP",
    shop: 'amazon',
    img: require("../../app/assets/Amazon_JS.png"),
  },
  {
    title: "Rakuten",
    shop: 'rakuten',
    img: require("../../app/assets/Rakuten_1.png"),
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

const dataBanner = [
  {
    img: "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg",
  },
  {
    img: "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg",
  },
  {
    img: "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg",
  },
  {
    img: "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg",
  },
];

const carouselItems3 = [
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
  {
    title: "Ssol",
    text: "9826 Đơn Hàng",
  },
];

const dataCarouselSlider = [
  {
    title: "Tất cả",
  },
  {
    title: "Mercari",
    shop: "mercari",
  },
  {
    title: "Y!Auction",
    shop: "yahoo",
  },
  {
    title: "Amazon",
    shop: "amazon",
  },
  {
    title: "Rakuten",
    shop: "rakuten",
  },
];

const img1 = require("../../app/assets/question.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");

const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");

var component__;
var height = Math.floor(Dimensions.get('window').width * 0.9 * 296/1560);


class HomeScreen extends Component {
  state = {
    dataProductSlider: [],
    dataBanner: [],
    dataPopularBranch: [],
    ActivityIndicator1: true,
    ActivityIndicator2: true,
    ActivityIndicator3: true,
    shop: '',
    index: 0
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            functions.gotoScreenWithParam(item.shop, this.props.navigation, "CategoryScreen")
          }
        >
          <Image source={item.img} />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderItem_PopularBranch = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../app/assets/Maskgroup_1.png")} />
          <Text>{item.Brand}</Text>
      </View>
    );
  };

  _renderItem_1({ item, index }) {
    return (
      <View style={styles.shop}>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.circle, { marginRight: 20 }]} />
          <View>
            <Text style={styles.shopText1}>{item.title}</Text>
            <Text style={styles.shopText2}>{item.text}</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Image source={img3} />
        </View>
      </View>
    );
  }

  _renderItem_Banner({ item, index }) {
    return (
      <Image style={{ width: '90%', height: height, marginLeft: '5%', marginRight: '5%' }} source={{ uri: item.img }} />
    );
  }

  _renderItem_2({ item, index }) {
    if (item.shop == component__.state.shop)
      return (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#3187EA",
            borderRadius: 16,
            padding: 10,
          }}
        >
          <TouchableOpacity
          onPress={() =>
            functions.getListPopularProduct(component__, item.shop)
          }
          >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            {item.title}
          </Text>
          </TouchableOpacity>
        </View>
      );
    else
      return (
        <View
          style={{
            alignItems: "center",
            borderRadius: 16,
            backgroundColor: "#E6E8EC",
            padding: 10,
          }}
        >
          <TouchableOpacity
          onPress={() =>
            functions.getListPopularProduct(component__, item.shop)
          }
          >
          <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
            {item.title}
          </Text>
          </TouchableOpacity>
        </View>
      );
  }

  _renderItem_3 = ({ item, index }) => {
    if(index % 2 == 0)
    return (
      <TouchableOpacity
        style={{ width: "50%", marginTop: 20 }}
        onPress={() =>
          functions.gotoScreenProduct(component__.state.shop, item.code, component__.props.navigation, "ProductScreen")
        }
      >
        <View style={{ paddingRight: 5, width: "100%" }}>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: "white",
              width: "100%",
              padding: 20,
             
            }}
          >
            <View style={{ padding: 0 }}>
            <Image style={{width: '100%',height: 128}} source={{ uri: item.image }} />
            <View style={{ position: "absolute", top: 5, right: 20 }}>
              <Image source={image1} />
            </View>
            <View style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}>
              <Text style={{ color: "#23262F", fontSize: 16 }}>
                {item.title}
              </Text>
              <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
                Từ {this.state.shop}
              </Text>
              <Rating
                imageSize={15}
                readonly
                startingValue={0}
                style={styles.rating}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                    {item.price} ¥
                  </Text>
                  <Text style={{ fontSize: 12, color: "#777E90" }}>
                    {item.priceVN} VND
                  </Text>
                </View>
                <Image source={image2} />
              </View>
            </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
    else 
    return (
      (
        <TouchableOpacity
          style={{ width: "50%", marginTop: 20 }}
          onPress={() =>
            functions.gotoScreenProduct(component__.state.shop, item.code, component__.props.navigation, "ProductScreen")
          }
        >
          <View style={{ paddingLeft: 5, width: "100%" }}>
            <View
              style={{
                borderRadius: 30,
                backgroundColor: "white",
                width: "100%",
                padding: 20,
               
              }}
            >
              <View style={{ padding: 0 }}>
              <Image style={{width: '100%',height: 128}} source={{ uri: item.image }} />
              <View style={{ position: "absolute", top: 5, right: 20 }}>
                <Image source={image1} />
              </View>
              <View style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ color: "#23262F", fontSize: 16 }}>
                  {item.title}
                </Text>
                <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
                  Từ {this.state.shop}
                </Text>
                <Rating
                  imageSize={15}
                  readonly
                  startingValue={0}
                  style={styles.rating}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ color: "#D63F5C", fontSize: 16 }}>
                      {item.price} ¥
                    </Text>
                    <Text style={{ fontSize: 12, color: "#777E90" }}>
                      {item.priceVN} VND
                    </Text>
                  </View>
                  <Image source={image2} />
                </View>
              </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    )
  };

  componentDidMount() {
    component__ = this;

    functions.getBanners(this);
    functions.getPoplularBranch(this);
    functions.getListPopularProduct(this, 'mercari');
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
                size="large"
                animating={this.state.ActivityIndicator}
              />
    );

    return (
      <ScrollView>
        <BackgroundHome sourse="true" start="1">
          {/* Toolbar */}
          <CustomToolbar component={this} />
          {/* END */}
          <View style={[styles.fullWith, { padding: 20 }]}>
            <TextInput
              label="Tìm kiếm"
              title="Tìm kiếm"
              returnKeyType="next"
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              leftIcon="search"
              rightIcon="line-scan"
              fontAwesome="true"
              colorIcon="white"
              theme={{
                colors: { placeholder: "white" },
              }}
            />
            {/* Banner */}
            {this.state.ActivityIndicator1 == "" ? View1 : View2}
            <Banner 
            renderItem={this._renderItem_Banner}
            carouselItems={this.state.dataBanner}
            />
            {/* END */}
          </View>
          <View style={styles.homeBody}>
            <View style={styles.homeContent}>
              {/* Container Header */}
              <ContainerHeader
                top="0"
                img={img1}
                text1="Tại sao chọn chúng tôi"
                text2="Mua hàng thuận tiện, thanh toán dễ dàng"
              />
              {/* END */}
              <Header1>Sàn thương mại</Header1>
              {/* Slider 1 */}
              <Carousel
                data={carouselItems}
                renderItem={this._renderItem}
                top={0}
                itemWidth={100}
                loop={true}
              />
              {/* END */}
              <Header1>Thương hiệu phổ biến</Header1>
              {this.state.ActivityIndicator2 == "" ? View1 : View2}
              {/* Slider 2 */}
              <Carousel
                data={this.state.dataPopularBranch}
                renderItem={this._renderItem_PopularBranch}
                top={0}
                itemWidth={100}
                loop={true}
              />
              {/* END */}
              {/* Container Header */}
              <ContainerHeader
                top="50"
                img={img2}
                text1="Quy trình dịch vụ"
                text2="Xem chi tiết quy trình dịch vụ Janbox"
              />
              {/* END */}
              <Header1>Sản phẩm nổi bật</Header1>
              {this.state.ActivityIndicator3 == "" ? View1 : View2}
              {/* Slider Product */}
              <SliderProduct
                dataCarouselSlider={dataCarouselSlider}
                renderCarouselSlider={this._renderItem_2}
                dataProductSlider={this.state.dataProductSlider}
                renderProductSlider={this._renderItem_3}
              />
              {/* END */}
            </View>
            <View style={styles.bottom}>
              {/* Bottom */}
              <IconBottom component={this} />
              {/* END */}
            </View>
          </View>
        </BackgroundHome>
      </ScrollView>
    );
  }
}

export default HomeScreen;
