import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoItem.style';

interface TodoItemProps {
  title: string;
  completed: boolean;
  navigation: any;
}

const TodoItem: React.FC<TodoItemProps> = ({title, completed, navigation}) => {
  const [isComplete, setIsComplete] = useState(completed);

  const handleToggleComplete = () => {
    console.log('Toggle complete');
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={handleToggleComplete}>
        {isComplete && <Text style={styles.checkmark}>&#10003;</Text>}
      </TouchableOpacity>
      <Text style={[styles.title, isComplete && styles.completed]}>{title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
