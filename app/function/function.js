import { createStackNavigator } from "react-navigation-stack";

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
      /*PaymentScreen: {
        screen: PaymentScreen,
      },*/

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

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  saveDataUser = async (responseData) => {
    await AsyncStorage.setItem('dataPersonal', JSON.stringify(responseData));
  }

  login = (userName, passWord, component) => {
    let url = global.urlRoot + global.urlLogin;

    let body = {};
    body.login = userName;
    body.password = passWord;
    body = JSON.stringify(body);

    var callback = function(responseData) {
      if (responseData.data == null) {
        component.setState({ errorMessage: global.loginWrong });
        component.setState({ ActivityIndicator: false });
      } else {
        functions.saveDataUser(responseData);
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
    }*/ else if (userName != "") {
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
}

const functions = new Functions();
export default functions;
