import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
//import { Checkbox } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

function CheckBox_({ label, status, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox status={status} />
        <Text style={{ fontWeight: 'bold', marginLeft: 8 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CheckBox_;