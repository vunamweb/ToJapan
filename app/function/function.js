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

class Functions {
  initNavigarion = () => {
    return createStackNavigator({
      KeywordPopularScreen: {
        screen: KeywordPopularScreen,
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

      /*KeywordPopularScreen: {
        screen: KeywordPopularScreen,
      },*/
    });
  };

  gotoScreen = (navigation, screen) => {
    navigation.navigate(screen);
  }
}

const functions = new Functions();
export default functions;
