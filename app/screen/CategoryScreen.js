import React, { Component} from "react";

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  LogBox,
  SearchBox,
  ImageBackground,
  ActivityIndicator,
  Dimensions
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
import HeaderBg from "../components/HeaderBackground"

import styles from "../style/style";
import functions from "../../app/function/function";

import { HeaderBackground } from "react-navigation-stack";

const carouselItems = [
  {
    title: "Thời trang nam",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang nữ",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang trẻ em",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "NHà cửa đời sống",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang nam",
    img: require("../../app/assets/circle_bg.png"),
  },
];

const carouselItems_ = [
  {
    title: "Vé & thẻ ảnh",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Điện gia dụng và thiết bị số",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Ô tô và xe máy",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thể thao và dã ngoại",
    img: require("../../app/assets/circle_bg.png"),
  },
  {
    title: "Thời trang nam",
    img: require("../../app/assets/circle_bg.png"),
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

const img3 = require("../../app/assets/heart.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const img = require("../../app/assets/circle_bg.png");

var component;

var height = Math.floor(Dimensions.get('window').width * 0.9 * 296/1560);

class CategoryScreen extends Component {
  state = {
    listService: [],
    listProductByTag: [],
    listPopularItem: [],
    listPopularName: [],
    dataPopularBranch: [],
    dataBanner: [],
    service: '',
    ActivityIndicator1: true,
    ActivityIndicator2: true,
    ActivityIndicator3: false,
    ActivityIndicator4: true,
    ActivityIndicator5: true,
  }
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
      onPress={() =>
        component.getListProductByTagClick(item.catid, item.ten)
      }
      >
<View style={{ alignItems: "center" }}>
        <Image source={img} />
        <Text>{item.ten}</Text>
      </View>
      </TouchableOpacity>
    );
  }

  _renderItem_PopularBranch = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../app/assets/Maskgroup_1.png")} />
          <Text>{item.Brand}</Text>
      </View>
    );
  };

  gotoProduct = () => {
    this.refs._scrollView.scrollTo({
      y: 300,
      animated: true,
    });
}

  getListProductByTagClick = (catid, ten) => {
    functions.getListProductByTagClick(component, component.props.navigation.state.params.itemId, catid, ten, component.state.listService)
    this.gotoProduct();
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

  _renderItem_Banner({ item, index }) {
    return (
      <Image style={{ width: '90%', height: height, marginLeft: '5%', marginRight: '5%' }} source={{ uri: item.img }} />
    );
  }

  _renderItem_2({ item, index }) {
    if(item.ten == component.state.service)
    return (
      <View style={{ alignItems: "center", backgroundColor: '#3187EA', borderRadius: 16, padding: 10 }}>
        <TouchableOpacity
        onPress={() =>
          functions.getListProductByTagClick(component, component.props.navigation.state.params.itemId, item.catid, item.ten, component.state.listService)
        }
        >
<Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>{item.ten}</Text>
        </TouchableOpacity>
        
      </View>
    );
    else 
    return (
        <View style={{alignItems: "center", borderRadius: 16, backgroundColor: '#E6E8EC', padding: 10 }}>
          <TouchableOpacity
          onPress={() =>
            functions.getListProductByTagClick(component, component.props.navigation.state.params.itemId, item.catid, item.ten, component.state.listService)
          }
          >
           <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>{item.ten}</Text>
           </TouchableOpacity>
        </View>
      );
  }

  _renderItem_2_({ item, index }) {
    return (
        <View style={{alignItems: "center", borderRadius: 16, backgroundColor: '#E6E8EC', padding: 10 }}>
           <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>{item.vi}</Text>
        </View>
      );
  }

  _renderItem_3 = ({ item, index }) => {
    if(index %2 == 0)
    return (
      <TouchableOpacity
      style={{width: '50%', marginTop: 20}}
      onPress={() =>
        functions.gotoScreenProduct(component.props.navigation.state.params.itemId, (item.code != undefined ? item.code : item.ID), this.props.navigation, "ProductScreen")
      }
      >
      <View style={{ paddingRight: 5, width: '100%' }}>
      <View style={{borderRadius: 30, padding: 10, backgroundColor: 'white', width: '100%'}}>
        <View>
      <Image style={{width: '100%',height: 128}} source={{ uri: (item.Image != undefined ? item.Image : item.image) }} />
        <View style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ color: "#23262F", fontSize: 16 }}>
            {(item.title != undefined ? item.title.substr(0, 15) : item.Title.substr(0, 15))}
          </Text>
          <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
          Từ {component.state.service}
          </Text>
          <Rating
  imageSize={15}
  readonly
  startingValue={0}
  style={styles.rating}
/>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: "#D63F5C", fontSize: 16 }}>{item.price} ¥</Text>
              <Text style={{ fontSize: 12, color: "#777E90" }}>
              {(item.priceVN != undefined ? item.priceVN : item.PriceVN)} VND
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
      <TouchableOpacity
      style={{width: '50%', marginTop: 20}}
      onPress={() =>
        functions.gotoScreenProduct(component.props.navigation.state.params.itemId, (item.code != undefined ? item.code : item.ID), this.props.navigation, "ProductScreen")
      }
      >
      <View style={{ paddingLeft: 5, width: '100%' }}>
      <View style={{borderRadius: 30, padding: 10, backgroundColor: 'white', width: '100%'}}>
        <View>
        <Image style={{width: '100%',height: 128}} source={{ uri: (item.Image != undefined ? item.Image : item.image) }} />
        <View style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ color: "#23262F", fontSize: 16 }}>
          {(item.title != undefined ? item.title.substr(0, 15) : item.Title.substr(0, 15))}
          </Text>
          <Text style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}>
          Từ {component.state.service}
          </Text>
          <Rating
  imageSize={15}
  readonly
  startingValue={0}
  style={styles.rating}
