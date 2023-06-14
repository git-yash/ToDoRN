import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoItem.style';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ToDo from '../../models/ToDo';

type TodoItemProps = {
  toDo: ToDo;
  navigation: any;
};

const TodoItem: React.FunctionComponent<TodoItemProps> = props => {
  const [isComplete, setIsComplete] = useState(props.toDo.completed);

  const handleToggleComplete = () => {
    console.log('Toggle complete');
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    console.log('delete');
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
      <Text style={[styles.title, isComplete && styles.completed]}>
        {props.toDo.title}
      </Text>
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
