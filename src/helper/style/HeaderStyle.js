
import {scaledSize} from '../../GeneralStyle/index.js'

import { Dimensions,StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;

import {Colors} from '../../utils/Colors.js';


export default StyleSheet.create({
  HeaderContainer:{flexDirection: 'row',backgroundColor:Colors.Orange,height:60,borderBottomWidth:1,borderStyle:'solid',borderBottomColor:'#25282b',width:windowWidth,justifyContent: 'center',alignItems: 'center'},
  CloseButton:{height: scaledSize(60),width: scaledSize(60),left:scaledSize(6),justifyContent:'center',zIndex: 2,position: 'absolute'},
  TextContainer:{width: '80%',alignItems:'center',justifyContent: 'center',paddingTop: scaledSize(5)},
  H5Title:{color:'#7f8793',fontFamily:'Poppins-Light' }
});