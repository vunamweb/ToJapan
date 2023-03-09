import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { theme } from '../core/theme'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

import styleRoot from "../style/style";

export default function TextInputzzzz({ errorText, description, ...props }) {
  //let style = (props.bg != null) ? [styles.input] : [styles.input];

  let style1 = (props.notflex == null) ? [styles.container1] : [styles.container];
  style1 = (props.notflex == "1") ? [styles.container] : [styles.container1];

  let left = (props.fontAwesome == "true") ? <TextInput.Icon
  name={() => (
    <IconFontAwesome
      name={props.leftIcon}
      size={24}
      color={props.colorIcon}
    />
  )}
  />
  : 
  <TextInput.Icon name={props.leftIcon} />;

  let right = <TextInput.Icon  
  color={props.colorIcon} 
  name={props.rightIcon} 
  onPress={() => {
    props.component. onClickEye();
    return false;
  }}
  />;

  return (
    <View style={[style1, styleRoot.borderNormal, {borderWidth: 1, borderColor: 'white', overflow: 'hidden', height: 65}, props.styleParent]}>
      <TextInput
        style={{
          backgroundColor: 'none',
          overflow: 'hidden',
          height: 67
        }}
        theme={{
                colors: {
                           placeholder: '#777E90', text: '#3187EA', primary: '#777E90',
                           underlineColor: 'transparent', background: '#003489'
                   }
             }}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="flat"
        {...props}
        left={left}
        right={right}
        />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 3,
    marginBottom: 30,
  },
  container1: {
    width: '100%',
    marginTop: 3,
    marginBottom: 30,
  },
  input: {
    borderRadius: 20,
    borderColor: 'white',
    //overflow: 'hidden'
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 0,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
