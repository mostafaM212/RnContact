import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/theme/colors';

const MessageForm = ({showForm, mainColor, phoneNumber1, phoneNumber2}) => {
  const [message, setMessage] = useState('');
  console.log(phoneNumber1, phoneNumber2);
  
  const sendSMSCard2 = async () => {
    const url = `sms:${phoneNumber2.number}:body=${message}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, {borderColor: mainColor}]}>
      <TextInput
        style={styles.input}
        multiline={true}
        value={message}
        onChangeText={value => setMessage(value)}
        placeholder="Type an Message"
      />
      <View style={{alignItems: 'center', width: '30%'}}>
        <TouchableNativeFeedback onPress={sendSMSCard1}>
          <View style={styles.buttonContainer}>
            <Icon name="envelope" color={mainColor} size={25} />
            <Text style={{color: colors.success, fontSize: 10}}>SMS 1</Text>
          </View>
        </TouchableNativeFeedback>
        {/*phoneNumbers.length > 0 && (
          <TouchableNativeFeedback onPress={sendSMSCard2}>
            <View style={styles.buttonContainer}>
              <Icon name="envelope" color={mainColor} size={25} />
              <Text style={{color: colors.PURPLE, fontSize: 10}}>SMS 2</Text>
            </View>
          </TouchableNativeFeedback>
        )*/}
      </View>
    </View>
  );
};

export default MessageForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    height: 100,
    alignItems: 'center',
  },
  input: {
    height: '100%',
    width: '70%',
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
});
