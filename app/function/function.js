import { createStackNavigator } from 'react-navigation-stack';

import Home from '../../app/screen/ForgotPassWordScreen';
import ShowNear from '../../app/navigation/Home';

class Functions {
    initNavigarion = () => {
        return createStackNavigator(
            {
            Home: {
              screen: Home,
              navigationOptions: {
                header: null,
            },
            },
            ShowNear: {
              screen: ShowNear,
            },
            
          }
          );
    }
}

const functions = new Functions();
export default functions;
