import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';


export default function PendingApprovalPage({ onLogout, onContactSupport }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Thank You for your application!</Text>
        <Text style={styles.message}>
          Please wait for an approval email from the municipal office.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onContactSupport}>
          <Text style={styles.buttonText}>Contact Support</Text>
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
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 40,
      color: '#666',
    },
    button: {
      width: '80%',
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