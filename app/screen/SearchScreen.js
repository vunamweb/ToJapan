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
import { Rating, AirbnbRating, Slider } from "react-native-elements";
import { Text, Modal, Portal, Provider, RadioButton } from "react-native-paper";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

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

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

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

const img1 = require("../../app/assets/sort-down.png");
const img2 = require("../../app/assets/star_1.png");
const img3 = require("../../app/assets/heart.png");
const image3_1 = require("../../app/assets/downright-3.png");

const img = require("../../app/assets/image_6.png");
const image1 = require("../../app/assets/heart.png");
const image2 = require("../../app/assets/shopping_bag.png");
const image3 = require("../../app/assets/search-normal.png");
const image4 = require("../../app/assets/Filler.png");

var listProduct, shop, listItem;
var component;

class SearchScreen extends Component {
  state = {
    visible: false,
    visibleFilter: false,
    item: null,
    filter1: true,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
    filter6: false,
    sort1: true,
    sort2: false,
    sort3: false,
    sort4: false,
    listProductByTag: [],
    ActivityIndicator: false,
    ActivityIndicator2: true,
    price: 0,
    listPopularName: [],
  };

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

  _renderItem_2({ item, index }) {
    if (index == 0)
      return (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#3187EA",
            borderRadius: 16,
            padding: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            {item.title}
          </Text>
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
          <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
            {item.title}
          </Text>
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

  _renderItem_3 = ({ item, index }) => {
    if (index % 2 == 0)
      return (
        <TouchableOpacity
          style={{ width: "50%", marginTop: 20 }}
          onPress={() =>
            functions.gotoScreenProduct(
              JSON.parse(this.props.navigation.state.params.itemId).shop,
              item.code != undefined ? item.code : item.ID,
              this.props.navigation,
              "ProductScreen"
            )
          }
        >
          <View style={{ paddingRight: 5, width: "100%" }}>
            <View
              style={{
                borderRadius: 30,
                padding: 10,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ width: "100%", height: 128 }}
                  source={{
                    uri: item.Image != undefined ? item.Image : item.image,
                  }}
                />
                <View
                  style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}
                >
                  <Text style={{ color: "#23262F", fontSize: 16 }}>
                    {item.title != undefined
                      ? item.title.substr(0, 15)
                      : item.Title.substr(0, 15)}
                  </Text>
                  <Text
                    style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}
                  >
                    Từ {shop}
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
                        {item.priceVN != undefined
                          ? item.priceVN
                          : item.PriceVN}{" "}
                        VND
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
          style={{ width: "50%", marginTop: 20 }}
          onPress={() =>
            functions.gotoScreenProduct(
              JSON.parse(this.props.navigation.state.params.itemId).shop,
              item.code != undefined ? item.code : item.ID,
              this.props.navigation,
              "ProductScreen"
            )
          }
        >
          <View style={{ paddingLeft: 5, width: "100%" }}>
            <View
              style={{
                borderRadius: 30,
                padding: 10,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ width: "100%", height: 128 }}
                  source={{
                    uri: item.Image != undefined ? item.Image : item.image,
                  }}
                />
                <View
                  style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}
                >
                  <Text style={{ color: "#23262F", fontSize: 16 }}>
                    {item.title != undefined
                      ? item.title.substr(0, 15)
                      : item.Title.substr(0, 15)}
                  </Text>
                  <Text
                    style={{ color: "#23262F", fontSize: 12, marginTop: 5 }}
                  >
                    Từ {shop}
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
                        {item.priceVN != undefined
                          ? item.priceVN
                          : item.PriceVN}{" "}
                        VND
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
          <Image source={image3} style={{ marginRight: 20, display: "none" }} />
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
          <Image source={image4} />
        </TouchableOpacity>
      </View>
    ),

