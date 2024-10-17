import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PatientList from './pages/PatientList';
import PatientDetail from './pages/PatientDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthorizationForm from './components/PriorAuthorizationForm';

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("Basys.ai.Tken");
    if (token) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <PatientList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/patient/:id" 
          element={
            <ProtectedRoute>
              <PatientDetail />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/authorization" 
          element={
            <ProtectedRoute>
              <AuthorizationForm />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
