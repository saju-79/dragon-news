import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../ContextApi/AuthContext';

 

const Navber = () => {
    const {user ,logOut  } =  use(AuthContext)
          const handelLogOut =(e)=>{
             e.preventDefault();
             logOut()
             .then( ()=>{
                 alert("LogOut Done")
             })
             .catch(erre =>{
                console.log(erre)
             })
          } 

             
    return (
        <div className=' flex justify-between p-4'>
           <div className=" text-primary font-bold text-lg"> {user?.email} </div>
           <div className=" flex gap-5  ">
            <NavLink className={ ({isActive})=> isActive ? "font-semibold text-text-200   bg-neutral p-2 rounded-lg shadow-sm text-text-200 text-lg " : "p-2 text-accent text-lg"} to="/">Home      </NavLink>
            <NavLink className={ ({isActive})=> isActive ? "font-semibold text-text-200  bg-neutral p-2 rounded-lg shadow-sm text-text-200 text-lg" : "p-2 text-accent text-lg"} to="/about">About</NavLink>
            <NavLink className={ ({isActive})=> isActive ? "font-semibold text-text-200  bg-neutral p-2 rounded-lg shadow-sm text-text-200 text-lg " : "p-2 text-accent text-lg"} to="/career">Career</NavLink>
            
           </div>
           <div className=" flex gap-3 items-center">
            <img className='w-20 h-20 rounded-full' src= { user ? user.photoURL :"https://i.ibb.co.com/hR0Rfq0j/user.png"   } alt='' />
            <Link to='/auth/login' >{user ? <button onClick={handelLogOut}  className='btn px-10 btn-primary text-text-50 font-semibold'>LogOut</button> : <button  className='btn px-10 btn-primary text-text-50 font-semibold'> Login</button>}</Link>
           </div>
        </div>
    );
};
  
export default Navber;