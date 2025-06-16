import React, { use } from 'react';



import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading){
        return loading;
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/signIn" state={{ from: location }} replace />
};

export default PrivateRoute;