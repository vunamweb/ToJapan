import { createStackNavigator } from "react-navigation-stack";
import { AsyncStorage } from "react-native";

import Splash1 from "../../app/screen/Splash1";
import Splash2 from "../../app/screen/Splash2";
import RegisterScreen from "../../app/screen/RegisterScreen";
import LoginScreen from "../../app/screen/LoginScreen";
import ConfirmScreen from "../../app/screen/ConfirmScreen";
import ForgotPassWordScreen from "../../app/screen/ForgotPassWordScreen";
import HomeScreen from "../../app/screen/HomeScreen";
import CategoryScreen from "../screen/CategoryScreen";
import KeywordPopularScreen from "../screen/KeywordPopularScreen";
import SearchScreen from "../screen/SearchScreen";
import ProductScreen from "../screen/ProductScreen";
import ProductDaugiaScreen from "../screen/ProductDaugiaScreen";
import CartScreen from "../screen/CartScreen";
import PaymentScreen from "../screen/PaymentScreen";
import ManagerOrder from "../screen/ManagerOrder";
import ManagerOrder1 from "../screen/ManagerOrder1";
import ListAddress from "../screen/ListAddressScreen";
import AddDressScreen from "../screen/AddDressScreen";
import WaletScreen from "../screen/WaletScreen";
import AddMoneyScreen from "../screen/AddMoneyScreen";
import ProfileScreen from "../screen/ProfileScreen";
import SettingScreen from "../screen/SettingScreen";
import AuctionScreen from "../screen/AuctionScreen";
import LastMinutesScreen from "../screen/LastMinutesScreen";
import ManagerAuctionScreen from "../screen/ManagerAuctionScreen";
import DetailOrderScreen from "../screen/DetailOrderScreen";
import FavourScreen from "../screen/FavourScreen";
import HistorySearchScreen from "../screen/HistorySearchScreen";
import ComplainScreen from "../screen/ComplainScreen";
import PersonalScreen from "../screen/PersonalScreen";
import ChangePasswordScreen from "../screen/ChangePasswordScreen";

import network from "../network/network";

