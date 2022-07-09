import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/theme/colors';
import PhotoPicker from '../../components/Contacts/PhotoPicker';
import {useSelector} from 'react-redux';
import NameFieldsComponent from '../../components/Contacts/CreateContatcs/NameFieldsComponent';
import RemainingFieldsComponent from '../../components/Contacts/CreateContatcs/RemainingFieldsComponent';
import {ActivityIndicator, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Contact} from '../../config/Contact';
import Contacts from 'react-native-contacts';
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/actions/contactsActions';
/**
 *
 * @returns
 */

const CreateContactScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [photo, setPhoto] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [label1, setLabel1] = useState('Home');
  const [label2, setLabel2] = useState('work');
  const {settings} = useSelector(state => state);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const dispatch = useDispatch()
  const saveContactHandler = async () => {
    setIsLoading(true);
    let newContact = new Contact(
      photo,
      firstName,
      lastName,
      label1,
      phone1,
      email,
      label2,
      phone2,
    );
    if (!isLoading) {
      const validateResult = newContact.validateContact();
      if (validateResult.isError) {
        ToastAndroid.show(validateResult.message, 1500);
        setIsLoading(false);
        return;
      }

      try {
        const storedContact = newContact.contactFormatter();
        console.log( storedContact)
        await Contacts.openContactForm(storedContact).then(response => {
          navigation.goBack()
          
          console.log(response)
          dispatch(addContact(response))
          })
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.navy : '#fff'},
      ]}>
      <PhotoPicker savePhotoHandler={image => setPhoto(image.uri)} />
      <NameFieldsComponent
        firstName={firstName}
        lastName={lastName}
        setFirstName={value => setFirstName(value)}
        setLastName={value => setLastName(value)}
      />
      <RemainingFieldsComponent
        label1={label1}
        setLabel1={setLabel1}
        label2={label2}
        setLabel2={setLabel2}
        email={email}
        setEmail={setEmail}
        phone1={phone1}
        setPhone1={setPhone1}
        phone2={phone2}
        setPhone2={setPhone2}
      />
      <TouchableNativeFeedback onPress={saveContactHandler}>
        <View style={[styles.button, {backgroundColor: settings.mainColor}]}>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} size={20} />
          ) : (
            <React.Fragment>
              <Icon name="user-plus" size={25} color={'#fff'} />
              <Text style={styles.buttonText}>Save</Text>
            </React.Fragment>
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CreateContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    padding: 15,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#fff',
  },
});
