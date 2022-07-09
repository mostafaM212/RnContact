import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/theme/colors';
import {useSelector , useDispatch} from 'react-redux';
import {CallLog} from '../../config/CallLog';
import {makeCall} from '../Contacts/ContactListItem';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import { setActiveContact } from '../../redux/actions/contactsActions';

const CallLogItem = ({callLog, navigation}) => {
  const {settings} = useSelector(state => state);
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch()
  let callLogClass = new CallLog(
    callLog.dateTime,
    callLog.name,
    callLog.duration,
    callLog.phoneNumber,
    callLog.type,
  );
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          if (callLogClass.name.length > 0) {
            dispatch(setActiveContact(callLogClass.phoneNumber))
            navigation.navigate('ContactDetailsScreen', {
              phoneNumber: callLogClass.phoneNumber,
              name : callLogClass.name
            });
          }
        }}>
        <View style={styles.numberContainer}>
          <View
            style={[
              styles.iconContainer,
              {backgroundColor: settings.mainColor},
            ]}>
            <Icon name="user" size={40} color={colors.accent} solid />
          </View>
          <View style={styles.dataContainer}>
            <Text style={{color: isDarkMode ? '#FFF' : colors.MAROON}}>
              {callLogClass.name ? callLogClass.name : 'Unknown'}
            </Text>
            <Text style={{color: isDarkMode ? '#FFF' : colors.MAROON}}>
              {callLogClass.phoneNumber}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {callLogClass.callLogIcon()}
              <Text>{callLogClass.getDay()}</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => makeCall(callLogClass.phoneNumber)}>
        <View style={styles.buttonContainer}>
          <Icon name="phone" size={25} color={settings.mainColor} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CallLogItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  numberContainer: {flexDirection: 'row', alignItems: 'center', width: '80%'},
  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    marginLeft: 10,
  },
  buttonContainer: {
    width: '20%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'flex-end',
  },
});
