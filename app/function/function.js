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
    if(cat == 'yahoo_auction')
      screen  = 'ProductDaugiaScreen';

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

  getListFavorite = async (component) => {
    var data;

    try {
      await AsyncStorage.getItem("listFavorite").then((response) => {
        data = response;
        component.setState({ ListFavorite: response });
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

  register = (name, passWord, confirmPassword, phone, email, ID, component) => {
    let url = global.urlRoot + global.urlRegistration;

    let body = {};
    body.Username = ID;
    body.Password = passWord;
    body.Email = email;
    body.Name = name;
    body.Phone = phone;
    body = JSON.stringify(body);

    var callback = (responseData) => {
      component.setState({ ActivityIndicator: false });
      functions.gotoScreen(component.props.navigation, "ConfirmScreen");
    };

    if (email == "") {
      component.setState({ colorBorderEmail: "red" });
      component.setState({ errorMessage: global.emailEmpty });

      component.gotoTop();
      return;
    } else if (!this.validateEmail(email)) {
      component.setState({ colorBorderEmail: "red" });
      component.setState({ errorMessage: global.emailNotCorrect });

      component.gotoTop();
      return;
    } else {
      component.setState({ colorBorderEmail: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    if (name == "") {
      component.setState({ colorBorderName: "red" });
      component.setState({ errorMessage: global.nameEmpty });

      component.gotoTop();
      return;
    } else {
      component.setState({ colorBorderName: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    if (phone == "") {
      component.setState({ colorBorderPhone: "red" });
      component.setState({ errorMessage: global.phoneEmpty });

      component.gotoTop();
      return;
    } else {
      component.setState({ colorBorderPhone: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    if (ID == "") {
      component.setState({ colorBorderID: "red" });
      component.setState({ errorMessage: global.idEmpty });
      return;
    } else {
      component.setState({ colorBorderid: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    if (passWord == "") {
      component.setState({ colorBorderPassWord: "red" });
      component.setState({ errorMessage: global.passWordEmpty });

      component.gotoTop();
      return;
    } else {
      component.setState({ colorBorderPassWord: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    if (confirmPassword == "") {
      component.setState({ colorBorderConfirmPassWord: "red" });
      component.setState({ errorMessage: global.confirmPassword });

      component.gotoTop();
      return;
    } else if(confirmPassword != passWord) {
      component.setState({ colorBorderConfirmPassWord: "red" });
      component.setState({ errorMessage: global.wrongPassword });

      component.gotoTop();
      return;
    }
    else
     {
      component.setState({ colorBorderConfirmPassWord: "#E6E8EC" });
      component.setState({ errorMessage: "" });
    }

    component.setState({ ActivityIndicator: true });
    component.gotoTop();

    network.fetchPOST(url, body, callback);
  };

  activeAuction = async (component) => {
    let url = global.urlRoot + global.urlAuction;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    body.active = true;
    body = JSON.stringify(body);

    callback = (responseData) => {
      component.setState({ activeAuction: true, ActivityIndicator: false });
    };

    component.setState({ ActivityIndicator: true });
    network.fetchPOST_HEADER(url, body, token, callback);
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
      component.setState({ ActivityIndicator3: false });
    };

    component.setState({ ActivityIndicator3: true });
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

    //component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListProductByTagClick = async (
    component,
    cat,
    cat_id,
    cat_name,
    listService
  ) => {
    //if (cat == "yahoo_auction") cat = "yahoo";

    let url =
      cat != "yahoo_auction"
        ? global.urlRoot + global.urlProductByTag
        : global.urlRoot + global.urlProductByTagAuction;

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
      component.setState({ ActivityIndicator4: false });
    };

    component.setState({ ActivityIndicator4: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListProductByTag = async (
    component,
    cat,
    cat_id,
    cat_name,
    listService
  ) => {
    //if (cat == "yahoo_auction") cat = "yahoo";

    let url =
      cat != "yahoo_auction"
        ? global.urlRoot + global.urlProductByTag
        : global.urlRoot + global.urlProductByTagAuction;
    url = url.replace("{cat}", cat);
    url = url.replace("{cat_id}", cat_id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      /*functions.getPopularItem(
        component,
        responseData,
        cat_name,
        listService,
        cat
      );*/
      component.setState({
        listProductByTag: responseData.data,
        listService: listService,
        service: cat_name,
        //ActivityIndicator3: false,
        ActivityIndicator4: false,
      });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListProductByTagFilter = async (
    component,
    cat,
    cat_id,
    filter,
    price
  ) => {
    //if (cat == "yahoo_auction") cat = "yahoo";

    let url =
      cat != "yahoo_auction"
        ? global.urlRoot + global.urlProductByTag
        : global.urlRoot + global.urlProductByTagAuction;
    url = url.replace("{cat}", cat);
    url = url.replace("{cat_id}", cat_id);
    url = url + '&condition='+filter+'';
    if(price > 0)
      url = url + '&max='+Math.round(price)+'';
    
    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({
        listProductByTag: responseData.data,
        //ActivityIndicator3: false,
        ActivityIndicator: false,
      });
    };

    component.setState({ ActivityIndicator: true, visibleFilter: false });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getPopularItem = async (component, shop) => {
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

      /*functions.getPopularName(
        component,
        responseDataBefore,
        cat_name,
        listService,
        listPopularItem
      );*/
      component.setState({
        listPopularItem: listPopularItem,
        ActivityIndicator1: false,
      });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getPopularName = async (component) => {
    let url = global.urlRoot + global.urlPopularName;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({
        listPopularName: responseData.data,
        ActivityIndicator2: false,
      });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getProduct = async (component, cat, id) => {
    var productSimilar1 = [];
    var productSimilar2 = [];

    let url =
      cat != "yahoo_auction"
        ? global.urlRoot + global.urlProduct
        : global.urlRoot + global.urlProductAuction;
    url = url.replace("{cat}", cat);
    url = url.replace("{id}", id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    var count;

    let body = {};

    callback = async (responseData) => {
      if (responseData.data.recommend != undefined) {
        var similarProduct = responseData.data.recommend;

        for (
          count = 0;
          count < Math.round(similarProduct.length / 2);
          count++
        ) {
          productSimilar1.push(similarProduct[count]);
        }

        for (
          count = Math.round(similarProduct.length / 2);
          count < similarProduct.length;
          count++
        ) {
          productSimilar2.push(similarProduct[count]);
        }
      }

      component.setState({
        product: responseData.data,
        productSimilar1: productSimilar1,
        productSimilar2: productSimilar2,
      });
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

  addBid = async (product, component) => {
    let url = global.urlRoot + global.addBid;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    body.Product = product.productID;
    body.Price = component.state.money;

    body.Address = {};
    body.Address.Name = component.state.listAddress.data[0].Name;
    body.Address.Address = component.state.listAddress.data[0].Address;
    body.Address.Phone = component.state.listAddress.data[0].Phone;

    body.Url = product.url;
    body.Shipment = component.state.saveShip ? "air" : "sea";
    body.Description = "";

    data = JSON.stringify(body);

    callback = (responseData) => {
      if(!responseData.success) 
      component.setState({ type: 2, visibleAlert: true, ActivityIndicator1: false });
       else 
       component.setState({ type: 3, visibleAlert: true, ActivityIndicator1: false }); 
    };

    component.setState({ ActivityIndicator1: true });
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

  getAuction = async (component) => {
    let url = global.urlRoot + global.urlAutionOrder;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({ orderList: responseData.data });
      component.setState({ ActivityIndicator: false });
    };

    component.setState({ ActivityIndicator: true });
    network.fetchGET_HEADER(url, body, token, callback);
  };

  getBanners = async (component) => {
    let url = global.urlRoot + global.urlBanners;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      var listBanner = [];
      var count;

      for (count = 0; count < responseData.data.length; count++) {
        var banner = {};

        //banner.img = "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg";
        banner.img = global.urlData + responseData.data[count];
        listBanner.push(banner);
      }

      component.setState({
        ActivityIndicator1: false,
        ActivityIndicator5: false,
        dataBanner: listBanner,
      });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getPoplularBranch = async (component) => {
    let url = global.urlRoot + global.urlPopularBranch;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      var listPopularBranch = [];
      var count;

      for (count = 0; count < responseData.data.length; count++) {
        listPopularBranch.push(responseData.data[count]);
      }

      component.setState({
        ActivityIndicator2: false,
        dataPopularBranch: listPopularBranch,
      });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getUserDetail = async (component) => {
    let url = global.urlRoot + global.urlUserDetail;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      var count;

      component.setState({ userDetail: responseData.data });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getListBank = async (component) => {
    let url = global.urlRoot + global.urlGetListBank;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({ listBank: responseData, ActivityIndicator: false });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  getHistorySearch = async (component) => {
    let url = global.urlRoot + global.historySearch;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      component.setState({ listSearchHistory: responseData.data, ActivityIndicator: false });
    };

    network.fetchGET_HEADER(url, body, token, callback);
  };

  depositBank = async (component) => {
    var money = component.state.money;

    let url = global.urlRoot + global.urlDepositBank;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    body.Amount = money;

    data = JSON.stringify(body);

    callback = async (responseData) => {
      component.setState({ visible: true });
    };

    //network.fetchPUT_HEADER(url, data, token, callback);
    network.fetchPOST_HEADER(url, data, token, callback);
  };

  deleteBid = async (component, id) => {
    var orderList = [];
    var count;

    let url = global.urlRoot + global.deleteBid;
    url = url.replace(":id", id);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    data = JSON.stringify(body);

    callback = (responseData) => {
      if (responseData.success) {
        for (count = 0; count < component.state.orderList.length; count++) {
          if (component.state.orderList[count]._id != id)
            orderList.push(component.state.orderList[count]);
        }
        component.setState({
          orderList: orderList,
          ActivityIndicator: false,
          visible: false,
        });
      }
    };

    component.setState({ ActivityIndicator: true });
    network.fetchDELETE_HEADER(url, data, token, callback);
  };

  addFavorite = async (productId, shop, component) => {
    let url = global.urlRoot + global.addfavorite;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    body.Product = productId;
    body.Site = shop;
    data = JSON.stringify(body);

    callback = async (responseData) => {
      var listFavorite = component.state.ListFavorite;

      if(responseData.success) {
        var product = {}
        product.Product = productId;
        product._id = responseData.data;
  
        listFavorite.push(product);
      }

      component.setState({ ActivityIndicator3: false, ListFavorite: listFavorite });
    };

    component.setState({ ActivityIndicator3: true });
    network.fetchPUT_HEADER(url, data, token, callback);
  };

  deleteFavorite = async (component, product) => {
    var orderList = [];
    var count;

    let url = global.urlRoot + global.removefavorite;
    url = url.replace(":id", product);

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};
    let data;

    data = JSON.stringify(body);

    callback = (responseData) => {
      var listFavorite = component.state.ListFavorite;

      if (responseData.success) {
        for (count = 0; count < listFavorite.length; count++) {
          if (listFavorite[count]._id == product)
          listFavorite.splice(count, 1);
        }
        
        component.setState({ ActivityIndicator3: false, ListFavorite: listFavorite });
      }
    };

    component.setState({ ActivityIndicator3: true });
    network.fetchDELETE_HEADER(url, data, token, callback);
  };

  getListFavorite = async (component) => {
    let url = global.urlRoot + global.urlListFavorite;

    var datauser = await this.getDataUser();
    datauser = JSON.parse(datauser);
    var token = datauser.token;

    let body = {};

    callback = async (responseData) => {
      try {
        await AsyncStorage.setItem("listFavorite", JSON.stringify(responseData.data));
      } catch (error) {
        console.log(error);
      }

      component.setState({ ListFavorite: responseData.data, ActivityIndicator3: false });
    };

    component.setState({ ActivityIndicator3: true });
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

  convertMoney = (number) => {
    //return number;
    var number=  number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    number = number.replace('$', '');
    number = number.replace('.00', '');

    return number;
    
  }

  formatTitle = (title) => {
     /*var count;

     if(title.length < 15) {
        for(count = title.length; count < 15; count++)
          title = title + 'les';
     }*/

     return title.substr(0, 15);
  }
}

const functions = new Functions();
export default functions;
