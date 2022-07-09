import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/theme/colors';
import {Button} from 'react-native-paper';
import propTypes from 'prop-types';
import CustomTextInput from '../UI/CustomTextInput';
import {ActivityIndicator} from 'react-native-paper';
import Icon from '../../assets/images/icons8-contacts-240.png'


const SignIn = ({loginHandler}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

  const login = () => {
    setShowSpinner(true);
    console.log('first')
    loginHandler(userName, password);
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>
        <Image source={Icon} />
        <CustomTextInput
          label="User Name :"
          isEmail={false}
          isPassword={false}
          onChangeText={value => setUserName(value)}
          placeholder="Enter Your Username"
          value={userName}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.dataContainer}>
            <TouchableNativeFeedback onPress={() => setSecureText(!secureText)}>
              <FontAwesome5
                name="eye"
                color={secureText ? colors.success : colors.gray}
                size={25}
                style={{backgroundColor: colors.white}}
              />
            </TouchableNativeFeedback>
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
              style={styles.input}
              placeholder="Enter Your Password"
              textContentType="password"
              secureTextEntry={secureText}
            />
          </View>
        </View>
        {showSpinner ? (
          <ActivityIndicator color={colors.success} size="large" />
        ) : (
          <Button
            style={styles.button}
            color={colors.white}
            onPress={() => login()}
            icon={() => (
              <FontAwesome5 name="user" color={colors.white} size={25} />
            )}>
            Sign in
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

SignIn.propTypes = {
  loginHandler: propTypes.func.isRequired,
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',

    height: Dimensions.get('screen').height * 0.13,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    fontSize: 20,
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
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    marginBottom: 5,
  },
});
