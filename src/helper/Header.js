
import *  as React from 'react';
import { View, TouchableOpacity,Text} from 'react-native';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {Colors} from '../utils/Colors.js';
import HeaderStyle from './style/HeaderStyle.js'
import Entypo from 'react-native-vector-icons/Entypo';
export default function Header({HeaderText,navigation,Back}){


return(
  <View style={HeaderStyle.HeaderContainer}>
{ Back === true ? (<TouchableOpacity  style={HeaderStyle.CloseButton} onPress={()=>{navigation.goBack()}} >
  <Entypo name="chevron-thin-left" size={20} color={Colors.Darkwhite} />
  </TouchableOpacity>):null}
  <View style={HeaderStyle.TextContainer}><Text   style={HeaderStyle.H5Title}>{HeaderText}</Text></View>
  </View>
)

}
