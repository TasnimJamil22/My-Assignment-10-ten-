import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
 
import auth from '../../../firebase.config';

const RequireAuth = ({children}) => {
    const [user,loading,error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return  <span className="loading loading-spinner text-accent"></span>
    }
    if(error) {
        return (
          <div>
            <p>Error: {error}</p>
          </div>
        )
    }

    if(!user){
        return <Navigate to='/login'
         state={{ from: location }} replace={true} />;
    }
    return children;
};

export default RequireAuth;