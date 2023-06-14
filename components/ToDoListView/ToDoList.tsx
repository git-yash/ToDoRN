import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import TodoItem from '../ToDoView/ToDoItem';
import ToDo from '../../models/ToDo';
import firestore from '@react-native-firebase/firestore'; // Update the import name to match the export name

const ToDoList = (props: {navigation: any}) => {
  const displayName: any = auth().currentUser?.displayName; // Replace with the actual user ID
  const todos: ToDo[] = useFetchTodoItems(displayName);

  return (
    <View>
      {todos.map(todo => (
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
            dateDue: dateDue.toDate(),
            priority,
          });
        });

        setTodos(todoItems);
        console.log(todoItems);
      } catch (error) {
        console.log('Error fetching todo items:', error);
      }
    };

    fetchTodoItems();
  }, [displayName]);

  console.log(todos);
  return todos;
};

export default ToDoList;
