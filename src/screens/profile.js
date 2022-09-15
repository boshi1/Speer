import * as React from 'react';
import {View, Image,Animated,TextInput, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Dimensions} from 'react-native';
const {width:WindowWidht,height:WindowHeight}=Dimensions.get('window')
import { RecyclerListView } from "recyclerlistview";
import Header from '../helper/Header.js'
import {Colors} from '../utils/Colors.js';
import {GetProfile,Clean} from '../action/Actions'
import TopProfile from '../components/Profile/ProfileHeader'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {useProfleData} from '../Hooks/GetProfile'
import Error from '../helper/Error'
function HomeScreen(props) {
  const [User,Loading,ErrorMessage]=useProfleData(props)
    return (
        <View style={{flex: 1,backgroundColor:"#161B22"}}>
<Header Back={true} navigation={props.navigation} HeaderText={ErrorMessage === '' ? User.login:'error'} />


     {ErrorMessage === '' ? (<TopProfile Loading={Loading} {...User} navigation={props.navigation}/>):<Error error ={ErrorMessage}/>}
    


</View>
    );
}


function mapStateToProps(state) {
    let {Profiles} =state.AppReducers
      return {Profiles};
  }
  

const mapDispatchToProps = {GetProfile,Clean}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
