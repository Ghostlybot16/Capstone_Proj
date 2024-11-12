// Components/LoginPage.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry autoCapitalize="none" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#e0e0e0',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#4caf50',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import SignUpPageOne from './Components/Signup';
import SignUpPageTwo from './Components/Apply';
import LoginPage from './Components/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1); // 1 for SignUpPageOne, 2 for SignUpPageTwo, 3 for LoginPage
  const [formData, setFormData] = useState({});

  const handleNextPage = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentPage(2);
  };

  const handlePreviousPage = () => {
    setCurrentPage(1);
  };

  const handleSubmit = (data) => {
    const completeData = { ...formData, ...data };
    Alert.alert('Sign Up Successful', `Data: ${JSON.stringify(completeData)}`);
    // Redirect to login page after showing alert
    setCurrentPage(3);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentPage === 1 && (
        <SignUpPageOne onNext={handleNextPage} />
      )}
      {currentPage === 2 && (
        <SignUpPageTwo onSubmit={handleSubmit} onBack={handlePreviousPage} />
      )}
      {currentPage === 3 && (
        <LoginPage />
      )}
    </View>
  );
}
