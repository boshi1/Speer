import * as React from 'react';
import {View,StyleSheet, Image,TextInput, TouchableOpacity, Text} from 'react-native';

import {scaledSize} from '../GeneralStyle/index.js'
import {Colors} from '../utils/Colors.js';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontsNames } from '../utils/Fonts.js';
export default function SearchBar({navigation}){

    const [number,onChangeNumber]=React.useState('')
    return(
    <View style={styles.container}>
<Image source={require('../../assets/25231.png')} style={styles.logo}/>
<View style={styles.InputHolder}>
<TextInput
        style={styles.TextInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Search for user"
        underlineColorAndroid='transparent'
   placeholderTextColor={Colors.LightPink}
      
      />
<TouchableOpacity style={styles.button} onPress={async ()=>{
   navigation.push('Profile',{ID:number})
}} >
    <Text style={styles.Text}>Search</Text>
</TouchableOpacity>
</View>
</View>
    )
}
const styles = StyleSheet.create({
    container: {flex:1,zIndex:1,alignItems:'center',width:'100%',padding:scaledSize(20),justifyContent:'center'},
    logo:{width:scaledSize(75),resizeMode:"contain",height:scaledSize(75)},
TextInput:{backgroundColor:'transparent',letterSpacing:1,paddingLeft:scaledSize(8),paddingTop:0,paddingBottom:0,lineHeight:scaledSize(15),fontSize:scaledSize(13),color:Colors.Darkwhite,width:'80%',height:scaledSize(40)},
 InputHolder:{marginTop:scaledSize(20),borderRadius:1,overflow:'hidden',height:scaledSize(40),borderWidth:1,borderColor:Colors.lightgray,width:'100%',flexDirection:'row',},
  Image:{width:scaledSize(40),borderRadius:scaledSize(20),resizeMode:"contain",height:scaledSize(40)},
  button:{padding:scaledSize(10),width:'20%',height:scaledSize(40),justifyContent:'center',alignItems:'center',backgroundColor:Colors.lightgray},
  Text:{color:Colors.Darkwhite,fontSize:scaledSize(13),lineHeight:scaledSize(15),fontFamily:FontsNames.Light},
  
  });