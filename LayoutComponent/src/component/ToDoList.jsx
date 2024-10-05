
import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';


function ToDoList({ tasks }) {
    return (
      <ScrollView style={styles.scrollContainer}>
        {tasks.map(task => (
          <Pressable key={task.id}>
            <View style={[styles.task, task.completed && styles.completed]}>
              <Text style={styles.taskText}>{task.text}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    scrollContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    task: {
      padding: 5,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });
  
  export default ToDoList;