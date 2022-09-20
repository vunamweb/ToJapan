import React from "react";

import {
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import styles from "../../app/style/style";

export default function Background({ children, ...props }) {
  const style =
    props.center == "true"
      ? styles.container_root_full_center
      : styles.container_root_align_center;

  return (
    <ImageBackground resizeMode="repeat" style={styles.background_1}>
      <KeyboardAvoidingView style={style} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
