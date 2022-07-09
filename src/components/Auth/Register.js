import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/theme/colors';
import CustomTextInput from '../UI/CustomTextInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ActivityIndicator} from 'react-native-paper';
import {Button} from 'react-native-paper';
import propTypes from 'prop-types';

const Register = ({navigation, registerHandler}) => {
  const [userName, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  
  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      <View style={styles.container}>
        <CustomTextInput
          onChangeText={value => setUsername(value)}
          label="Username"
          value={userName}
          placeholder="Enter Your Username"
          isPassword={false}
          isEmail={false}
        />
        <CustomTextInput
          onChangeText={value => setFirstName(value)}
          label="First Name"
          value={firstName}
          placeholder="Enter Your First Name"
          isPassword={false}
          isEmail={false}
        />
        <CustomTextInput
          onChangeText={value => setLastName(value)}
          label="Last Name"
          value={lastName}
          placeholder="Enter Your Last Name"
          isPassword={false}
          isEmail={false}
        />
        <CustomTextInput
          onChangeText={value => setEmail(value)}
          label="Email"
          value={email}
          placeholder="Enter Your Email"
          isPassword={false}
          isEmail={false}
        />
        <CustomTextInput
          onChangeText={value => setPassword(value)}
          label="Password"
          value={password}
          placeholder="Enter Your Password"
          isPassword={true}
          isEmail={false}
        />
        {showSpinner ? (
          <ActivityIndicator color={colors.success} size="large" />
        ) : (
          <Button
            style={styles.button}
            color={colors.white}
            onPress={() =>
              registerHandler(userName, firstName, lastName, email, password)
            }
            icon={() => (
              <FontAwesome5 name="user-plus" color={colors.white} size={20} />
            )}>
            Sign up
          </Button>
        )}
        <View style={{flexDirection: 'row'}}>
          <Text>have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={{color: 'blue'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
Register.propTypes = {
  navigation: propTypes.object.isRequired,
  registerHandler: propTypes.func.isRequired,
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',

    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    marginBottom: 5,
  },
});
