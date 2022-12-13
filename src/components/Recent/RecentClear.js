import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {scaledSize} from '../../GeneralStyle/index.js';
import {Colors} from '../../utils/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontsNames} from '../../utils/Fonts.js';
const RecentClear = ({Clean}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={async () => {
        Clean();
      }}>
      <Text style={styles.Text}>Clean</Text>
      <Ionicons name="close" size={12} color="#7f8793" />
    </TouchableOpacity>
  );
};
export default RecentClear;

const styles = StyleSheet.create({
  container: {
    padding: scaledSize(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
    borderRadius: 5,
  },
  Text: {
    fontSize: scaledSize(12),
    fontFamily: FontsNames.Light,
    color: Colors.Darkwhite,
  },
});
