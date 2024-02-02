import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null)
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider()

    const createUser= (email,password)=>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const fbSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,fbProvider)
    }

    const logOut=() =>{
        setLoading(true)
        return signOut(auth)

    }

    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }


     // user observe 
     useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            setUser(newUser)
            setLoading(false)
        })
        return unSubscribe
    }, [])

    const authInfo={user,loading, createUser,signIn,googleSignIn, logOut,updateUserProfile,fbSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;