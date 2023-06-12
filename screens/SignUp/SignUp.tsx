import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import signUpStyles from './SignUp.style';

const SignUp = (props: {navigation: any}) => {
  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Sign Up button pressed');
  };

  const handleAlreadyHaveAccount = () => {
    // Handle already have an account logic here
    props.navigation.navigate('Log In');
  };

  return (
    <View style={signUpStyles.container}>
      <Text style={signUpStyles.logo}>Sign Up</Text>
      <View style={signUpStyles.inputView}>
        <TextInput
          style={signUpStyles.inputText}
          placeholder="Name"
          placeholderTextColor="#ffffff"
          autoCapitalize="words"
        />
      </View>
      <View style={signUpStyles.inputView}>
        <TextInput
          style={signUpStyles.inputText}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
        />
      </View>
      <View style={signUpStyles.inputView}>
        <TextInput
          style={signUpStyles.inputText}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={signUpStyles.signupButton} onPress={handleSignUp}>
        <Text style={signUpStyles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAlreadyHaveAccount}>
        <Text style={signUpStyles.alreadyHaveAccountText}>
          Already have an account? Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
