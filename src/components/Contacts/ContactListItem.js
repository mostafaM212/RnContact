import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Linking,
} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


export const makeCall = (phone) => {
  try {
    RNImmediatePhoneCall.immediatePhoneCall(`${phone}`);
  } catch (error) {
    console.log(error);
  }
};
const ContactListItem = ({
  displayedName,
  navigation,
  phoneNumber,
  iconColor,
  isDarkMode,
  hasPhoto,
  photoPath,
}) => {
  
  
  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('ContactDetailsScreen')}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.logo}>
            {hasPhoto ? (
              <Image
                source={{uri: `${photoPath}`}}
                style={{flex: 1, width: '100%', height: '100%'}}
              />
            ) : (
              <Text style={styles.title}>
                {displayedName  ? displayedName[0].toLocaleUpperCase() : 'No' }
              </Text>
            )}
          </View>
          <Text
            style={[
              styles.name,
              {color: isDarkMode ? colors.gray : colors.navy},
            ]}
            numberOfLines={1}>
            {displayedName}
          </Text>
        </View>
        <TouchableNativeFeedback onPress={() => makeCall(phoneNumber.number)}>
          <View style={styles.buttonContainer}>
            <Icon name="phone" size={25} color={iconColor} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center', width: '80%'},
  logo: {
    backgroundColor: colors.PURPLE,
    height: 60,
    width: 60,
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  title: {
    fontSize: 25,
    color: '#ffff',
  },
  name: {
    fontSize: 15,
    width: '80%',
    textAlign: 'left',
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
