import React from 'react';
import HomeLaout from '../componet/HomeLaout';
import Navber from '../componet/Navber';
import { Outlet } from 'react-router';
import RightNav from '../pages/RightNav';
import LeftNav from '../pages/LeftNav';
import Daynamic from '../componet/Daynamic';
 
 

const Root = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>
              <HomeLaout></HomeLaout>
                 <Daynamic></Daynamic>
              <Navber></Navber>
               <div className=" flex gap-5   ">
                <section className='nav-left w-1/4   p-2 rounded-sm'>
                 <LeftNav></LeftNav>
                </section>
                <section className=' main w-1/2   p-2 rounded-sm'>
                    <Outlet></Outlet>
                </section>
                <section className='nav-right w-1/4   p-2 rounded-sm'>
                <RightNav></RightNav>
                </section>
               </div>
         </div>
    );
};

export default Root;