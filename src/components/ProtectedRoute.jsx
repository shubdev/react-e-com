import React from 'react'
import { Navigate } from "react-router-dom";
const ProtectedRoute = () => {

    let isAuthenticate = false;

    if (!isAuthenticate) {
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}

export default ProtectedRoute