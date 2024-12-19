import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookAppointment from './pages/BookAppointment';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUpForm from './components/SignUpForm';
import ServicesPage from './pages/ServicesPage';
import Sidebar from './components/dashbord/Sidebar';
import App1 from './components/dashbord/App1';

// Mock function to check authentication
const isAuthenticated = () => {
  return sessionStorage.getItem('token'); // Replace with your actual authentication logic
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/sign-in" />;
};

// Default Route Component
const DefaultRoute = () => {
  return isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/sign-in" />;
};

export default function Approuter() {
  return (
    <Router basename="/physiotherapist">
      <Routes>
        {/* Root Route - Default redirection */}
        <Route path="/" element={<DefaultRoute />} />
        
        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-appointment"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <ServicesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sidebar"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <App1 />
            </ProtectedRoute>
          }
        />
        
        {/* Public Routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}
