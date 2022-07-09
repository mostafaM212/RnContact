import {
  StyleSheet,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  ToastAndroid,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/theme/colors';
import {makeCall} from '../Contacts/ContactListItem';
import CallLogItem from './CallLogItem';

const MakePhoneModal = ({
  isShown,
  settings,
  callLogs,
  disableModal,
  isDarkMode,
}) => {
  const [phone, setPhone] = useState('');
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    if (calls.length === 0 || phone.length === 0) {
      let arr = [];

      callLogs.forEach(datum => {
        if (!arr.find(item => item.name === datum.name)) {
          arr.push(datum);
        }
      });
      setCalls(arr);
    }
  }, [isShown]);
  const filterHandler = value => {
    setPhone(value);
    const newCalls = calls.filter(call => {
      if (call.phoneNumber.includes(phone)) {
        return true;
      }
      return false;
    });
    setCalls(newCalls);
  };
  return (
    <Modal visible={isShown} style={{opacity: '50%'}}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: isDarkMode ? colors.navy : colors.white,
          }}>
          <View style={styles.headerContainer}>
            <Icon
              name="arrow-left"
              size={35}
              color={settings.mainColor}
              onPress={() => disableModal()}
            />
            <Text
              style={{
                fontSize: 20,
                color: settings.mainColor,
                alignSelf: 'center',
              }}>
              Suggested
            </Text>
          </View>
          <FlatList
            data={calls}
            keyExtractor={(call, index) => index}
            renderItem={data => <CallLogItem callLog={data.item} />}
          />
        </View>

        <KeyboardAvoidingView>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="add number"
              autoFocus={true}
              style={styles.input}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={value => filterHandler(value)}
            />
            <Icon
              name="phone"
              size={25}
              color={settings.mainColor}
              onPress={() => {
                if (phone.length > 10) {
                  makeCall(phone);
                } else {
                  ToastAndroid.show('invalid phone number', 2000);
                }
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default MakePhoneModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.gray,
    height: Dimensions.get('screen').height * 0.08,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.04,
  },
  input: {
    width: '90%',
    height: '100%',
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
});