class Functions {
  initNavigarion = () => {
    return createStackNavigator({
      Splash1: {
        screen: Splash1,
        navigationOptions: {
          header: null,
        },
      },

      Splash2: {
        screen: Splash2,
        navigationOptions: {
          header: null,
        },
      },

      LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
          header: null,
        },
      },

      RegisterScreen: {
        screen: RegisterScreen,
      },

      ConfirmScreen: {
        screen: ConfirmScreen,
      },

      ForgotPassWordScreen: {
        screen: ForgotPassWordScreen,
      },

      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
          header: null,
        },
      },

      CategoryScreen: {
        screen: CategoryScreen,
      },

      KeywordPopularScreen: {
        screen: KeywordPopularScreen,
      },

      SearchScreen: {
        screen: SearchScreen,
      },

      ProductScreen: {
        screen: ProductScreen,
        navigationOptions: {
          header: null,
        },
      },

      ProductDaugiaScreen: {
        screen: ProductDaugiaScreen,
        navigationOptions: {
          header: null,
        },
      },

      CartScreen: {
        screen: CartScreen,
      },

      PaymentScreen: {
        screen: PaymentScreen,
      },

      ManagerOrder: {
        screen: ManagerOrder,
      },

      ManagerOrder1: {
        screen: ManagerOrder1,
      },

      ListAddress: {
        screen: ListAddress,
      },

      AddDressScreen: {
        screen: AddDressScreen,
      },

      WaletScreen: {
        screen: WaletScreen,
      },

      AddMoneyScreen: {
        screen: AddMoneyScreen,
      },

      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
          header: null,
        },
      },

      SettingScreen: {
        screen: SettingScreen,
      },

      AuctionScreen: {
        screen: AuctionScreen,
      },

      LastMinutesScreen: {
        screen: LastMinutesScreen,
      },

      ManagerAuctionScreen: {
        screen: ManagerAuctionScreen,
      },

      DetailOrderScreen: {
        screen: DetailOrderScreen,
      },

      FavourScreen: {
        screen: FavourScreen,
      },

      HistorySearchScreen: {
        screen: HistorySearchScreen,
      },

      ComplainScreen: {
        screen: ComplainScreen,
      },

      PersonalScreen: {
        screen: PersonalScreen,
      },

      ChangePasswordScreen: {
        screen: ChangePasswordScreen,
      },
    });
  };

  gotoScreen = (navigation, screen) => {
    navigation.navigate(screen);
  };

  gotoScreenWithParam = (itemId, navigation, screen) => {
    navigation.navigate(screen, {
      itemId: itemId,
    });
  };

  gotoScreenProduct = (cat, id, navigation, screen) => {
    navigation.navigate(screen, {
      cat: cat,
      id: id,
    });
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  saveDataUser = async (responseData) => {
    try {
      await AsyncStorage.setItem("dataPersonal", JSON.stringify(responseData));
      this.setCart();
      //console.log(JSON.stringify(obj));
    } catch (error) {
      console.log(error);
    }
  };

  getDataUser = async () => {
    var data;

    try {
      await AsyncStorage.getItem("dataPersonal").then((response) => {
        data = response;
      });

      return data;
      //console.log(JSON.stringify(obj));
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getCart = async () => {
    var data;

    try {
      await AsyncStorage.getItem("cart").then((response) => {
        data = response;
      });

      return data;
      //console.log(JSON.stringify(obj));
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  setCart = async () => {
    let url = global.urlRoot + global.urlCart;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = (responseData) => {
      try {
        AsyncStorage.setItem("cart", JSON.stringify(responseData.data));
      } catch (error) {
        console.log(error);
      }
    };

    //component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  addCart = async (product, cat, component) => {
    this.addProductTocart(product.code, cat, 1, component);
  };

  addProductTocart = async (productId, Shop, quantity, component) => {
    let url = global.urlRoot + global.urlAddProductToCart;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    body.Shop = this.convertShopToID(Shop);
    body.Code = productId;
    body.Quantity = quantity;
    data = JSON.stringify(body);

    callback = async (responseData) => {
      await AsyncStorage.setItem("cart", JSON.stringify(responseData.data));

      component.setState({ order: true, countCart: responseData.data.length });
    };

    network.fetchPUT_HEADER(url, data, token, callback);
  };

  convertShopToID = (shop) => {
    switch (shop) {
      case "amazon":
        return "amz";
        break;

      case "rakuten":
        return "rkt";
        break;

      case "mercari":
        return "mcr";
        break;

      default:
        return "ys";
    }
  };

  convertIDToShop = (id) => {
    switch (id) {
      case "amz":
        return "amazon";
        break;

      case "rkt":
        return "rakuten";
        break;

      case "mcr":
        return "mcr";
        break;

      default:
        return "yahoo";
    }
  };

  convertShopToPopularItem = (shop) => {
    switch (shop) {
      case "amazon":
        return "AMZ";
        break;

      case "rakuten":
        return "RKT";
        break;

      case "mercari":
        return "MCR";
        break;

      default:
        return "YS";
    }
  };

  login = (userName, passWord, component) => {
    let url = global.urlRoot + global.urlLogin;

    let body = {};
    body.login = userName;
    body.password = passWord;
    body = JSON.stringify(body);

    callback = (responseData) => {
      if (responseData.data == null) {
        component.setState({ errorMessage: global.loginWrong });
        component.setState({ ActivityIndicator: false });
      } else {
        functions.saveDataUser(responseData);

        component.setState({ ActivityIndicator: false });
        functions.gotoScreen(component.props.navigation, "HomeScreen");
      }
    };

    if (userName == "") {
      component.setState({ colorBorderUserName: "red" });
      component.setState({ errorMessage: global.emailEmpty });
      return;
    } /*else if (!this.validateEmail(userName)) {
      component.setState({ colorBorderUserName: "red" });
      component.setState({ errorMessage: global.emailNotCorrect });
      return;
    }*/ else if (
      userName != ""
    ) {
      component.setState({ colorBorderUserName: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    if (passWord == "") {
      component.setState({ colorBorderPassWord: "red" });
      component.setState({ errorMessage: global.passWordEmpty });
      return;
    } else {
      component.setState({ colorBorderPassWord: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    component.setState({ ActivityIndicator: true });
    network.fetchPOST(url, body, callback);
  };

  updateUser = (data, component) => {
    let url = global.urlRoot + global.urlUpdateUser;
    let token = data.token;

    let body = {},
      body1;

    body.Name = data.name;
    body.Address = data.phone;
    body.Phone = data.address;
    body.DOB = "cvddzz";
    body = JSON.parse(JSON.stringify(body));

    callback = async (responseData) => {
      if (responseData.data == null) {
        component.setState({ messageError: global.updateUserNotOk });
        //component.setState({ messageSuccess: global.updateUserOk });
        component.setState({ ActivityIndicator: false });
      } else {
        component.setState({ messageSuccess: global.updateUserOk });
        component.setState({ ActivityIndicator: false });
      }
    };

    component.setState({ ActivityIndicator: true });
    network.fetchPATCH_HEADER(url, body, token, callback);
  };

  changePass = (oldPass, newPass, token, component) => {
    let url = global.urlRoot + global.urlChangePassword;

    let body = {};
    body.oPassword = oldPass;
    body.Password = newPass;
    body = JSON.stringify(body);

    callback = async (responseData) => {
      if (responseData.data == null) {
        component.setState({ messageError: global.updateUserNotOk });
        //component.setState({ messageSuccess: global.updateUserOk });
        component.setState({ ActivityIndicator: false });
      } else {
        component.setState({ messageSuccess: global.updateUserOk });
        component.setState({ ActivityIndicator: false });
      }
    };

    component.setState({ ActivityIndicator: true });
    network.fetchPATCH_HEADER(url, body, token, callback);
  };

  addAddess = async (name, phone, address, component) => {
    let url = global.urlRoot + global.urlAddAdress;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    body.Name = name;
    body.Address = phone;
    body.Phone = address;
    data = JSON.stringify(body);

    callback = async (responseData) => {
      if (responseData.data == null) {
        component.setState({ messageError: global.updateUserNotOk });
        //component.setState({ messageSuccess: global.updateUserOk });
        component.setState({ ActivityIndicator: false });
      } else {
        component.setState({ messageSuccess: global.updateUserOk });
        component.setState({ ActivityIndicator: false });
      }
    };

    component.setState({ ActivityIndicator: true });
    network.fetchPUT_HEADER(url, data, token, callback);
  };

  getListAddress = async (component) => {
    let url = global.urlRoot + global.urlAddAdress;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({ listAddress: responseData });
      component.setState({ ActivityIndicator: false });
    };

    //component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListPopularProduct = async (component, shop) => {
    let url = global.urlRoot + global.urlPopularProduct;
    url = url.replace(":shop", shop);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({
        dataProductSlider: responseData.data.items,
        shop: shop,
      });
      component.setState({ ActivityIndicator: false });
    };

    component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListService = async (component, service) => {
    let url = global.urlRoot + global.urlService;
    url = url.replace("{cat}", service);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      var data = responseData.data;
      var cat_id = data[0].catid;
      var cat_name = data[0].ten;

      functions.getListProductByTag(
        component,
        service,
        cat_id,
        cat_name,
        responseData.data
      );
    };

    component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListProductByTagClick = async (
    component,
    cat,
    cat_id,
    cat_name,
    listService
  ) => {
    if (cat == "yahoo_auction") cat = "yahoo";

    let url = global.urlRoot + global.urlProductByTag;
    url = url.replace("{cat}", cat);
    url = url.replace("{cat_id}", cat_id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({
        listProductByTag: responseData.data,
        service: cat_name,
        listService: listService,
      });
      component.setState({ ActivityIndicator: false });
    };

    component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListProductByTag = async (
    component,
    cat,
    cat_id,
    cat_name,
    listService
  ) => {
    if (cat == "yahoo_auction") cat = "yahoo";

    let url = global.urlRoot + global.urlProductByTag;
    url = url.replace("{cat}", cat);
    url = url.replace("{cat_id}", cat_id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      functions.getPopularItem(
        component,
        responseData,
        cat_name,
        listService,
        cat
      );
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getPopularItem = async (
    component,
    responseDataBefore,
    cat_name,
    listService,
    shop
  ) => {
    let url = global.urlRoot + global.urlPopularItem;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      var data = responseData.data;
      var listPopularItem = [];
      var count;
      var service = functions.convertShopToPopularItem(shop);

      for (count = 0; count < data.length; count++) {
        switch (service) {
          case "AMZ":
            listPopularItem.push(data[count].AMZ);
            break;

          case "RKT":
            listPopularItem.push(data[count].RKT);
            break;

          case "MCR":
            listPopularItem.push(data[count].MCR);
            break;

          default:
            listPopularItem.push(data[count].YA);
        }
      }

      functions.getPopularName(
        component,
        responseDataBefore,
        cat_name,
        listService,
        listPopularItem
      );
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getPopularName = async (
    component,
    responseDataBefore,
    cat_name,
    listService,
    listPopularItem
  ) => {
    let url = global.urlRoot + global.urlPopularName;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({
        listProductByTag: responseDataBefore.data,
        service: cat_name,
        listService: listService,
        listPopularItem: listPopularItem,
        listPopularName: responseData.data,
      });
      component.setState({ ActivityIndicator: false });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getProduct = async (component, cat, id) => {
    let url = global.urlRoot + global.urlProduct;
    url = url.replace("{cat}", cat);
    url = url.replace("{id}", id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({ product: responseData.data });
      component.setState({ ActivityIndicator: false });
    };

    component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  gotoCart = async (component) => {
    var cart = await this.getCart();
    cart = JSON.parse(cart);

    var countCart = cart.length;

    this.gotoScreenWithParam(
      countCart,
      component.props.navigation,
      "CartScreen"
    );
  };

  updateCart = async (component) => {
    var dataProductCart = component.state.dataProductSlider;
    var removeList = [];
    var updateList = [];
    var count;

    for (count = 0; count < dataProductCart.length; count++) {
      if (dataProductCart[count].check == false)
        removeList.push(dataProductCart[count]);
      else updateList.push(dataProductCart[count]);
    }

    let url = global.urlRoot + global.urlRemoveCart;
    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {
      Items: [],
    };

    for (count = 0; count < removeList.length; count++) {
      body.Items.push(removeList[count]._id);
    }

    body = JSON.stringify(body);

    callback = async (responseData) => {
      for (count = 0; count < updateList.length; count++)
        functions.updateQuantityCart(updateList[count]);

      functions.gotoScreenWithParam(
        JSON.stringify(dataProductCart),
        component.props.navigation,
        "PaymentScreen"
      );
    };

    network.fetchPATCH_HEADER(url, body, token, callback);
  };

  updateQuantityCart = async (product) => {
    let url = global.urlRoot + global.urlUpdateCart;
    url = url.replace(":id", product._id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    callback = async (responseData) => {
      return;
    };

    let body = {};
    body.Quantity = product.Quantity;

    var data = JSON.stringify(body);

    network.fetchPATCH_HEADER(url, data, token, callback);
  };

  prepareAddOrder = async (cart, component) => {
    var count;

    cart = JSON.parse(cart);

    component.setState({ ActivityIndicator: true });

    for (count = 0; count < cart.length; count++) {
      if (cart[count].check == undefined || cart[count].check)
        await this.addOrder(cart[count], component);
    }

    component.setState({ ActivityIndicator: false, visible: true });
  };

  addOrder = async (product, component) => {
    var shop = this.convertIDToShop(product.Shop);

    let url = global.urlRoot + global.urlAddOrder;
    url = url.replace("{shop}", shop);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    body.Product = product.Code;

    body.Address = {};
    body.Address.Name = component.state.listAddress.data[0].Name;
    body.Address.Address = component.state.listAddress.data[0].Address;
    body.Address.Phone = component.state.listAddress.data[0].Phone;

    body.Shipment = component.state.saveShip ? "air" : "sea";
    body.Description = product.Name;
    body.Payment = component.state.transfer ? "BankTransfer" : "Prepaid";
    body.Qty = product.Quantity;

    data = JSON.stringify(body);

    callback = async (responseData) => {
      console.log("OK");
    };

    //network.fetchPUT_HEADER(url, data, token, callback);
    network.fetchPOST_HEADER(url, data, token, callback);
  };

  getOrders = async (component) => {
    let url = global.urlRoot + global.urlgetOrder;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({ orderList: responseData.data.items });
      component.setState({ ActivityIndicator: false });
    };

    component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  logout = async (component) => {
    try {
      await AsyncStorage.setItem("dataPersonal", "");
    } catch (error) {
      console.log(error);
    }

    functions.gotoScreen(component.props.navigation, "LoginScreen");
  };
}

const functions = new Functions();
export default functions;
