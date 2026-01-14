 
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebage/_firebage';
import { useEffect, useState } from 'react';


const AuthProvaider = ({children }) => {
    const[user  , setUser] = useState(null)
 
    const[loding  , setLoding] = useState(true);
  
    
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
    // updateData 
    const updateUser = (data)=>{
        return updateProfile(auth.currentUser , data);
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
    
        loding ,
        setLoding ,
    
        setUser ,
        registation ,
        signin,
        logOut,
        googleSingIn,
        updateUser,

    }
    return (
         <AuthContext.Provider value={userinfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvaider;