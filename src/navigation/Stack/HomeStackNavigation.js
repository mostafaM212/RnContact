import {StyleSheet, Text, View , useColorScheme, Settings} from 'react-native';
import React from 'react';
import BottomNavigation from '../BottomTabsNavigation/BottomNavigation';
import CreateContactScreen from '../../screens/Stack/CreateContactScreen';
import ContactDetailsScreen from '../../screens/Stack/ContactDetailsScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from '../../screens/Stack/SplashScreen';
import colors from '../../assets/theme/colors';
import { useSelector } from 'react-redux';

const HomeStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const {settings} = useSelector(state =>state)
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{
      headerStyle: {
        backgroundColor: isDarkMode ? colors.navy : '#ffff',
        
      },
      headerTintColor : isDarkMode ? colors.MAROON : colors.gray
    }} >
      <Stack.Screen name='Splash' component={SplashScreen} options={{
        headerShown : false
      }} />
      <Stack.Screen name="Home" component={BottomNavigation} options={{
        headerShown : false
      }} />
      
      <Stack.Screen
        name="CreateContactScreen"
        component={CreateContactScreen}
        options={{
          title : 'Create New Contact'
        }}
      />

      <Stack.Screen
        name="ContactDetailsScreen"
        component={ContactDetailsScreen}
        options={{
          headerTintColor : isDarkMode ? '#fff': settings.mainColor ,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;

const styles = StyleSheet.create({});
