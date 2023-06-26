import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DatePicker from 'react-native-date-picker';
import styles from '../AddToDo/AddToDo.style';
import ToDo from '../../models/ToDo';
import ToDos from '../../models/ToDos';

const EditToDo = ({route, navigation}) => {
  const {toDo} = route.params;

  const [title, setTitle] = useState(toDo?.title);
  const [dueDate, setDueDate] = useState(new Date()); // TODO: fix this date issue
  const [priority, setPriority] = useState(toDo?.priority);
  const displayName: any = auth().currentUser?.displayName;

  const handleSave = () => {
    firestore()
      .collection('Users')
      .doc(displayName)
      .collection('ToDos')
      .doc(toDo.id)
      .update({
        title: title,
        dateDue: dueDate,
        priority: priority,
      })
      .then(() => {
        let tempToDo = new ToDo(
          toDo.id,
          title,
          priority,
          toDo.completed,
          dueDate,
        );
        ToDos.editTodo(ToDos.getTodoIndexFromID(toDo.id), tempToDo);

        navigation.navigate('Home');
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

      <TouchableOpacity onPress={handleSave} style={styles.addButton}>
        <Text style={styles.addButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditToDo;
