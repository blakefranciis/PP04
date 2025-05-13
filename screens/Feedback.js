// Import necessary components
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// Functional Component
export default function BakeryFeedback() {
  // TODO: Complete the code for the Feedback & Rating screen as per project instructions.
  // Use TextInput, Button, useState, Alert, etc.
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  
  const handleSubmit = () => {
    if (!feedback || !rating) {
      Alert.alert('Please fill in both fields.');
      return;
    }

    if (isNaN(rating) || rating < 1 || rating > 5) {
      Alert.alert('Invalid Rating', 'Please enter a number between 1 and 5.');
      return;
    }

    Alert.alert('Thank You!', `Feedback: ${feedback}\nRating: ${rating}/5`);
    setFeedback('');
    setRating('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>We value your feedback!</Text>

      <Text style={styles.label}>Your Feedback:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tell us about your experience..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <Text style={styles.label}>Rating (1–5):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a rating"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDE3D0',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  submit: {
    color: '#CDE3D0',
    fontSize: 18,
    textAlign: 'center',
  },
});
