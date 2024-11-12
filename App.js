// App.js
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import WelcomePage from './Components/Welcomepage';
import SignUpPageOne from './Components/Signup';
import SignUpPageTwo from './Components/Apply';
import LoginPage from './Components/Login';
import PendingApprovalPage from './Components/Approval';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 for WelcomePage, 1 for SignUpPageOne, etc.
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
    setCurrentPage(4);
  };

  const handleLogout = () => {
    setFormData({});
    setCurrentPage(3);
  };

  const handleContactSupport = () => {
    Alert.alert('Contact Support', 'Please contact support at support@municipaloffice.com');
  };

  return (
    <View style={{ flex: 1 }}>
      {currentPage === 0 && (
        <WelcomePage onLogin={() => setCurrentPage(3)} onSignUp={() => setCurrentPage(1)} />
      )}
      {currentPage === 1 && <SignUpPageOne onNext={handleNextPage} />}
      {currentPage === 2 && <SignUpPageTwo onSubmit={handleSubmit} onBack={handlePreviousPage} />}
      {currentPage === 3 && <LoginPage />}
      {currentPage === 4 && (
        <PendingApprovalPage onLogout={handleLogout} onContactSupport={handleContactSupport} />
      )}
    </View>
  );
}
