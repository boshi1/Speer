import * as React from 'react';
import {View, Image,Animated,TextInput, TouchableOpacity, Text, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Dimensions} from 'react-native';
import { RecyclerListView } from "recyclerlistview";
import Header from '../helper/Header.js'
import {Colors} from '../utils/Colors.js';
import Recent from '../components/Recent/Recent.js';
import {Clean} from '../action/Actions'
import SearchBar from '../components/SearchBar.js';
function HomeScreen(props) {

    return (
        <ScrollView style={{flex: 1,backgroundColor:Colors.BackgroundColor}}>




<SearchBar navigation={props.navigation}/>
<Recent {...props}/>

        </ScrollView>
    );
}





function mapStateToProps(state) {
    let {Profiles} =state.AppReducers
      return {Profiles};
  }
  

const mapDispatchToProps = {Clean}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);