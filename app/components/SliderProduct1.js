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
    let col = this.props.col != null ? this.props.col : "2";

    if (this.props.style == null)
      return (
        <View style={{ flex: 1 }}>
          {/* Header */}
          <ListView
            data={this.props.dataCarouselSlider}
            renderItem={this.props.renderCarouselSlider}
            col={1}
            horizontal={true}
            scrollEnabled={this.props.scrollEnabled}
          />
          {/* END */}
          {/* List Product */}
          {!this.props.parentHasScrol ? (
            <ListView
              data={this.props.dataProductSlider}
              renderItem={this.props.renderProductSlider}
              col={col}
              scrollEnabled={this.props.scrollEnabled}
            />
          ) : (
            this.props.dataProductSlider.map((item, index) => {
              return this.props.renderProductSlider(item, index);
            })
          )}
          {/* END */}
        </View>
      );
    else
      return (
        <View style={{ flex: 1 }}>
          {/* Header */}
          <Carousel
            data={this.props.dataCarouselSlider}
            renderItem={this.props.renderCarouselSlider}
            sliderWidth={350}
            top={0}
            activeSlideAlignment="start"
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
