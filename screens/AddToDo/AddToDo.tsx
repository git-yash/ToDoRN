import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import firestore, {firebase} from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker';
import styles from './AddToDo.style';

const AddToDo = (props: {navigation: any}) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState('');

  const handleAddTodo = () => {
    const displayName: any = auth().currentUser?.displayName;

    firestore()
      .collection('Users')
      .doc(displayName)
      .collection('ToDos')
      .add({
        completed: false,
        dateDue: firebase.firestore.Timestamp.fromDate(dueDate), //TODO: the date is minus one
        priority: priority,
        title: title,
      })
      .then(() => {
        props.navigation.navigate('Home');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <DatePicker date={dueDate} onDateChange={setDueDate} />

      <Picker
        style={styles.picker}
        selectedValue={priority}
        onValueChange={itemValue => setPriority(itemValue.toString())}>
        <Picker.Item label="!" value="!" />
        <Picker.Item label="!!" value="!!" />
        <Picker.Item label="!!!" value="!!!" />
      </Picker>

      <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDo;
