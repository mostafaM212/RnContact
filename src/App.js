/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import contactsReducer from './redux/reducers/contactsReducer';
import MainNavigation from './navigation/MainNavigation';
import settingsReducer from './redux/reducers/settingsReducer';
import colors from './assets/theme/colors';
import { callLogsReducer } from './redux/reducers/callLogsReducer';

const mainReducer = combineReducers({
  contacts: contactsReducer,
  settings: settingsReducer,
  callLogs : callLogsReducer
});

const store = createStore(mainReducer, applyMiddleware(thunk));

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.navy : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
