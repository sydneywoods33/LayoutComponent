import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, SafeAreaView } from 'react-native';
import ToDoList from './src/component/ToDoList';
import ToDoForm from './src/component/ToDoForm';

// todo list app MAIN PAGE - Sydney Woods CPRG303H
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', completed: true },
    { id: 2, text: 'Go to gym', completed: false },
    { id: 3, text: 'Walk dog', completed: true },
  ]);

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <View style={styles.form}>
        <ToDoForm onAddTask={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default App;