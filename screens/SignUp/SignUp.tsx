import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import signUpStyles from './SignUp.style';

const SignUp = (props: {navigation: any}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic with the captured input values
    console.log('Sign Up button pressed');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
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
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={signUpStyles.inputView}>
        <TextInput
          style={signUpStyles.inputText}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={signUpStyles.inputView}>
        <TextInput
          style={signUpStyles.inputText}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={signUpStyles.signupButton}
        onPress={handleSignUp}>
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
