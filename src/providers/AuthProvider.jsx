
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            
        });
        return ()=> {
            unSubscribe();
            
        }
    },[])

    const authInfo = { user, loading, createUser, signInUser, logOut, loginWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 * ****/