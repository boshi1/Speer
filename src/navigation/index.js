import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage.js';
import Home from '../screens/Home.js';
import {connect} from 'react-redux';

import {Colors} from '../utils/Colors.js';
import ErrorMessage from '../helper/Error.js';
import Profile from '../screens/profile.js';
import {Dissmis_Error} from '../action/Actions';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.BackgroundColor,
  },
};
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
function App(props) {
  return (
    <SafeAreaProvider
      style={{flex: 1, backgroundColor: Colors.BackgroundColor}}>
      <SafeAreaView style={{flex: 1, position: 'relative'}}>
        <ErrorMessage {...props} />
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="HomePage" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function mapStateToProps(state) {
  let {Loading, error, errorMessage} = state.AppReducers;
  return {Loading: Loading, error: error, errorMessage: errorMessage};
}

const mapDispatchToProps = {Dissmis_Error};

export default connect(mapStateToProps, mapDispatchToProps)(App);
