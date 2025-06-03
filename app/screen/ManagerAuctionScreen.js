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
  Text,
  useWindowDimensions,
  ActivityIndicator,
  Modal,
} from "react-native";
import { Rating, AirbnbRating, Slider } from "react-native-elements";
import { Portal, Provider, RadioButton } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

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
import Dropdown from "../components/Select";
import CheckBox from "../components/Checkbox";

import styles from "../style/style";
import functions from "../../app/function/function";

import { HeaderBackground } from "react-navigation-stack";
//import { Provider } from "react-native-paper/lib/typescript/core/settings";

const image3 = require("../../app/assets/notification-bing.png");
const image4 = require("../../app/assets/shopping-bag.png");

var idBid;

const dataProductSlider = [
  {
    id: 1,
    Status: "Done",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 30,
    text4: "5,434",
    Total: "1,016,158",
  },
  {
    id: 2,
    Status: "No",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 10,
    text4: "5,434",
    Total: "1,016,158",
  },
  {
    id: 3,
    Status: "Payment",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 50,
    text4: "5,434",
    Total: "1,016,158",
  },
  {
    id: 4,
    Status: "Done",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 90,
    text4: "2,434",
    Total: "4,016,158",
  },
  {
    id: 5,
    Status: "Payment",
    created_at: "2022-07-12",
    image: "http://vunam.io.vn/tojapan/image/image_6.png",
    Description: "釣り用フックキーパー 釣り用フ...",
    Amount: 30,
    text4: "5,434",
    Total: "1,016,158",
  },
];

class ManagerAuctionScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: "1", title: "Đang đấu"},
      { icon: "ios-paper", key: "2", title: "Săn phút chót" },
      { icon: "ios-paper", key: "3", title: "Đấu thắng" },
    ],
    ActivityIndicator: false,
    orderList: [],
    visible: false
  };

  static navigationOptions = ({ navigation }) => ({
    //headerStyle: { backgroundColor: '#00FF57' },
    headerBackground: () => <HeaderBg />,
    headerRight: (
      <View style={{ paddingRight: 20, flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() =>
            functions.gotoScreen(navigation, "KeywordPopularScreen")
          }
        >
          <Image source={image3} style={{ marginRight: 20, width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () =>
              navigation.getParam("my").setState({
                visibleFilter: true,
              })
            //navigation.getParam('my').showModalFilter.bind(navigation.getParam('my'))
          }
        >
          <Image style={{ width: 24, height: 24 }} source={image4} />
        </TouchableOpacity>
      </View>
    ),

    headerTitleStyle: {
      color: "white",
    },
    title: "Quản lý đấu giá",
  });

  showOrder = (status) => {
    var listOrder = this.state.orderList;
    var response = [];
    var count;

    for(count = 0; count < listOrder.length; count++)
      switch(status) {
        case '2':
          if(!listOrder[count].End && listOrder[count].Status == global.SPC)
            response.push(listOrder[count]);
            break;
        case '3':
          if(listOrder[count].End && (listOrder[count].Status == global.success1 || listOrder[count].Status == global.success2))
          response.push(listOrder[count]);
          break;
        
        default:
          response.push(listOrder[count]);
      }

    return response;    
 }

 getCountTab = (status) => {
  var listOrder = this.state.orderList;
  var count = 0, key;

  for(key = 0; key < listOrder.length; key++) {
    switch(status) {
      case '2':
        if(!listOrder[key].End && listOrder[key].Status == global.SPC)
          count++;
          break;
      case '3':
        if(listOrder[key].End && (listOrder[key].Status == global.success1 || listOrder[key].Status == global.success2))
        count++;
        break;
      
      default:
        count++;
    }
  }

  return "4"; //count.toString();
}

hideModal = () => {
  this.setState({
    visible: false,
  });
};

showModal = (id) => {
  idBid = id; 

  this.setState({
    visible: true,
  });
};

  componentDidMount() {
    this.showModal.bind(this);

    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    this.props.navigation.setParams({
      my: this,
    });

    //functions.getAuction(this);
  }

  _handleIndexChange = (index) => {
    this.setState({ index });
  };

  Route = (status) => 
  <View style={[{ flex: 1, backgroundColor: '#FAFAFA'}, styles.borderNormal]}>
     <SliderProduct
              dataCarouselSlider={null}
              renderCarouselSlider={this._renderItem_2_}
              dataProductSlider={this.showOrder(status)}
              //dataProductSlider={dataProductSlider}
              renderProductSlider={this._renderItem_3}
              col={1}
              style="1"
            />
            <IconBottom component={this} type="2" />
  </View>;

  _renderScene = SceneMap({
    "1": () => this.Route('1'),
    "2": () => this.Route('2'),
    "3": () => this.Route('3')
  });

  //layout = useWindowDimensions();

  TabBar = () => {
    return;
  };

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
          {item.title}
        </Text>
      </View>
    );
  }

  _renderItem_3 = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 10,
          width: "100%",
          marginBottom: 20,
          backgroundColor: "white",
        }}
      >
        <View style={{ width: "100%", flexDirection: "row" }}>
          <TouchableOpacity
          >
          <Image
            style={{ width: 128, height: 128 }}
            source={{ uri: item.Image }}
          />
          </TouchableOpacity>
          <View style={{ marginTop: 0, marginLeft: 20, flex: 1 }}>
            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>{item.End ? global.endAuction : global.noEndAuction}</Text>
              
              <Text style={[styles.auctionText1, styles.fontBold, item.Status == global.statusfaildAuction1 || item.Status == global.statusfaildAuction2 ? styles.error : styles.success]}>
                {item.Status == global.statusfaildAuction1 || item.Status == global.statusfaildAuction2 ? global.faildAuction : global.processAuction }
              </Text>
            </View>

            <Text style={[styles.money3, { fontSize: 12 }]}>{item.Name}</Text>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>Mã đấu</Text>
              <Text style={[styles.auctionText2]}>{item.Order}</Text>
            </View>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between"},
              ]}
            >
              <Text style={styles.paymentText2}>Giá hiện tại</Text>
              <Text style={[styles.mangerOderText3, styles.fontBold]}>
                { functions.convertMoney(item.Price) }¥
                <Text style={[styles.containerHeaderText2]}> { functions.convertMoney(item.PriceVN) } VND</Text>
              </Text>
            </View>

            <View
              style={[
                styles.flexRowStart,
                styles.marginBottom10,
                styles.marginTop10,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.paymentText2}>Giá đấu</Text>
              <Text style={[styles.mangerOderText3, styles.fontBold]}>
                { functions.convertMoney(item.Bid) }¥
                <Text style={styles.containerHeaderText2}> { functions.convertMoney(item.Bid * 184) } VND</Text>
              </Text>
            </View>

            <View style={[styles.flexRowStart, { justifyContent: "flex-end" }]}>
              <TouchableOpacity
              onPress={ () => this.showModal(item._id)}
              >
              <Text style={[styles.mangerOderText3, styles.fontBold, item.Status == global.statusfaildAuction1 || item.Status == global.statusfaildAuction2 ? styles.show : styles.hide]}>Xoá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    var View1 = <View />;
    var View2 = (
      <View style={{ marginTop: 40 }}>
        <ActivityIndicator
                size="large"
                animating={this.state.ActivityIndicator}
              />
      </View>
    );

    var component = this;

    return (
      <Provider>
<Portal>
<Modal
              visible={this.state.visible}
              transparent={true}
            >
              <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
              {/* HEADER */}
              <View style={styles.shortHeaderModal}>
                <Text style={{ color: "white", fontSize: 20 }}>Đấu giá</Text>
                <TouchableOpacity
                  onPress={this.hideModal.bind(this)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 0,
                    marginRight: 20,
                  }}
                >
                  <Text style={{ color: "white" }}>x</Text>
                </TouchableOpacity>
              </View>
              {/* END */}
              {/* Body */}
              <View style={{ width: '100%', backgroundColor: "white", flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>
                {/* Button huy */}
                <TouchableOpacity
                      style={[
                        styles.buttonNotFull,
                        {
                          backgroundColor: "white",
                          marginTop: 0,
                          borderColor: "#3187EA",
                          borderWidth: 1,
                          paddingVertical: 15,
                          paddingHorizontal: 20,
                        },
                      ]} 
                      onPress={this.hideModal.bind(this)}
                    >
                      <Text style={{ color: "#3187EA" }}>Huỷ bỏ</Text>
                    </TouchableOpacity>
                    {/* END */}
                    {/* Button ap dung */}
                    <TouchableOpacity
                      style={[
                        styles.buttonNotFull,
                        { backgroundColor: "#3187EA", marginTop: 0,  paddingVertical: 15, paddingHorizontal: 40 },
                      ]}
                      onPress={ () => functions.deleteBid(this, idBid)}
                    >
                      <Text style={{ color: "white" }}>Xoá đấu giá</Text>
                    </TouchableOpacity>
                    {/* END */}
              </View>
              {/* END */}
              </View>
            </Modal>
            </Portal>

      <View style={{ marginTop: 0, flex: 1 }}>
        {this.state.ActivityIndicator == "" ? View1 : View2}
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          tabStyle={{ color: "red" }}
          //initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: "white" }}
              renderLabel={({ route, color }) => (
                <View style={{ flexDirection: "row", paddingTop: 5 }}>
                  <Text style={{ color: "black" }}>{route.title}</Text>
                  {route.key == this.state.index + 1 ? (
                    <View
                      style={[
                        styles.circleSmall,
                        styles.marginLeft10,
                        { backgroundColor: "#3187EA" },
                      ]}
                    >
                      <Text><Text>{component.getCountTab(route.key)}</Text></Text>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.circleSmall,
                        styles.marginLeft10,
                        { backgroundColor: "#ccc" },
                      ]}
                    >
                      <Text>{component.getCountTab(route.key)}</Text>
                    </View>
                  )}
                </View>
              )}
            />
          )}
        />
      </View>
      </Provider>
    );
  }
}

export default ManagerAuctionScreen;