/>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: "#D63F5C", fontSize: 16 }}>{item.price} ¥</Text>
              <Text style={{ fontSize: 12, color: "#777E90" }}>
              {(item.priceVN != undefined ? item.priceVN : item.PriceVN)} VND
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
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => (
      <HeaderBg/>
    ),
    headerRight: (
        <View style={{paddingRight: 20}}>
        <TouchableOpacity
        onPress={() =>
          functions.gotoScreen(navigation, "KeywordPopularScreen")
        }
        >
           <Image source={image3}/>
        </TouchableOpacity>
        </View>
    ),
    headerTitleStyle: {
      color: 'white'
    },
    title: 'Category'
})

  componentDidMount() {
    LogBox.ignoreAllLogs(['VirtualizedLists should never be nested']);
    component = this;

    //this.getData();

    var itemId = this.props.navigation.state.params.itemId;

    functions.getBanners(this);
    functions.getPopularItem(this, itemId);
    functions.getPopularName(this);
    functions.getPoplularBranch(this);
    functions.getListService(this, itemId);
  }

  getData = async () => {
    var itemId = this.props.navigation.state.params.itemId;

    await functions.getListService(this, itemId);
    functions.getListProductByTag(this, itemId);

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
      <ScrollView ref='_scrollView'>
        <Background full="1">
          <View style={[styles.fullWith, { padding: 20, paddingTop: 0, marginTop: 0 }]}>
            {/* Banner */}
            {this.state.ActivityIndicator5 == "" ? View1 : View2}
            <Banner 
            renderItem={this._renderItem_Banner}
            carouselItems={this.state.dataBanner}
            />
            {/* END */}
          </View>
          <View style={styles.homeBody}>
            <View>
              <Header1>Danh mục phổ biến</Header1>
              {this.state.ActivityIndicator1 == "" ? View1 : View2}
              {/* Slider 1 */}
              <Carousel
                data={this.state.listPopularItem}
                renderItem={this._renderItem}
                top={0}
                itemWidth={100}
                loop={true}
              />
              {/* END */}
              {/* Từ khoá phổ biến */}
              <Header1>Từ khoá phổ biến</Header1>
              {this.state.ActivityIndicator2 == "" ? View1 : View2}
              <Carousel
                data={this.state.listPopularName}
                renderItem={this._renderItem_2_}
                top={0}
                itemWidth={140}
                loop={true}
              />
              {/* END */}
              <View style={{marginTop: 30}}></View>
              <Header1>Thương hiệu phổ biến</Header1>
              {this.state.ActivityIndicator3 == "" ? View1 : View2}
              {/* Slider 2 */}
              <Carousel
                data={this.state.dataPopularBranch}
                renderItem={this._renderItem_PopularBranch}
                top={20}
                itemWidth={100}
                loop={true}
              />
              {/* END */}
              <View style={{ marginTop: 40 }}><Header1>Hot! categories</Header1></View>
              {this.state.ActivityIndicator4 == "" ? View1 : View2}
              {/* Slider Product */}
              <SliderProduct 
                  dataCarouselSlider={this.state.listService}
                  renderCarouselSlider={this._renderItem_2}
                  dataProductSlider={this.state.listProductByTag}
                  renderProductSlider={this._renderItem_3}
                  loop={true}
              />
              {/* END */}
            </View>
          </View>
        </Background>
      </ScrollView>
    );
  }
}

export default CategoryScreen;
