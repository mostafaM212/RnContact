import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
/**
 *
 * @param {*} param0
 * @returns
 */
const NameFieldsComponent = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) => {
  const {settings} = useSelector(state => state);

  return (
    <View style={styles.nameContainer}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={value => setFirstName(value)}
        style={[
          styles.FnameStyle,
          {borderColor: settings.mainColor, color: settings.mainColor},
        ]}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={value => setLastName(value)}
        style={[
          styles.FnameStyle,
          {borderColor: settings.mainColor, color: settings.mainColor},
        ]}
      />
    </View>
  );
};
NameFieldsComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
};
export default NameFieldsComponent;

const styles = StyleSheet.create({
  nameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  FnameStyle: {
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 6,
    width: '40%',
    padding: 10,
  },
});
