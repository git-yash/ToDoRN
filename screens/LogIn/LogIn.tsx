import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import logInStyles from './LogIn.style';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const LogIn = (props: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    if (user) {
      props.navigation.navigate('Home');
    }
  });

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        setEmail('');
        setPassword('');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    props.navigation.navigate('Forgot Password');
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
          keyboardType="email-address"
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
        <Text style={logInStyles.signupText}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
