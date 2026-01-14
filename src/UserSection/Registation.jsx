 import React, { use } from 'react';
import { MdDriveFileRenameOutline, MdInsertPhoto } from 'react-icons/md';
import { AuthContext } from '../ContextApi/AuthContext';
import { Link, useNavigate } from 'react-router';
 
 const Registation = () => {
    const {registation  , setUser ,updateUser} = use(AuthContext);
    const navigate = useNavigate()
    const handelregistation =(e)=>{
              e.preventDefault()
             const from =e.target ;
             const name = from.name.value;
             const url = from.url.value;
             const email = from.email.value;
             const password = from.password.value;
         
             

            registation(email ,password)
            .then((result) =>{
              const user = result.user
                 updateUser({displayName : name , photoURL:url })
                 .then(()=>{
                       setUser({...user , displayName: name , photoURL:url}) 
                 })
                 .catch(e=>{
                  console.log(e)
                   setUser(user)
                 })
                  navigate(location.state || '/')
            }).catch(err =>{
                console.log(err)
                
            })
    }
    return (
        <div className="card bg-base-100     p-8 mx-auto w-full max-w-2xl  shrink-0 shadow-2xl">
         <h1 className="text-3xl font-bold text-center">Register your account</h1>
      <div className="p-10">
        <form  onSubmit={handelregistation}  className=" space-y-2">
            {/* name */}
          <label className="label text-start">Name </label> <br />
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
          {/* <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> */}
          <MdDriveFileRenameOutline size={28} />
        </g>
      </svg>
      <input name='name' type="name" placeholder="name" required />
    </label>
    
  </div>
            {/* img url*/}
          <label className="label text-start">Image</label> <br />
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
         {/*  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> */}
          <MdInsertPhoto size={28} />
        </g>
      </svg>
      <input name='url' type="url" placeholder="url" required />
    </label>
    
  </div>
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
      <input name='email' type="email" placeholder="mail@site.com" required />
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

          <div className='mt-3  '> 
            <input type="checkbox" defaultChecked className="checkbox checkbox-md mr-3" />
           <span className=' text-info font-medium'> Accept Term & Conditions</span>
            </div>
          <button type='submit' className="btn btn-neutral bg-primary w-11/12 mx-auto mt-4 py-6">Register</button>
        </form>
        <p className=' p-2'> Dont’t Have An Account ?<Link to="/auth/login" className='text-secondary font-bold'> Login</Link></p>
      </div>
    </div>
    );
 };
 
 export default Registation;