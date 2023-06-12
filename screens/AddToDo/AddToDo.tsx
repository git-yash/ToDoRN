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
import firestore from '@react-native-firebase/firestore';

const AddToDo = (props: {navigation: any}) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleAddTodo = () => {
    const displayName: any = auth().currentUser?.displayName;

    firestore().collection('Users').doc(displayName).collection('ToDos').add({
      completed: false,
      dateDue: dueDate,
      priority: priority,
      title: title,
    });

    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
  },
  completedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
  },
  addButtonText: {
    color: 'white',
  },
  picker: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default AddToDo;
