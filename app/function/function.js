import { createStackNavigator } from "react-navigation-stack";

import Home from "../../app/screen/Splash1";
import Splash2 from "../../app/screen/Splash2";
import RegisterScreen from "../../app/screen/RegisterScreen";
import LoginScreen from "../../app/screen/LoginScreen";
import ConfirmScreen from "../../app/screen/ConfirmScreen";
import ForgotPassWordScreen from "../../app/screen/ForgotPassWordScreen";

class Functions {
  initNavigarion = () => {
    return createStackNavigator({
      Home: {
        screen: Home,
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
    });
  };
}

const functions = new Functions();
export default functions;
