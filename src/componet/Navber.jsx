import React from 'react';
import { NavLink } from 'react-router';
 

const Navber = () => {
    return (
        <div className=' flex justify-between my-4'>
           <div className=""></div>
           <div className=" flex gap-5  ">
            <NavLink className={ ({isActive})=> isActive ? "font-semibold text-text-200   bg-neutral p-2 rounded-lg shadow-sm text-text-200 text-lg " : "p-2 text-accent text-lg"} to="/">Home      </NavLink>
            <NavLink className={ ({isActive})=> isActive ? "font-semibold text-text-200  bg-neutral p-2 rounded-lg shadow-sm text-text-200 text-lg" : "p-2 text-accent text-lg"} to="/about">About</NavLink>
            <NavLink className={ ({isActive})=> isActive ? "font-semibold text-text-200  bg-neutral p-2 rounded-lg shadow-sm text-text-200 text-lg " : "p-2 text-accent text-lg"} to="/career">Career</NavLink>
            
           </div>
           <div className=" flex gap-2">
            <img src="https://i.ibb.co.com/hR0Rfq0j/user.png" alt='' />
            <button className='btn px-10 btn-primary text-text-50 font-semibold'>Login</button>
           </div>
        </div>
    );
};

export default Navber;