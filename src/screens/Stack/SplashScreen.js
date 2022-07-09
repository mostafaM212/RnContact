import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/theme/colors';
import image from './../../assets/images/icons8-contacts-240.png';
import {
  check,
  PERMISSIONS,
  RESULTS,
  requestMultiple,
} from 'react-native-permissions';
import CallLogs from 'react-native-call-log'
import { setCallLogs } from '../../redux/actions/callLogsActions';
import {getAll} from 'react-native-contacts';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/actions/contactsActions';


const appPermissions = [
  PERMISSIONS.ANDROID.READ_CONTACTS,
  PERMISSIONS.ANDROID.READ_CALL_LOG,
  PERMISSIONS.ANDROID.WRITE_CONTACTS,
  PERMISSIONS.ANDROID.WRITE_CALL_LOG,
  PERMISSIONS.ANDROID.CALL_PHONE,
  PERMISSIONS.ANDROID.READ_SMS
];

const SplashScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const dispatch = useDispatch()
  const requestPermissions = async Permission => {
    await requestMultiple(appPermissions).then(response => {
      console.log(response);
    });
  };

  useEffect(() => {
    appPermissions.map(permission => checkPermission(permission));
    if (!results.includes(RESULTS.DENIED)) {
      navigation.navigate('Home');
    }
    loadCallLogs()
  });
  const loadCallLogs = async () => {
    try {
      await CallLogs.loadAll().then(res => {
        dispatch(setCallLogs(res))
      })
      await getAll().then(result => {
        
        dispatch(setContacts(result));
      });
    } catch (error) {
      console.log(error)
    }
  }
  const checkPermission = async Permission => {
    await check(Permission)
      .then(result => {
        results.push(result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            return requestPermissions(Permission);
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.MAROON}]}>
      <Image source={image} style={styles.image} />
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
