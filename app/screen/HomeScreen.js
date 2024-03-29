import React, { Component } from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text } from "react-native-paper";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";

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
  /*{
    title: "Mercari",
    shop: "mercari",
    img: require("../../app/assets/mercari_1.png"),
  },*/
  {
    title: "Đấu giá",
    shop: "yahoo_auction",
    //img: require("../../app/assets/Y!Auction.png"),
    img: require("../../app/assets/yahoo-shopping.png"),
  },
  /*{
    title: "Y!Shopping",
    shop: "yahoo_shopping",
    img: require("../../app/assets/yahoo-shopping.png"),
  },*/
  /*{
    title: "Amazon JP",
    shop: "amazon",
    img: require("../../app/assets/Amazon_JS.png"),
  },
  {
    title: "Rakuten",
    shop: "rakuten",
    img: require("../../app/assets/Rakuten_1.png"),
  },*/
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
    title: "Y!Shopping",
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

const heart = require("../../app/assets/heart.png");
const heart_active = require("../../app/assets/heart-active.png");

const image2 = require("../../app/assets/shopping_bag.png");

var component__;
var height = Math.floor((Dimensions.get("window").width * 0.9 * 296) / 1560);

const minHeight = 50;

class HomeScreen extends Component {
  state = {
    dataProductSlider: [],
    dataBanner: [],
    dataPopularBranch: [],
    cart: [],
    countCart: 0,
    ListFavorite: [],
    ActivityIndicator1: true,
    ActivityIndicator2: true,
    ActivityIndicator3: true,
    shop: "",
    index: 0,
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            functions.gotoScreenWithParam(
              item.shop,
              this.props.navigation,
              "CategoryScreen"
            )
          }
        >
          <Image source={item.img} style={{ width: 48, height: 48 }} />
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
      <Image
        style={{
          width: "90%",
          height: height,
          marginLeft: "5%",
          marginRight: "5%",
        }}
        source={{ uri: item.img }}
      />
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
    if (index % 2 == 0)
      return (
        <View style={{ width: "50%", marginTop: 20 }}>
          <View style={{ paddingRight: 5, width: "100%" }}>
            <View
              style={{
                borderRadius: 30,
                backgroundColor: "white",
                width: "100%",
                padding: 10,
              }}
            >
              <View style={{ padding: 0 }}>
                <Image
                  style={{ width: "100%", height: 128, marginTop: 20}}
                  source={{ uri: item.image }}
                />
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, right: 5 }}
                  onPress={() =>
                    this.addRemoveFavorite(item.code)
                  }
                >
                  <View>
                  {
                    (component__.checkFavorite(item.code)) ? <Image style={{ width: 16, height: 16 }} source={heart_active}/> : <Image source={heart}/> 
                  }
                  </View>
                </TouchableOpacity>
                <View
                  style={{ marginTop: 30 }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      functions.gotoScreenProduct(
                        component__.state.shop,
                        item.code,
                        component__.props.navigation,
                        "ProductScreen"
                      )
                    }
                  >
                    <Text style={{ color: "#23262F", fontSize: 16, minHeight: minHeight }}>
                      { functions.formatTitle(item.title) }
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}
                  >
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
                      <Text style={[{ color: "#D63F5C", fontSize: 16 }, styles.fontBold]}>
                        { functions.convertMoney(item.price) } ¥
                      </Text>
                      <Text style={{ fontSize: 12, color: "#777E90" }}>
                      { functions.convertMoney(item.priceVN) } VND
                      </Text>
                    </View>
                    <TouchableOpacity
                    onPress={ () => this.addProduct(item, this.state.shop)}
                    >
                    <Image style={{ width:32, height: 32 }} source={image2} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    else
      return (
        <View style={{ width: "50%", marginTop: 20 }}>
          <View style={{ paddingLeft: 5, width: "100%" }}>
            <View
              style={{
                borderRadius: 30,
                backgroundColor: "white",
                width: "100%",
                padding: 10,
              }}
            >
              <View style={{ padding: 0 }}>
                <Image
                  style={{ width: "100%", height: 128, marginTop: 20 }}
                  source={{ uri: item.image }}
                />
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, right: 5 }}
                  onPress={() =>
                    this.addRemoveFavorite(item.code)
                  }
                >
                 <View>
                  {
                    (component__.checkFavorite(item.code)) ? <Image style={{ width: 16, height: 16 }} source={heart_active}/> : <Image source={heart}/> 
                  }
                  </View>
                </TouchableOpacity>
                <View
                  style={{ marginTop: 30 }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      functions.gotoScreenProduct(
                        component__.state.shop,
                        item.code,
                        component__.props.navigation,
                        "ProductScreen"
                      )
                    }
                  >
                    <Text style={{ color: "#23262F", fontSize: 16, minHeight: minHeight }}>
                    { functions.formatTitle(item.title) }
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}
                  >
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
                    <Text style={[{ color: "#D63F5C", fontSize: 16 }, styles.fontBold]}>
                      { functions.convertMoney(item.price) } ¥
                      </Text>
                      <Text style={{ fontSize: 12, color: "#777E90" }}>
                        { functions.convertMoney(item.priceVN)} VND
                      </Text>
                    </View>
                    <TouchableOpacity
                    onPress={ () => this.addProduct(item, this.state.shop)}
                    >
                    <Image style={{ width:32, height: 32 }} source={image2} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
  };

  static navigationOptions = ({ navigation }) => ({
    title: "",
  });

  checkFavorite = (product) => {
    var count;
    var listFavorite = this.state.ListFavorite;

    for(count = 0; count < listFavorite.length; count++)
      if(listFavorite[count].Product == product)
        return true;

    return false;    
  }

  getIdFavoriteFromProduct = (product) => {
    var count;
    var listFavorite = this.state.ListFavorite;

    for(count = 0; count < listFavorite.length; count++)
      if(listFavorite[count].Product == product)
        return listFavorite[count]._id;
}

  addRemoveFavorite = (product) => {
     if(this.checkFavorite(product))
       functions.deleteFavorite(this, this.getIdFavoriteFromProduct(product));
     else 
       functions.addFavorite(product, this.state.shop, this);
  }

  componentDidMount() {
    component__ = this;

    functions.getBanners(this);
    functions.getPoplularBranch(this);
    functions.getListPopularProduct(this, "mercari");
    functions.getListFavorite(this);

    this.setCart();

    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    //LogBox.ignoreAllLogs(true);
    
  }

  setCart = async () => {
    var cart = await functions.getCart();

    this.setState({ cart: JSON.parse(cart), ActivityIndicator: false });
  };

  addProduct = async (product, cat) => {
    await functions.addCart(
      product,
      cat,
      this
    );

    /*this.setState({
      order: true,
    });*/

    this.gotoTop();
  };

  gotoTop = () => {
    this.refs._scrollView.scrollTo({
      y: 0,
      animated: true,
    });
  };

  render() {
    LogBox.ignoreAllLogs(true);

    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
        size="large"
        animating={this.state.ActivityIndicator}
      />
    );

    return (
      <View style={{flex: 1}}>
      <ScrollView ref="_scrollView">
        <BackgroundHome sourse="true" start="1">
          {/* Toolbar */}
          <CustomToolbar component={this} />
          {/* END */}
          <View style={[styles.fullWith, { padding: 20 }]}>
            <TextInput
              placeholder="Tìm kiếm"
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
          </View>
        </BackgroundHome>
      </ScrollView>
      <View style={[styles.bottom, { marginTop: 0 }]}>
              {/* Bottom */}
              <IconBottom component={this} type="1" />
              {/* END */}
            </View>
      </View>
    );
  }
}

export default HomeScreen;
