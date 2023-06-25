import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoItem.style';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ToDo from '../../models/ToDo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Util from '../../Util';
import ToDos from '../../models/ToDos';

type TodoItemProps = {
  toDo: ToDo;
  navigation: any;
};

const TodoItem: React.FunctionComponent<TodoItemProps> = props => {
  const [isComplete, setIsComplete] = useState(props.toDo.completed);
  const displayName: any = auth().currentUser?.displayName;
  const dateTime: String = Util.getDateString(
    Util.toDateTime(props.toDo.dateDue.seconds),
  );

  const handleToggleComplete = () => {
    setIsComplete(!isComplete);
    firestore()
      .collection('Users')
      .doc(displayName)
      .collection('ToDos')
      .doc(props.toDo.id)
      .update({
        completed: !isComplete,
      });
    props.toDo.completed = !isComplete;
    console.log(ToDos.toDos);
  };

  const handleDelete = () => {
    firestore()
      .collection('Users')
      .doc(displayName)
      .collection('ToDos')
      .doc(props.toDo.id)
      .delete()
      .then(() => {
        ToDos.deleteTodo(ToDos.getTodoIndexFromID(props.toDo.id));
      });
  };

  const handleEdit = () => {
    console.log('Edit');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleComplete}>
        <FontAwesomeIcon
          icon={isComplete ? faCircleCheck : faCircle}
          size={25}
          style={styles.checkIcon}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={[styles.title, isComplete && styles.completed]}>
          {props.toDo.title} {props.toDo.priority}
        </Text>
        <Text style={styles.dateText}>{dateTime}</Text>
      </View>
      <TouchableOpacity onPress={handleEdit}>
        <FontAwesomeIcon
          icon={faPen}
          color="#fb5b5a"
          size={25}
          style={styles.editIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <FontAwesomeIcon icon={faTrash} color="#fb5b5a" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
