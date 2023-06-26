/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './screens/LogIn/LogIn';
import SignUp from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';
import AddToDo from './screens/AddToDo/AddToDo';
import EditToDo from './screens/EditToDo/EditToDo';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Log In"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen name="Add ToDo" component={AddToDo} />
        <Stack.Screen name="Edit ToDo" component={EditToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
