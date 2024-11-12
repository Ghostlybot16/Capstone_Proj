import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import SignUpPageOne from './Components/Signup';
import SignUpPageTwo from './Components/Apply';
import LoginPage from './Components/Login';

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
