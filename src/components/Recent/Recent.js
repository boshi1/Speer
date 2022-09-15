import * as React from 'react';
import {View,StyleSheet, Text} from 'react-native';

import {scaledSize} from '../../GeneralStyle/index.js'
import {Colors} from '../../utils/Colors.js';
import RecentRender from './RecentRender'
import RecentHeader from './RecentHeader.js';
import { FontsNames } from '../../utils/Fonts.js';

export default Recent=(props)=>{
    return(
        <View style={styles.container}>
    <RecentHeader Clean={()=>props.Clean()} {...props}/>
{props.Profiles.length > 0  ? props.Profiles.reverse().slice(0, 10).map((data,key)=>{
    return <RecentRender navigation={props.navigation} key={key} data={data} />
}):(<Text style={styles.Text} >You Have no recent Searches</Text>)} 
</View>

    )
    
      
}
const styles = StyleSheet.create({
    container:{width:'100%',padding:scaledSize(20)},
    Text:{color:Colors.white,marginTop:10,fontFamily:FontsNames.Light},

  });