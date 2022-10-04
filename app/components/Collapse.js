import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "../components/Carousel";
import ListView from "../components/ListView";

import styles from "../style/style";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    let col = (this.props.col != null) ? this.props.col : '2';

    return (
        <View style={{marginTop: 20}}>
        <Text style={[styles.paymentText6, styles.fontBold, styles.marginBottom10]}>{this.props.title}</Text>
      {/* List Product */}
      <View style={[styles.bgWhite, {backgroundColor: 'white'},
        styles.borderNormal]}>
      <ListView
         data={this.props.data}
         renderItem={this.props.renderItem}
         col={this.props.col}
      />
      {/* END */}
      </View>
      </View>
    );
  }
}
