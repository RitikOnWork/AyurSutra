import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import PatientDashboard from './pages/patient/PatientDashboard';
import MyTherapies from './pages/patient/MyTherapies';
import Notifications from './pages/patient/Notifications';
import Feedback from './pages/patient/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/patient" element={<DashboardLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="therapies" element={<MyTherapies />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
