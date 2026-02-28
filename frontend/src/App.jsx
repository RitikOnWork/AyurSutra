import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardLayout from './components/layout/dashboard/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Patient Pages
import PatientDashboard from './pages/patient/PatientDashboard';
import MyTherapies from './pages/patient/MyTherapies';
import Notifications from './pages/patient/Notifications';
import Feedback from './pages/patient/Feedback';
import OnlineConsultation from './pages/patient/OnlineConsultation';

// Practitioner Pages
import PractitionerDashboard from './pages/practitioner/PractitionerDashboard';
import PatientManagement from './pages/practitioner/PatientManagement';
import Settings from './pages/practitioner/Settings';
import TherapyScheduler from './pages/practitioner/TherapyScheduler';
import PrakritiAssessment from './pages/practitioner/PrakritiAssessment';
import {
  TherapyTracking,
  Reports
} from './pages/practitioner/PractitionerModules';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Patient Routes */}
          <Route
            path="/patient"
            element={
              <ProtectedRoute allowedRole="patient">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PatientDashboard />} />
            <Route path="therapies" element={<MyTherapies />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="consultation" element={<OnlineConsultation />} />
          </Route>

          {/* Practitioner Routes */}
          <Route
            path="/practitioner"
            element={
              <ProtectedRoute allowedRole="practitioner">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PractitionerDashboard />} />
            <Route path="patients" element={<PatientManagement />} />
            <Route path="assessment" element={<PrakritiAssessment />} />
            <Route path="scheduler" element={<TherapyScheduler />} />
            <Route path="tracking" element={<TherapyTracking />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