    headerTitleStyle: {
      color: "white",
    },
    title: JSON.parse(navigation.state.params.itemId).search,
  });

  componentDidMount() {
    LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);

    component = this;

    this.props.navigation.setParams({
      my: this,
    });

    functions.getPopularName(this);
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  showModalFilter = () => {
    this.setState({
      visibleFilter: true,
    });
  };

  hideModalFilter = () => {
    this.setState({
      visibleFilter: false,
    });
  };

  getListProduct = () => {
    var count;
    var listProductSearch = [];

    var listProduct =
      this.state.listProductByTag.length == 0
        ? JSON.parse(this.props.navigation.state.params.itemId).listProductByTag
        : this.state.listProductByTag;

    var search = JSON.parse(this.props.navigation.state.params.itemId).search;

    for (count = 0; count < listProduct.length; count++)
      if (search == "" || search == null)
        listProductSearch.push(listProduct[count]);
      else if (
        listProduct[count].title.toUpperCase().includes(search.toUpperCase())
      )
        listProductSearch.push(listProduct[count]);

    return listProductSearch;
  };

  sortListProduct = (listProduct, type) => {
    switch (type) {
      case 2:
        return this.sortPriceASC(listProduct);
        break;

      case 3:
        return this.sortPriceDSC(listProduct);
        break;

      case 4:
        return this.sortPriceASC(listProduct);
        break;

      default:
        return JSON.parse(this.props.navigation.state.params.itemId).listProductByTag;
    }
  };

  performTimeConsumingTask = async (component) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        component.setState({
          ActivityIndicator: false,
        });
      }, 200)
    );
  };

  sortPriceASC = (listProduct) => {
    var count, count1;

    for (count = 0; count < listProduct.length - 1; count++)
      for (count1 = count + 1; count1 < listProduct.length; count1++)
        if (listProduct[count].price > listProduct[count1].price) {
          var temp = listProduct[count];
          listProduct[count] = listProduct[count1];
          listProduct[count1] = temp;
        }

    return listProduct;
  };

  sortPriceDSC = (listProduct) => {
    var count, count1;

    for (count = 0; count < listProduct.length - 1; count++)
      for (count1 = count + 1; count1 < listProduct.length; count1++)
        if (listProduct[count].price < listProduct[count1].price) {
          var temp = listProduct[count];
          listProduct[count] = listProduct[count1];
          listProduct[count1] = temp;
        }

    return listProduct;
  };

  sortDateDSC = (listProduct) => {
    return this.sortPriceDSC(listProduct);
  };

  sort = (type) => {
    var listProduct =
      this.state.listProductByTag.length == 0
        ? JSON.parse(this.props.navigation.state.params.itemId).listProductByTag
        : this.state.listProductByTag;

    switch (type) {
      case 2:
        this.setState({
          sort1: false,
          sort2: true,
          sort3: false,
          sort4: false,
          visible: false,
          ActivityIndicator: true,
          listProductByTag: this.sortListProduct(listProduct, 2),
        });
        break;

      case 3:
        this.setState({
          sort1: false,
          sort2: false,
          sort3: true,
          sort4: false,
          visible: false,
          ActivityIndicator: true,
          listProductByTag: this.sortListProduct(
            listProduct,
            3
          ),
        });
        break;

      case 4:
        this.setState({
          sort1: false,
          sort2: false,
          sort3: false,
          sort4: true,
          visible: false,
          ActivityIndicator: true,
          listProductByTag: this.sortListProduct(
            listProduct,
            3
          ),
        });
        break;

      default:
        this.setState({
          sort1: true,
          sort2: false,
          sort3: false,
          sort4: false,
          visible: false,
          ActivityIndicator: true,
          listProductByTag: this.sortListProduct(
            listProduct,
            1
          ),
        });
    }

    this.performTimeConsumingTask(this);
  };

  getShop = () => {
    var data = this.props.navigation.state.params.itemId;
    data = JSON.parse(data);
    data = data.shop;

    return data;
  };

  getListItem = () => {
    var data = this.props.navigation.state.params.itemId;
    data = JSON.parse(data);
    data = data.listService;

    var count;
    var listItem = [];

    for (count = 0; count < data.length; count++)
      listItem.push(data[count].ten);

    return listItem;
  };

  getCondition = () => {
    if (this.state.filter1) return 1;
    else if (this.state.filter2) return 2;
    else if (this.state.filter3) return 3;
    else if (this.state.filter4) return 4;
    else if (this.state.filter5) return 5;
    else return 6;
  };

  getCatId = () => {
    var data = this.props.navigation.state.params.itemId;
    data = JSON.parse(data);
    data = data.listService;

    var count;

    for (count = 0; count < data.length; count++)
      if (data[count].ten == this.state.item) return data[count].catid;

    return 1;
  };

  getSelect = () => {
    var data = this.props.navigation.state.params.itemId;
    data = JSON.parse(data);
    data = data.listService;

    var count;

    for (count = 0; count < data.length; count++)
      if (data[count].ten == this.state.item) return count;

    return 0;
  };

  reset = () => {
    this.setState({
      item: "no",
      filter1: true,
      filter2: false,
      filter3: false,
      filter4: false,
      filter5: false,
      filter6: false,
    });
  };

  render() {
    listProduct = this.getListProduct();
    shop = this.getShop();
    listItem = this.getListItem();

    var condition = this.getCondition();
    var catId = this.getCatId();
    var selected = this.getSelect();

    var View1 = <View />;
    var View2 = <ActivityIndicator size="large" animating={true} />;

    var shop = JSON.parse(this.props.navigation.state.params.itemId).shop;

    var showPrice = (shop == 'mercari' || shop == 'rakuten' || shop == 'yahoo_shopping' || shop == 'yahoo_auction') ? 'styles.show' : 'styles.none';

    return (
      <Provider>
        {/* Modal */}
          <Portal>
            {/* Modal short */}
            <Modal
              visible={this.state.visible}
              contentContainerStyle={styles.shortModal}
            >
              {/* HEADER */}
              <View style={styles.shortHeaderModal}>
                <Text style={{ color: "white", fontSize: 20 }}>Sắp xếp</Text>
                <TouchableOpacity
                  onPress={this.hideModal.bind(this)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 0,
                    marginRight: 20,
                  }}
                >
                  <IconFontAwesome name="close" size={10} color="white" />
                </TouchableOpacity>
              </View>
              {/* END */}
              {/* Body */}
              <View style={{ backgroundColor: "white" }}>
                <View style={styles.shortOption}>
                  <RadioButton
                    status={this.state.sort1 ? "checked" : "unchecked"}
                    onPress={() => this.sort(1)}
                  />
                  <Text style={styles.shortText}>Mặc định</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View style={styles.shortOption}>
                  <RadioButton
                    status={this.state.sort2 ? "checked" : "unchecked"}
                    onPress={() => this.sort(2)}
                  />
                  <Text style={styles.shortText}>Giá từ thấp đến cao</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View style={styles.shortOption}>
                  <RadioButton
                    status={this.state.sort3 ? "checked" : "unchecked"}
                    onPress={() => this.sort(3)}
                  />
                  <Text style={styles.shortText}>Giá từ cao đến thấp</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#cccccc" }} />
                <View style={styles.shortOption}>
                  <RadioButton
                    status={this.state.sort4 ? "checked" : "unchecked"}
                    onPress={() => this.sort(4)}
                  />
                  <Text style={styles.shortText}>Sản phẩm mới</Text>
                </View>
              </View>
              {/* END */}
            </Modal>
            {/* END */}
            {/* Modal filter */}
            <Portal>
              <Modal
                visible={this.state.visibleFilter}
                contentContainerStyle={styles.filterModal}
              >
                {/* HEADER */}
                <View style={styles.filterHeaderModal}>
                  <TouchableOpacity onPress={this.hideModalFilter.bind(this)}>
                  <IconFontAwesome name="close" size={10} color="black" />
                  </TouchableOpacity>
                  <Text style={{ color: "black", fontSize: 20 }}>Bộ lọc</Text>
                  <TouchableOpacity onPress={() => this.reset()}>
                    <Text style={{ color: "#3187EA", fontSize: 20 }}>
                      Đặt lại
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* END */}
                {/* Body */}
                <View style={{ backgroundColor: "white", padding: 20 }}>
                  <Text style={styles.filterTitle}>Danh mục</Text>
                  {/* Dropdown1 */}
                  <Dropdown
                    onSelect={(selectedItem, index) => {
                      this.setState({
                        visibleGTGT: true,
                        item: selectedItem,
                      });
                    }}
                    defaultValueByIndex={selected}
                    data={listItem}
                    renderCustomizedButtonChild={(selectedItem, index) => {
                      return (
                        <View style={[styles.flexRowStart]}>
                          <Text
                            style={[styles.marginLeft10, styles.paymentText7]}
                          >
                            {selectedItem ? selectedItem : "Chọn Danh mục"}
                          </Text>
                          <View style={[styles.flexRowEnd]}>
                            <Image source={image3_1} />
                          </View>
                        </View>
                      );
                    }}
                  />
                  {/* END Dropdown1 */}
                  <Text style={styles.filterTitle}>Kích thước</Text>
                  {/* Dropdown2 */}
                  <Dropdown
                    onSelect={(selectedItem, index) => {
                      this.setState({
                        visibleGTGT: true,
                      });
                    }}
                    data={countries}
                    renderCustomizedButtonChild={(selectedItem, index) => {
                      return (
                        <View style={[styles.flexRowStart]}>
                          <Text
                            style={[styles.marginLeft10, styles.paymentText7]}
                          >
                            {selectedItem ? selectedItem : "Tất cả"}
                          </Text>
                          <View style={[styles.flexRowEnd]}>
                            <Image source={image3_1} />
                          </View>
                        </View>
                      );
                    }}
                  />
                  {/* END Dropdown2 */}
                  <Text style={styles.filterTitle}>Khoảng giá</Text>
                  <Slider
                    style={[{ width: "100%", height: 1 }, showPrice]}
                    minimumValue={global.min}
                    maximumValue={global.max}
                    value={this.state.price}
    onValueChange={(value) => this.setState({ price: value })}
                    minimumTrackTintColor="#777E90"
                    maximumTrackTintColor="#777E90"
                    thumbStyle={{
                      width: 10,
                      height: 10,
                      backgroundColor: "#777E90",
                    }}
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text>{global.min}</Text>
                    <Text>{Math.round(this.state.price)}</Text>
                    <Text>{global.max}</Text>
                  </View>
                  <Text style={[styles.filterTitle, { marginTop: 40 }]}>
                    Lọc theo tình trạng hàng hoá
                  </Text>
                  <CheckBox
                    label="Mới"
                    status={this.state.filter1 ? "checked" : "unchecked"}
                    onPress={() =>
                      this.setState({
                        filter1: true,
                        filter2: false,
                        filter3: false,
                        filter4: false,
                        filter5: false,
                        filter6: false,
                      })
                    }
                  />
                  <CheckBox
                    label="Không có vết xước"
                    status={this.state.filter2 ? "checked" : "unchecked"}
                    onPress={() =>
                      this.setState({
                        filter1: false,
                        filter2: true,
                        filter3: false,
                        filter4: false,
                        filter5: false,
                        filter6: false,
                      })
                    }
                  />
                  <CheckBox
                    label="Vết xước"
                    status={this.state.filter3 ? "checked" : "unchecked"}
                    onPress={() =>
                      this.setState({
                        filter1: false,
                        filter2: false,
                        filter3: true,
                        filter4: false,
                        filter5: false,
                        filter6: false,
                      })
                    }
                  />
                  <CheckBox
                    label="Ít khi sử dụng"
                    status={this.state.filter4 ? "checked" : "unchecked"}
                    onPress={() =>
                      this.setState({
                        filter1: false,
                        filter2: false,
                        filter3: false,
                        filter4: true,
                        filter5: false,
                        filter6: false,
                      })
                    }
                  />
                  <CheckBox
                    label="Hơi xước"
                    status={this.state.filter5 ? "checked" : "unchecked"}
                    onPress={() =>
                      this.setState({
                        filter1: false,
                        filter2: false,
                        filter3: false,
                        filter4: false,
                        filter5: true,
                        filter6: false,
                      })
                    }
                  />
                  <CheckBox
                    label="Đã sử dụng"
                    status={this.state.filter6 ? "checked" : "unchecked"}
                    onPress={() =>
                      this.setState({
                        filter1: false,
                        filter2: false,
                        filter3: false,
                        filter4: false,
                        filter5: false,
                        filter6: true,
                      })
                    }
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    {/* Button huy */}
                    <TouchableOpacity
                      style={[
                        styles.buttonNotFull,
                        {
                          backgroundColor: "white",
                          marginTop: 0,
                          borderColor: "#23262F",
                          borderWidth: 1,
                        },
                      ]}
                      onPress={null}
                    >
                      <Text style={{ color: "#23262F" }}>Huỷ</Text>
                    </TouchableOpacity>
                    {/* END */}
                    {/* Button ap dung */}
                    <TouchableOpacity
                      style={[
                        styles.buttonNotFull,
                        { backgroundColor: "#3187EA", marginTop: 0 },
                      ]}
                      onPress={() =>
                        functions.getListProductByTagFilter(
                          this,
                          shop,
                          catId,
                          condition,
                          this.state.price
                        )
                      }
                    >
                      <Text style={{ color: "white" }}>Áp dụng</Text>
                    </TouchableOpacity>
                    {/* END */}
                  </View>
                </View>
                {/* END */}
              </Modal>
            </Portal>
            {/* END */}
          </Portal>
          {/* END */}
          <Background full="1">
            <View style={[styles.homeBody, { flex: 1 }]}>
              {this.state.ActivityIndicator == "" ? View1 : View2}
              <View style={{ flex: 1 }}>
                {/* kết quả tìm kiếm */}
                <View style={[styles.seach, { marginTop: 20 }]}>
                  <Text>
                    Kết quả tìm kiếm:
                    <Text style={{ fontWeight: "700" }}>
                      {listProduct.length}
                    </Text>
                  </Text>
                  <TouchableOpacity onPress={this.showModal.bind(this)}>
                    <Image source={img1} />
                  </TouchableOpacity>
                </View>
                {/* END */}
                {/* Từ khoá phổ biến */}
                <View>
                <Header1>Từ khoá phổ biến</Header1>
                {this.state.ActivityIndicator2 == "" ? View1 : View2}
                <Carousel
                  data={this.state.listPopularName}
                  renderItem={this._renderItem_2_}
                  top={0}
                  itemWidth={140}
                  loop={true}
                />
                </View>
                {/* END */}
                <View/>
                {/* Slider Product */}
                <SliderProduct
                  dataCarouselSlider={null}
                  renderCarouselSlider={this._renderItem_2}
                  dataProductSlider={listProduct}
                  renderProductSlider={this._renderItem_3}
                />
                {/* END */}
              </View>
            </View>
          </Background>
        
      </Provider>
    );
  }
}

export default SearchScreen;
