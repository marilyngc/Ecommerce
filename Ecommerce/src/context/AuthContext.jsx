import { createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
 export const  AuthContext = createContext();

 export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({
        logged:false,
        email:null,
    })

    const login = (values) => {
        setUser({
            logged:true,
            email:values.email,
        })
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then((userCredential) => {
            console.log(userCredential)
        })
    }
    return (
        <AuthContext.Provider value={{user,login,register}}>
{children}

        </AuthContext.Provider>
    )
 }