import React from 'react';
import HomeLaout from '../componet/HomeLaout';
import Daynamic from '../componet/Daynamic';
import Navber from '../componet/Navber';
import { Outlet } from 'react-router';
import RightNav from '../pages/RightNav';

const Ditels = () => {
    return (
          <div className='w-11/12 mx-auto py-8'>
              <HomeLaout></HomeLaout>
                 <Daynamic></Daynamic>
              <Navber></Navber>
               <div className=" flex gap-5   ">
                
                <section className=' main w-3/4   p-2 rounded-sm'>
                    <Outlet></Outlet>
                </section>
                <section className='nav-right w-1/4   max-h-screen     p-2 rounded-sm'>
                <RightNav></RightNav>
                </section>
               </div>
         </div>
    );
};

export default Ditels;