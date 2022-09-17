import {Component} from 'react';

import { createAppContainer } from 'react-navigation';

import Function from './app/function/function';

const AppNavigator = Function.initNavigarion();

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
       <AppContainer/>
    )
  }
}
