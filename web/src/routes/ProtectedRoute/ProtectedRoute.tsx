// ProtectedRoute.tsx
import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  //return <>{withAuthenticationRequired(children, { onRedirecting: () => <div>Loading...</div> })}</>;
};


