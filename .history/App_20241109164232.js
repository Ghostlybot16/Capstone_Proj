import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import SignUpPageOne from './Components/Signup';
import SignUpPageTwo from './Components/Apply';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
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
    // Here you can send `completeData` to a backend server or perform other actions.
  };

  return (
    <View style={{ flex: 1 }}>
      {currentPage === 1 ? (
        <SignUpPageOne onNext={handleNextPage} />
      ) : (
        <SignUpPageTwo onSubmit={handleSubmit} onBack={handlePreviousPage} />
      )}
    </View>
  );
}
