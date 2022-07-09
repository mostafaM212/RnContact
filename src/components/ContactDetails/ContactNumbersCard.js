import {FlatList, StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ContactNumbersCard = ({phoneNumbers, mainColor}) => {
  const sendWhatsApp = number => {
    let URL =
      'whatsapp://send?text=' + 'whatsAppMessage' + '&phone=02' + number;

    Linking.openURL(URL)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };
  return (
    <View style={[styles.container, {backgroundColor: '#ccc'}]}>
      <Text style={{fontSize: 15, color: mainColor, alignSelf: 'center'}}>
        Phone Numbers
      </Text>
      {phoneNumbers.map((element, index) => (
        <View
          key={index}
          style={styles.numberContainer}>
          <Text style={{fontSize: 25, color: mainColor}}>{element.number}</Text>
              <Icon name="whatsapp" color={mainColor} size={25} onPress={()=>sendWhatsApp(element.number) } />
        </View>
      ))}
    </View>
  );
};

export default ContactNumbersCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    width: '80%',
    marginTop: 20,
    },
    numberContainer : {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
});
