
import * as React from 'react';
import {View,  Text,StyleSheet } from 'react-native';

import {Colors} from '../../utils/Colors.js';
import {FontsNames} from '../../utils/Fonts.js';;
import RecentClear from './RecentClear.js';
 const RecentHeader=({Clean,Profiles})=>{
    return (<View style={styles.container}>
<Text style={styles.Text}>Recent</Text>
   {Profiles.length > 0 ? <RecentClear Clean={()=>Clean()} />:null}

</View> )}
export default RecentHeader

const styles = StyleSheet.create({
    container: {flexDirection:'row',width:"100%",alignItems:'center',width:"100%",justifyContent:'space-between'},
    Text:{fontFamily:FontsNames.SemiBold,letterSpacing:0.5,color:Colors.Darkwhite}
  });
  