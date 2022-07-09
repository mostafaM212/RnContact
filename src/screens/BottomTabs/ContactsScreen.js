import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  FlatList,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAll} from 'react-native-contacts';
import {useDispatch, useSelector} from 'react-redux';
import {setContacts as setContactsAction} from '../../redux/actions/contactsActions';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import ContactListItem from '../../components/Contacts/ContactListItem';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ContactsScreen = ({navigation}) => {
  const storedContacts = useSelector(state => state.contacts.contacts);
  const settings = useSelector(state => state.settings);
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (contacts.length === 0) {
      setIsLoading(true);

      setContacts(storedContacts);
    } else {
      setIsLoading(false);
    }
  });
  const isDarkMode = useColorScheme() === 'dark';
  const onSearch = query => {
    if (query === '') {
      setContacts(storedContacts);
      return;
    }
    let filteredContacts = contacts.filter(contact => {
      if (contact.displayName) {
        if (contact.displayName.includes(query)) {
          return true;
        }
      }
      return false;
    });
    setContacts(filteredContacts);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.navy : '#ffff',
  };

  return (
    <View style={[{flex: 1, alignItems: 'center'}, backgroundStyle]}>
      <SearchBar
        isDarkMode={isDarkMode}
        searchHandler={onSearch}
        iconColor={settings.mainColor}
      />

      <View style={{width: '90%', alignItems: 'center'}}>
        {isLoading ? (
          <ActivityIndicator size={50} color={settings.mainColor} />
        ) : (
          <FlatList
            data={contacts}
            renderItem={({item}) => {
              if (item['displayName']) {
                return (
                  <ContactListItem
                    displayedName={item['displayName']}
                    navigation={navigation}
                    phoneNumber={item['phoneNumbers'][0]}
                    iconColor={settings.mainColor}
                    isDarkMode={isDarkMode}
                    hasPhoto={item['hasThumbnail']}
                    photoPath={item['thumbnailPath']}
                  />
                );
              }
            }}
            keyExtractor={(e, index) => index}
          />
        )}
      </View>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('CreateContactScreen')}>
        <View
          style={[
            {...styles.plusButton},
            {backgroundColor: settings.mainColor},
          ]}>
          <Icon name="plus" size={25} color="#ffffff" solid />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,

    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
