// App.js
import React from 'react';
import { View, Alert } from 'react-native';
import SignUp from './Components/Signup';

export default function App() {
  const handleSignUp = (email, password) => {
    Alert.alert('Sign Up Successful', `Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <SignUp onSignUp={handleSignUp} />
    </View>
  );
}
