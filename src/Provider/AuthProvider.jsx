
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(null);
    const [ loading , setLoading ] = useState(true);

    const createUser = ( email , password ) =>{
         return createUserWithEmailAndPassword(auth , email , password );
    }

    const logInUser =( email , password ) =>{
        return signInWithEmailAndPassword( auth , email , password );
    }
   
    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth , ( user ) =>{
            setUser(user)
            setLoading(false)
            console.log(user);
            
         })

         return () => {
           return  unsubscribe();
         }
    },[])
    

    const authInfo = {
         user , 
         loading ,
         createUser,
         logInUser
    }



    return (
        <AuthContext.Provider value={ authInfo } >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;