 
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebage/_firebage';
import { useEffect, useState } from 'react';


const AuthProvaider = ({children }) => {
    const[user  , setUser] = useState(null)
    const[url  , setUrl] = useState(null)
    const[loding  , setLoding] = useState(true);
    console.log(user ,loding)
    
    // registation
    const registation = (email ,password) =>{
         setLoding(true)
        return createUserWithEmailAndPassword(auth , email ,password )
    }
    // signin
    const signin =(email ,password) =>{
         setLoding(true)
       return signInWithEmailAndPassword(auth ,email ,password)
    }  
    /**logout */
    const logOut =()=>{
         setLoding(true)
        return signOut(auth)
    } 
    // sin in with ggogle
    const googleSingIn = (provider) =>{
        setLoding(true)
        return signInWithPopup(auth , provider)
    }
       /**uer fund */
       useEffect(()=>{
            const unSubscribre = onAuthStateChanged(auth , (currentUser) =>{
                setUser(currentUser)
                setLoding(false)
            })
            return () =>{
                unSubscribre()
            }
       } ,[])
    const userinfo = {
        user,
        url ,
        loding ,
        setLoding ,
        setUrl,
        setUser ,
        registation ,
        signin,
        logOut,
        googleSingIn,

    }
    return (
         <AuthContext.Provider value={userinfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvaider;