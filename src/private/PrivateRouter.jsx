import React, { use } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { Navigate } from 'react-router';
import Loding from '../componet/Loding';

const PrivateRouter = ({children}) => {
    const {user ,loding} = use(AuthContext)
     if(loding){
       return  <>
         <Loding></Loding>
          
        </> 
     }

     if (!user) {
         return <Navigate state={location.pathname} to="/auth/login"></Navigate>
     }
    return children
};

export default PrivateRouter;