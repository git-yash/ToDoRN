import React from 'react';
import auth from '@react-native-firebase/auth';
import { Pressable, ScrollView, Text, View } from "react-native";
import ToDoList from '../../components/ToDoListView/ToDoList';
import homeStyle from './Home.style';

const Home = (props: {navigation: any}) => {
  return (
    <ScrollView>
      {auth().currentUser && (
        <View>
          <Text style={homeStyle.welcomeText}>
            Welcome {auth().currentUser?.displayName}!
          </Text>
        </View>
      )}
      <View>
        <ToDoList navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

export default Home;
