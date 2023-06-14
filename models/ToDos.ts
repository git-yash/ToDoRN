import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import ToDo from './ToDo';

class ToDos {
  // private todoItems: ToDo[] = [];
  //
  // constructor(private displayName: string) {}
  //
  // public fetchTodoItems = async (): Promise<ToDo[]> => {
  //   try {
  //     const snapshot = await firestore()
  //       .collection('Users')
  //       .doc(this.displayName)
  //       .collection('ToDos')
  //       .get();
  //
  //     snapshot.forEach(doc => {
  //       const {title, completed, dateDue, priority} = doc.data();
  //
  //       this.todoItems.push({
  //         id: doc.id,
  //         title,
  //         completed,
  //         dateDue: dateDue.toDate(),
  //         priority,
  //       });
  //     });
  //
  //     return this.todoItems;
  //   } catch (error) {
  //     console.log('Error fetching todo items:', error);
  //     return [];
  //   }
  // };
  //
  // public useFetchTodoItems = (): ToDo[] => {
  //   const [fetchedItems, setFetchedItems] = useState<ToDo[]>([]);
  //
  //   useEffect(() => {
  //     this.fetchTodoItems().then(items => setFetchedItems(items));
  //   }, []);
  //
  //   return fetchedItems;
  // };
}

export default ToDos;
