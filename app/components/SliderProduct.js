import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "../components/Carousel";
import ListView from "../components/ListView";

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
        <View>
        {/* Header */}
        <Carousel
        data={this.props.dataCarouselSlider}
        renderItem={this.props.renderCarouselSlider}
        sliderWidth={350}
        top={0}
        itemWidth={140}
      />
      {/* END */}
      {/* List Product */}
      <ListView
         data={this.props.dataProductSlider}
         renderItem={this.props.renderProductSlider}
         col={col}
      />
      {/* END */}
      </View>
    );
  }
}
