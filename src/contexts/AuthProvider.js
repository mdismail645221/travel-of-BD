import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create User sing in --->
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // lon in in user 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut 
    const lotOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google sing in 
    const googleProvider = new GoogleAuthProvider();
    const googleSingIn = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    }



    // onAuthStateChanged [useffect modde use korte hobe----->]

    useEffect(() => {
        const unSubcribed = onAuthStateChanged(auth, currentUser => {
            console.log('OnAuthstateChanged uffect:', currentUser)
            setUser(currentUser)
            setLoading(true)
        })
        return () => {
            unSubcribed()
        }
    }, [auth]);




const [travels1, setTravels] = useState([])
    // loader data 
    useEffect(()=>{
        fetch(`https://travel-bd-server-gamma.vercel.app/travels`)
        .then(res=> res.json())
        .then(data=> setTravels(data))
    },[])

    // console.log(travels)



    const authInfo = {
        user,
        createUser,
        logIn,
        lotOut,
        googleSingIn,
        travels1
    }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;