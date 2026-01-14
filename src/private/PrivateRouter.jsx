import React, { use } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user} = use(AuthContext)
     if(user){
       return <>
          <div className=" justify-center items-center text-center my-15">
             <span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
          </div>
        </>
     }

     if (!user) {
         return <Navigate state={location.pathname} to="/auth/login"></Navigate>
     }
    return children
};

export default PrivateRouter;