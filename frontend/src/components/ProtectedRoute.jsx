import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRole = 'patient' }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();

    if (loading) return null; // Or a loader component

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRole && user.role !== allowedRole) {
        return <Navigate to={user.role === 'practitioner' ? '/practitioner/dashboard' : '/patient/dashboard'} replace />;
    }

    return children;
};

export default ProtectedRoute;
