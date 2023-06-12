import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import logInStyles from './LogIn.style';

const LogIn = (props: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic with the captured input values
    console.log('Login button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password button pressed');
  };

  const handleGoToSignUp = () => {
    // Handle sign up logic here
    props.navigation.navigate('Sign Up');
  };

  return (
    <View style={logInStyles.container}>
      <Text style={logInStyles.logo}>Log In</Text>
      <View style={logInStyles.inputView}>
        <TextInput
          style={logInStyles.inputText}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={logInStyles.inputView}>
        <TextInput
          style={logInStyles.inputText}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={logInStyles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={logInStyles.loginButton} onPress={handleLogin}>
        <Text style={logInStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoToSignUp}>
        <Text style={logInStyles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
