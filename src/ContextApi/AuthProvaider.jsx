 
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebage/_firebage';
import { useEffect, useState } from 'react';


const AuthProvaider = ({children }) => {
    const[user  , setUser] = useState(null)
    const[url  , setUrl] = useState(null)
    // registation
    const registation = (email ,password) =>{
        return createUserWithEmailAndPassword(auth , email ,password )
    }
    // signin
    const signin =(email ,password) =>{
       return signInWithEmailAndPassword(auth ,email ,password)
    }  
    /**logout */
    const logOut =()=>{
        return signOut(auth)
    } 
    // sin in with ggogle
    const googleSingIn = (provider) =>{
        return signInWithPopup(auth , provider)
    }
       /**uer fund */
       useEffect(()=>{
            const unSubscribre = onAuthStateChanged(auth , (currentUser) =>{
                setUser(currentUser)
            })
            return () =>{
                unSubscribre()
            }
       } ,[])
    const userinfo = {
        user,
        url ,
        setUrl,
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