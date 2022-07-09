import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  useColorScheme,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PhotoPicker from '../../components/Contacts/PhotoPicker';
import {Contact} from '../../config/Contact';
import {useSelector} from 'react-redux';
import ContactDetailsButtons from '../../components/ContactDetails/ContactDetailsButtons';
import MessageForm from '../../components/ContactDetails/MessageForm';
import ContactNumbersCard from '../../components/ContactDetails/ContactNumbersCard';
import colors from '../../assets/theme/colors';

export function removeDuplicates(arr) {
  const numbers = arr.map(o => o.number);
  const filtered = arr.filter(
    ({number}, index) => !numbers.includes(number, index + 1),
  );
  return filtered;
}

const ContactDetailsScreen = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [photo, setPhoto] = useState('');
  const {activeContact} = useSelector(state => state.contacts);
  const {settings} = useSelector(state => state);
  const [showMessageForm, setShowMessageForm] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [contact, setContact] = useState([])
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
    if (activeContact.length > 0) {
      setContact(activeContact)
    }
  });
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  console.log(activeContact)
  if (contact.length > 0) {
    return (
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator size={30} />
        ) : (
          <View
            style={[
              styles.container,
              {backgroundColor: isDarkMode ? colors.navy : '#fff'},
            ]}>
            <View
              style={[styles.headerContainer, {borderColor: settings.mainColor}]}>
              <PhotoPicker savePhotoHandler={image => setPhoto(image.uri)} />
              <Text style={[styles.title, {color: settings.mainColor}]}>
                  {contact[0] ? contact[0].displayName : ''}
                  text
              </Text>
            </View>
            <ContactDetailsButtons
              mainColor={settings.mainColor}
              phoneNumber={contact.phoneNumbers[0]}
              showMessageForm={() => setShowMessageForm(!showMessageForm)}
            />
            <ContactNumbersCard
              phoneNumbers={removeDuplicates(contact.phoneNumbers)}
              mainColor={settings.mainColor}
            />
          </View>
        )}
      </ScrollView>
    );
  }
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 30,
  },
  headerContainer: {
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
