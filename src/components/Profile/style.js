
import {Styles,scaledSize} from '../../GeneralStyle/index.js'
import { FontsNames } from '../../utils/Fonts.js';
import { Dimensions,StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {Colors} from '../../utils/Colors.js';


export default StyleSheet.create({
    Container:{flex:1,padding:scaledSize(20)},
    TopPart:{width:windowWidth,flexDirection:'row'},
    ImageContainer:{justifyContent:'center',alignContent:'center',width:windowWidth*0.3},
    Avatar:{width:scaledSize(100),borderRadius:scaledSize(50),resizeMode:"contain",height:scaledSize(100)},
    InfoContainer:{justifyContent:'flex-end',alignContent:'center',width:windowWidth*0.7},
    UserName:{color:Colors.Darkwhite,fontFamily:FontsNames.Regular},
    Login:{color:Colors.white,fontSize:scaledSize(12),fontFamily:FontsNames.Light,letterSpacing:0.7},
    BioContainer:{marginTop:20},
    BioTitle:{color:Colors.Darkwhite,letterSpacing:scaledSize(0.7),fontFamily:FontsNames.Regular},
    Bio:{color:Colors.white,marginTop:scaledSize(10),fontFamily:FontsNames.Light,letterSpacing:0.8},
    Button:{ padding: scaledSize(5), borderRadius: 2, borderWidth: 1, borderColor: Colors.lightgray },
    TextColor:{ color: Colors.Darkwhite, fontSize: scaledSize(14), fontFamily:FontsNames.Light },
    Count:{color:Colors.white},
    ButtonContainer:{ flexDirection: 'row', marginTop: scaledSize(10), width: '100%' }
});