import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firbase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userCreate = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            // console.log(currentUser)
            setLoading(false)
        })
        return(() => {
            unSubscribe()
        })
    },[])

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo ={
        user,
        loading,
        userCreate,
        userLogIn,
        userLogOut

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;