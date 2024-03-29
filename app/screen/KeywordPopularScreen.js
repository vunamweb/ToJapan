import React, { Component } from "react";

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
} from "react-native";
import { CheckBox, Rating, AirbnbRating } from "react-native-elements";
import { Text, Searchbar } from "react-native-paper";

import Background from "../components/Background";
import TextInput from "../components/TextInput";
import CustomToolbar from "../components/CustomToolbar";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import ContainerHeader from "../components/ContainerHeader";
import Header1 from "../components/Header1";
import SliderProduct from "../components/SliderProduct";
import IconBottom from "../components/IconBottom";
import HeaderBg from "../components/HeaderBackground";
import ListView from "../components/ListView";

import styles from "../style/style";
import functions from "../../app/function/function";

const carouselItems = [
  {
    title: "Đồng hồ lô",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Zippo",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Seiko",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Citizen",
    img: require("../../app/assets/Close-circle.png"),
  },
  {
    title: "Credor",
    img: require("../../app/assets/Close-circle.png"),
  },
];

const dataTKPB1 = [
  {
    title: "Đồ Câu cá",
  },
  {
    title: "Nintendo Switch",
  },
  {
    title: "Nike",
  },
  {
    title: "Đồ Câu cá",
  },
];

const dataTKPB2 = [
  {
    title: "Túi xách",
  },
  {
    title: "Giày dép",
  },
  {
    title: "Áo nữ",
  },
  {
    title: "Máy chơi game",
  },
];

const image3 = require("../../app/assets/Filler.png");

class KeyWordPopularScreen extends Component {
  state = {
    search: null,
    listPopularName: [],
    listSearchHistory: [],
    ActivityIndicator: true,
    ActivityIndicator2: true,
  };

  _renderItem({ item, index }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.title}</Text>
        <Image source={item.img} />
      </View>
    );
  }
  _renderItem_({ item, index }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.title}</Text>
        <Image source={item.img} />
      </View>
    );
  }

  _renderItem_2_({ item, index }) {
    return (
      <View
        style={{
          alignItems: "center",
          borderRadius: 16,
          backgroundColor: "#E6E8EC",
          padding: 10,
        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
          {item.vi}
        </Text>
      </View>
    );
  }

  onChangeSearch = (navigation) => {
    functions.gotoScreen(navigation, "ForgotPassWordScreen");
  };

  componentDidMount() {
    //LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
    //component = this;

    this.props.navigation.setParams({
      my: this,
    });

    functions.getPopularName(this);
    functions.getHistorySearch(this);
  }

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,
    headerRight: (
      <View
        style={{ paddingRight: 20, marginBottom: 10, flexDirection: "row" }}
      >
        <Searchbar
          style={{
            marginRight: 10,
            borderRadius: 20,
            height: 40,
            backgroundColor: 'transparent',
            //backgroundColor: 'white',
            //opacity: 0.5,
            borderWidth: 0.5,
            borderRadius: 20,
            borderColor: 'white',
            //color: 'white'
          }}
          placeholderTextColor="white"
          inputStyle={{ color: 'whitte' }}
          leftIconContainerStyle={{ color: 'white' }}
          //icon = {{type: 'material-community', color: '#86939e', name: 'share' }}
          placeholder="Nhập tên sản phẩm"
          onChangeText={(value) =>
            navigation.getParam("my").setState({ search: value })
          }
          onIconPress={() =>
            navigation
              .getParam("my")
              .gotoSearch(navigation.getParam("my").state.search)
          }
        />
      </View>
    ),
    headerTitleStyle: {
      color: "white",
    },
    title: "",
  });

  gotoSearch = (search) => {
    var data = this.props.navigation.state.params.itemId;
    data = JSON.parse(data);
    data.search = search;

    functions.gotoScreenWithParam(
      JSON.stringify(data),
      this.props.navigation,
      "SearchScreen"
    );
  };

  /*componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
  }*/

  render() {
    var View1 = <View />;
    var View2 = (
      <ActivityIndicator
        size="large"
        animating={this.state.ActivityIndicator}
      />
    );

    return (
      <Background full="1">
        <View style={styles.homeBody}>
          <View>
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
            {/* Lịch sử tìm kiếm */}
            <View style={styles.history}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                Lịch sử tìm kiếm
              </Text>
              <Text style={{ fontSize: 14 }}>Xoá tất cả</Text>
            </View>
            {/* END */}
            {/* List Lịch sử tìm kiếm */}
            {this.state.ActivityIndicator == "" ? View1 : View2}
            <ListView
              data={carouselItems}
              renderItem={this._renderItem_}
              col="1"
            />
            {/* END */}
          </View>
        </View>
      </Background>
    );
  }
}

export default KeyWordPopularScreen;
