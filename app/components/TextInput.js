import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { theme } from '../core/theme'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TextInputzzzz({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
        left={<TextInput.Icon icon={props.leftIcon} />}
        right={<TextInput.Icon icon={props.rightIcon} />}
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
    marginTop: 3,
    marginBottom: 20,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 60,
    //overflow: 'hidden'
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
