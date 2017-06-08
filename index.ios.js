import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import SetList from './src/components/SetList';

const App = () => (
  <View>
    <Header headerText={'Sets'}/>
    <SetList />
  </View>
);

AppRegistry.registerComponent('BoilerRoom', () => App);
