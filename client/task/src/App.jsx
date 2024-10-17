import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './pages/PatientList';
import PatientDetail from './pages/PatientDetailes';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthorizationForm from './componets/PriorAuthorizationForm';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PatientList />} />
          <Route path="/patient/" element={<PatientDetail />} />
          <Route path="/authorization/" element={<AuthorizationForm />} />
    
        </Routes>
    </Router>
  );
}

export default App;
