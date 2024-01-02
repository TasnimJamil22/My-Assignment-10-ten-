import React, { useContext } from 'react';
 
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
 
 

const RequireAuth = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <span className="loading loading-spinner text-accent"></span>
    }
    // if(error) {
    //     return (
    //       <div>
    //         <p>Error: {error}</p>
    //       </div>
    //     )
    // }

    if(!user){
        return <Navigate to='/login'
         state={{ from: location }} replace={true} />;
    }
    return children;
};

export default RequireAuth;