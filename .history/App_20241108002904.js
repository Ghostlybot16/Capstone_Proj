import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import SignUp from './Components/SignUp';

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = (email, password) => {
    // Handle sign-up logic here, e.g., sending data to the backend
    console.log("User signed up with email:", email);
    setIsSignedUp(true);
  };

  if (!isSignedUp) {
    return <SignUp onSignUp={handleSignUp} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Render the main app content here after signup */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
