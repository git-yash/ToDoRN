import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import signUpStyles from './SignUp.style';
import auth from '@react-native-firebase/auth';

const SignUp = (props: {navigation: any}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        if (userCredentials.user) {
          userCredentials.user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              setEmail('');
              setPassword('');
              props.navigation.navigate('Home');
            });
        }
      })
      .catch(function (error) {
        // Alert.alert(error);
        console.log(error);
      });
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
          keyboardType="default"
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
          keyboardType="email-address"
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
