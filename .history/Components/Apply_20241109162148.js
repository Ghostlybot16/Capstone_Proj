import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';

export default function Apply({ onSignUp }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Please ensure both password fields match.");
    } else {
      onSignUp(email, password);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.pageHeader}>
        <Text style={styles.pageNumber}>Page 1/2</Text>
      </View>
      <Image source={{ uri: 'https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png' }} style={styles.profileIcon} />
      <Text style={styles.title}>Application</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Next Page</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Log in here</Text>
      </Text>
      <Image source={{ uri: 'https://example.com/cityscape.png' }} style={styles.footerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  pageHeader: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  pageNumber: {
    fontSize: 16,
    color: '#333',
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginVertical: 20,
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
  loginText: {
    fontSize: 14,
    color: '#777',
    marginTop: 15,
  },
  loginLink: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  footerImage: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  },
});
