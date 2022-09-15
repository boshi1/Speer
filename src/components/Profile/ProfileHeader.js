
import *  as React from 'react';
import {View, Image,Animated, Text, FlatList, ActivityIndicator,navigation} from 'react-native';

import ProfileSk from './ProfileSk'
import {Dimensions} from 'react-native';
import  Styles  from './style';
import { TopProfileIcon } from './TopProfileIcon';
import style from './style';
const {width:WindowWidht,height:WindowHeight}=Dimensions.get('window')

export default function TopProfile(props){
let {name,login,bio,Loading,followers=null,following=null,avatar_url} = props
if(Loading){
    return <ProfileSk/>
}

return(
    <View style={Styles.Container}>
<View style={Styles.TopPart}>
<View style={Styles.ImageContainer}>
<Image source={{uri:avatar_url}} style={Styles.Avatar}/>

</View>
<View style={Styles.InfoContainer}>
<Text style={Styles.UserName}>{name}</Text>

<Text style={Styles.Login}>@{login}</Text>
{following !== null ? (<TopProfileIcon {...props}/>):null}
</View>
</View>

<View style={Styles.BioContainer}>
<Text style={Styles.BioTitle}>Bio:</Text>
<Text style={Styles.Bio}>{bio}</Text>
</View>

</View>)
}