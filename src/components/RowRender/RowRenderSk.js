import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {scaledSize} from '../../GeneralStyle/index.js';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../utils/Colors.js';
const windowWidth = Dimensions.get('window').width;

const RowRenderSke = () => {
  return (
    <SkeletonPlaceholder highlightColor={Colors.lightgray} speed={1000}>
      <View style={styles.Container}>
        <View style={styles.Image} />

        <View style={styles.TextContaienr} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default RowRenderSke;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: scaledSize(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    width: scaledSize(40),
    borderRadius: scaledSize(20),
    resizeMode: 'contain',
    height: scaledSize(40),
  },
  TextContaienr: {
    width: windowWidth / 2,
    marginLeft: 20,
    height: 20,
    borderRadius: 5,
  },
});
