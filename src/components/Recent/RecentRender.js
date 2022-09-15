
import *  as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {scaledSize} from '../../GeneralStyle/index.js'
import {Colors} from '../../utils/Colors.js';
import {FontsNames} from '../../utils/Fonts.js';


   const RecentRender = ({navigation, data}) => {
   
let {login,avatar_url} = data
  return (<TouchableOpacity onPress={()=>{navigation.push('Profile',{ID:login})}} style={styles.container}>

<Text style={styles.Title}>@{login}</Text>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  container: {
padding: scaledSize(4),height: scaledSize(35),marginTop:10,borderBottomWidth: scaledSize(1),borderStyle:'solid',borderBottomColor: '#25282b',justifyContent: 'center',width: '100%'
  },
  Title:{
    color:Colors.Darkwhite, fontFamily:FontsNames.Light,fontSize:scaledSize(14),letterSpacing:0.5
  },
});

export default RecentRender
