
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LoginScreen from './src/login';
import VerificationScreen from './src/verification';
import PickupPointScreen from './src/pickup-points';
import SuccessScreen from './src/success';
import MapScreen from './src/map';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const PublicStackNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
},
{
  headerMode: 'none',

});

const AuthStackNavigator = createStackNavigator({

  Success: {screen: SuccessScreen},
  Map: {screen: MapScreen},
  Verification :{screen: VerificationScreen},
  PickupPoint: {screen: PickupPointScreen},
},
{
  headerMode: 'none',

});


const AppNavigator = createSwitchNavigator({
  
  Public: {screen: PublicStackNavigator},
  Auth: {screen: AuthStackNavigator},
  
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render(){
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    )
  }
}

