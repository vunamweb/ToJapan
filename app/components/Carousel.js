import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    return (
      <Carousel
        ref={(ref) => (this.carousel = ref)}
        {...this.props}
        onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    );
  }
}
