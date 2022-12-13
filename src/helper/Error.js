import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {scaledSize} from '../GeneralStyle/index.js';
import {FontsNames} from '../utils/Fonts.js';

import {Colors} from '../utils/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Error(props) {
  if (!props.error) {
    return null;
  }
  return (
    <View style={Styles.Container}>
      <Ionicons
        name="information-circle"
        size={scaledSize(20)}
        color={Colors.Darkwhite}
      />
      <Text style={Styles.Text}>{props.error}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  Text: {
    color: Colors.white,
    marginLeft: scaledSize(10),
    fontFamily: FontsNames.Regular,
  },
});
