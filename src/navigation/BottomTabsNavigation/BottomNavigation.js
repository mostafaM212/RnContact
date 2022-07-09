import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/theme/colors';
import ContactsScreen from '../../screens/BottomTabs/ContactsScreen';
import CallsScreen from '../../screens/BottomTabs/CallsScreen';
import FavoritesScreen from '../../screens/BottomTabs/FavoritesScreen';
import { useSelector } from 'react-redux';

const BottomNavigation = () => {
  const BottomTabs = createMaterialBottomTabNavigator();
  const settings = useSelector(state => state.settings);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <BottomTabs.Navigator
      initialRouteName="CallsScreen"
      activeColor={settings.mainColor}
      inactiveColor={colors.success}
      barStyle={{
        backgroundColor: isDarkMode ? colors.navy : colors.primary,
      }}>
      <BottomTabs.Screen
        component={ContactsScreen}
        name="ContactsScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="users" size={focused ? 20 : 15} color={color} />
          ),
          title: 'Contacts',
        }}
      />
      <BottomTabs.Screen
        component={CallsScreen}
        name="CallsScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="phone" size={focused ? 20 : 15} color={color} />
          ),
          title: 'Calls',
        }}
      />
      <BottomTabs.Screen
        component={FavoritesScreen}
        name="FavoritesScreen"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="star" size={focused ? 20 : 15} color={color} solid={focused} />
          ),
          title: 'Favorites',
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
