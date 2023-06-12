import React from 'react';
import auth from '@react-native-firebase/auth';
import {Pressable, Text, View} from 'react-native';
import ToDoList from '../../components/ToDoListView/ToDoList';

const Home = (props: {navigation: any}) => {
  const hasUnsavedChanges = true;

  React.useEffect(
    () =>
      props.navigation.addListener(
        'beforeRemove',
        (e: {preventDefault: () => void}) => {
          if (!hasUnsavedChanges) {
            return;
          }
          e.preventDefault();
        },
      ),
    [props.navigation, hasUnsavedChanges],
  );

  return (
    <View>
      {auth().currentUser && (
        <View>
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
        <ToDoList navigation={props.navigation} />
      </View>
    </View>
  );
};

export default Home;
