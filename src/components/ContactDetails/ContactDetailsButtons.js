import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';
import { makeCall } from '../Contacts/ContactListItem';

const ContactDetailsButtons = ({mainColor, phoneNumber, showMessageForm}) => {
  const handleSmsButton = async () => {
    const url = `sms:${phoneNumber.number}:body=${'message'}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={[styles.container, {borderColor: mainColor}]}>
      <TouchableNativeFeedback onPress={()=>makeCall(phoneNumber.number)}>
        <View style={styles.buttonContainer}>
          <Icon name="phone" color={mainColor} size={30} solid />
          <Text style={[styles.buttonTitle, {color: mainColor}]}>Call</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={handleSmsButton}>
        <View style={styles.buttonContainer}>
          <Icon name="envelope" color={mainColor} size={30} solid />
          <Text style={[styles.buttonTitle, {color: mainColor}]}>Message</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ContactDetailsButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    height: 100,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
