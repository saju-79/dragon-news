import React from 'react';
import Navber from '../componet/Navber';
import SignIn from './SignIn';
import Registation from './Registation';
import { Outlet } from 'react-router';

const UserInfo = () => {
    return (
        <div className=' bg-neutral h-screen'>
           <div className="w-11/12 mx-auto ">
             <Navber></Navber>
                <div className=" h-screen items-center my-20">
                  <Outlet></Outlet>
                   
                </div>
           </div>
        </div>
    );
};

export default UserInfo;