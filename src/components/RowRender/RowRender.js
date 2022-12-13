import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {scaledSize} from '../../GeneralStyle/index.js';
import {Colors} from '../../utils/Colors.js';
import {FontsNames} from '../../utils/Fonts.js';
import RowRenderSke from './RowRenderSk.js';
const windowWidth = Dimensions.get('window').width;

const RowRenderer = ({navigation, data}) => {
  let {login, avatar_url} = data;
  if (login === undefined) {
    return <RowRenderSke />;
  }
  //Renders a UIVIEW with gesture handling
  //navigaton is a prop from parent
  //Width and height MUST BE Defined and can't Be used as percentage before rendering -> since it is a reuseable component
  //Timesince Function is very basic
  //replace based on regex to caputre domain
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Profile', {ID: login});
      }}
      style={styles.container}>
      <View style={styles.ImageContaienr}>
        <Image source={{uri: avatar_url}} style={styles.Image} />
      </View>
      <View style={styles.TextContaienr}>
        <Text style={styles.Text}>@{login}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scaledSize(4),
    width: windowWidth,
    flexDirection: 'row',
    height: scaledSize(65),
    marginTop: scaledSize(10),
    borderBottomWidth: scaledSize(1),
    borderStyle: 'solid',
    borderBottomColor: Colors.lightgray,
    justifyContent: 'center',
  },
  ImageContaienr: {
    justifyContent: 'center',
    alignContent: 'center',
    width: scaledSize(50),
  },
  Image: {
    width: scaledSize(40),
    borderRadius: scaledSize(20),
    resizeMode: 'contain',
    height: scaledSize(40),
  },
  TextContaienr: {
    width: windowWidth - scaledSize(90),
    paddingLeft: 5,
    paddingTop: 4,
    justifyContent: 'center',
  },
  Text: {
    color: Colors.Darkwhite,
    fontFamily: FontsNames.Regular,
    letterSpacing: 0.7,
  },
});

export default RowRenderer;
