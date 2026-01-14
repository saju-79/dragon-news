import React from 'react';
import HomeLaout from '../componet/HomeLaout';
import Navber from '../componet/Navber';
import { Outlet, useNavigation,  } from 'react-router';
import RightNav from '../pages/RightNav';
import LeftNav from '../pages/LeftNav';
import Daynamic from '../componet/Daynamic';
 
import Loding from '../componet/Loding';
 
 

const Root = () => {
    const {state} = useNavigation()
    
    return (
        <div className='w-11/12 mx-auto py-8'>
              <HomeLaout></HomeLaout>
                 <Daynamic></Daynamic>
              <Navber></Navber>
               <div className=" flex gap-5   ">
                <aside className='nav-left w-1/4 sticky top-0 h-fit   p-2 rounded-sm'>
                 <LeftNav></LeftNav>
                </aside>
                <section className=' main w-1/2   p-2 rounded-sm'>
                   {state == "loading" ?<Loding></Loding> :  <Outlet></Outlet>}
                </section>
                <aside className='nav-right w-1/4 scroll-auto h-fit top-0   max-h-screen     p-2 rounded-sm'>
                <RightNav></RightNav>
                </aside>
               </div>
         </div>
    );
};

export default Root;