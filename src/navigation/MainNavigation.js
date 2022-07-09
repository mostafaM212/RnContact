import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeStackNavigation from './Stack/HomeStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
const MainNavigation = () => {

  
  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
