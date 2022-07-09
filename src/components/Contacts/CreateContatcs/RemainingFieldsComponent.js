import {StyleSheet, View, TextInput, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {List} from 'react-native-paper';
import colors from '../../../assets/theme/colors';
import ListViewer from './ListViewer';

/**
 *
 * @returns
 */

const list = ['Home', 'Work', 'Mobile', 'Main'];
const RemainingFieldsComponent = ({
  email,
  setEmail,
  label1,
  setLabel1,
  label2,
  setLabel2,
  phone1,
  phone2,
  setPhone1,
  setPhone2,
}) => {
  const {settings} = useSelector(state => state);

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <View style={[styles.emailContainer, {borderColor: settings.mainColor}]}>
        <Icon name="envelope" color={settings.mainColor} size={25} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.numberContainer}>
        <ListViewer label={label1} setLabel={setLabel1} />
        <TextInput
          style={[styles.numberInput, {borderColor: settings.mainColor}]}
          value={phone1}
          onChangeText={value => setPhone1(value)}
          placeholder="####"
          textAlign="center"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.numberContainer}>
        <ListViewer label={label2} setLabel={setLabel2} />
        <TextInput
          style={[styles.numberInput, {borderColor: settings.mainColor}]}
          value={phone2}
          onChangeText={value => setPhone2(value)}
          placeholder="####"
          textAlign="center"
          keyboardType="phone-pad"
        />
      </View>
    </View>
  );
};

export default RemainingFieldsComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
  },
  emailContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    borderRadius: 6,
  },
  input: {
    fontSize: 15,
    padding: 10,
    width: '100%',
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  numberInput: {
    borderWidth: 2,
    fontSize: 15,
    width: '50%',
  },
});
