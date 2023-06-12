import React from 'react';
import auth from '@react-native-firebase/auth';
import {Pressable, Text, View} from 'react-native';
import ToDoItem from '../../components/ToDoView/ToDoItem';

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
        <ToDoItem
          title="Go to doctor"
          completed={false}
          navigation={props.navigation}
        />
      </View>
    </View>
  );
};

export default Home;
