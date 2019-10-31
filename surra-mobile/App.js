

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProfileScreen from './src/profile';
import DashboardScreen from './src/dashboard';
import AddItemScreen from './src/add-item';
import TransactionHistoryScreen from './src/transaction-history';
import PickupScreen from './src/pickup';
import LoginScreen from './src/login';
import QrScreen from './src/qr';

const PublicStackNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
},
{
  headerMode: 'none',

});

const AuthStackNavigator = createStackNavigator({
  Dashboard: {screen: DashboardScreen},
  Profile: {screen: ProfileScreen},
  AddItem: {screen: AddItemScreen},
  TransactionHistory :{screen: TransactionHistoryScreen},
  Pickup: {screen: PickupScreen},
  QR: {screen: QrScreen}
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

