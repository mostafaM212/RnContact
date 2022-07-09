import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import colors from '../../assets/theme/colors';

const CustomTextInput = ({
  onChangeText,
  placeholder,
  value,
  label,
  isPassword,
  isEmail,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dataContainer}>
        <TextInput
          value={value}
          onChangeText={value => onChangeText(value)}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          textContentType={isEmail ? 'emailAddress' : 'name'}
        />
      </View>
    </View>
  );
};

CustomTextInput.propTypes = {
  onChangeText: propTypes.func.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  label: propTypes.string.isRequired,
  isPassword: propTypes.bool.isRequired,
  isEmail: propTypes.bool.isRequired,
};
export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: colors.white,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'column',

    height: Dimensions.get('screen').height * 0.13,
  },
  label: {
    fontWeight: '900',
    fontSize: 16,
    marginBottom: 5,
    borderWidth: 0,
  },
  dataContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 5,
    paddingHorizontal: 5,
  },
});
