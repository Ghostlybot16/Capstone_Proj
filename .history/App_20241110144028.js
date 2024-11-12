// App.js

import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import SignUpPageOne from './Components/Signup';
import SignUpPageTwo from './Components/Apply';
import LoginPage from './Components/LoginPage';
import PendingApprovalPage from './Components/Approval';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1); // 1 for SignUpPageOne, 2 for SignUpPageTwo, 3 for LoginPage, 4 for PendingApprovalPage
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
    // Redirect to Pending Approval page after showing alert
    setCurrentPage(4);
  };

  const handleLogout = () => {
    // Reset data and navigate to the login page
    setFormData({});
    setCurrentPage(3);
  };

  const handleContactSupport = () => {
    Alert.alert('Contact Support', 'Please contact support at support@municipaloffice.com');
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
      {currentPage === 4 && (
        <PendingApprovalPage onLogout={handleLogout} onContactSupport={handleContactSupport} />
      )}
    </View>
  );
}
