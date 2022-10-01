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
import CartScreen from "../screen/CartScreen";
import PaymentScreen from "../screen/PaymentScreen";
import ManagerOrder from "../screen/ManagerOrder";
import ListAddress from "../screen/ListAddressScreen";

class Functions {
  initNavigarion = () => {
    return createStackNavigator({
      PaymentScreen: {
        screen: PaymentScreen,
      },

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

      CartScreen: {
        screen: CartScreen,
      },

      /*PaymentScreen: {
        screen: PaymentScreen,
      },*/

      ManagerOrder: {
        screen: ManagerOrder,
      },

      ListAddress: {
        screen: ListAddress,
      }
    });
  };

  gotoScreen = (navigation, screen) => {
    navigation.navigate(screen);
  }
}

const functions = new Functions();
export default functions;
