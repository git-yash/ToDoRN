import React from 'react';
import auth from '@react-native-firebase/auth';
import {Pressable, Text, View} from 'react-native';

const Home = (props: {navigation: any}) => {
  return (
    <View>
      {auth().currentUser && (
        <View>
          <Text>Home Screen</Text>
          <Text>{auth().currentUser?.email}</Text>

          <Text>{auth().currentUser?.displayName}</Text>
        </View>
      )}
      <View>
        <Pressable
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                props.navigation.navigate('Log In');
              });
          }}>
          <Text>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
