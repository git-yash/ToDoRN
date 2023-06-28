import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import TodoItem from '../ToDoView/ToDoItem';
import ToDo from '../../models/ToDo';
import firestore from '@react-native-firebase/firestore'; // Update the import name to match the export name
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ToDos from '../../models/ToDos';
import Util from '../../Util';

const ToDoList = (props: {navigation: any}) => {
  const displayName: any = auth().currentUser?.displayName; // Replace with the actual user ID
  ToDos.toDos = useFetchTodoItems(displayName);

  React.useLayoutEffect(() => {
    // Customize the header
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              auth().signOut().then(props.navigation.navigate('Log In'));
            }}>
            <FontAwesomeIcon icon={faRightFromBracket} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Add ToDo')}
            style={{paddingLeft: 10}}>
            <FontAwesomeIcon icon={faPlus} size={25} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [props.navigation]);

  return (
    <View>
      {ToDos.toDos.map(todo => (
        <TodoItem key={todo.id} toDo={todo} navigation={props.navigation} />
      ))}
    </View>
  );
};

const useFetchTodoItems = (displayName: string): ToDo[] => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const snapshot = await firestore()
          .collection('Users')
          .doc(displayName)
          .collection('ToDos')
          .get();

        const todoItems: ToDo[] = [];

        snapshot.forEach(doc => {
          const {title, completed, dateDue, priority} = doc.data();

          todoItems.push({
            id: doc.id,
            title,
            completed,
            dateDue: Util.toDateTime(dateDue.seconds),
            priority,
          });
        });
        setTodos(todoItems);
      } catch (error) {
        console.log('Error fetching todo items:', error);
      }
    };

    fetchTodoItems();
  }, [displayName, todos]);

  return todos;
};

export default ToDoList;
