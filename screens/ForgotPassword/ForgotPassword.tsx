import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import logInStyles from '../LogIn/LogIn.style';
import Util from '../../Util';

const ForgotPassword = (props: {navigation: any}) => {
  const [email, setEmail] = useState('');
  let code = Util.generateRandomNumber();

  const handleSendCode = async () => {
    code = Util.generateRandomNumber();
    let body =
      'Enter this code into the app in order to create a new password. ' + code;

    await Util.sendEmail(email, 'Forgot Password Confirmation Code', body);
  };

  return (
    <View style={logInStyles.container}>
      <View style={logInStyles.inputView}>
        <TextInput
          style={logInStyles.inputText}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          value={email}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <TouchableOpacity
        style={logInStyles.loginButton}
        onPress={handleSendCode}>
        <Text style={logInStyles.loginButtonText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
