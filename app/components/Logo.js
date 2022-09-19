import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo({ ...props }) {
  if (props.type == "login")
    return <Image source={require("../assets/login_1.png")} />;
  else if (props.type == "google")
    return <Image source={require("../assets/Google_Original.png")} />;
  else if (props.type == "facebook")
    return <Image source={require("../assets/Facebook_Original.png")} />;
  else if (props.type == "forgot")
    return <Image source={require("../assets/login_3.png")} />;
  else return <Image source={require("../assets/login_2.png")} />;
}
