import React, { use, useState } from 'react';
import Navber from '../componet/Navber';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../ContextApi/AuthContext';
 


const SignIn = () => {
  const [masge , setMasge] = useState("");
  const navigatte =  useNavigate()
    const {signin , user , setUser } = use(AuthContext)
 console.log(user)
    const handelLogin =(e)=>{
        e.preventDefault();
        setMasge("")
        const from = e.target ;
        const email = from.email.value;
        const password = from.password.value;
          signin(email ,password)
          .then((result) =>{
             setUser(result.user)
             navigatte(location.state || '/')
              setMasge("login fu")
          }).catch(erre =>{
            console.log(erre)
            setMasge("Password not mach")
          })
        
    }
    return (
        
    <div className="card bg-base-100     p-8 mx-auto w-full max-w-2xl  shrink-0 shadow-2xl">
         <h1 className="text-3xl font-bold text-center">Login your account</h1>
      <div className="p-10">
        <form onSubmit={handelLogin} className=" space-y-2">
            {/* email */}
          <label className="label text-start">Email</label> <br />
            <div>
    <label className="input validator w-11/12 mx-auto  join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input
       name='email' 
       type="email" 
       placeholder="mail@site.com" 
       required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
        

          {/* password */}
          <label className="label text-start ">Password</label> <br />
            <label className="input validator mx-auto w-11/12">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    name='password'
    type="password"
    required
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral bg-primary w-11/12 mx-auto mt-4 py-6">Login</button>
        </form>
        <p className=' p-2'> Dont’t Have An Account ?<Link to="/auth/registation" className='text-secondary font-bold'> Register</Link></p>
        <p className='text-secondary'>{masge}</p>
      </div>
    </div>
   
    );
};

export default SignIn;