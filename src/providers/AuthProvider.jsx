import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
        .then(()=> {
            setUser({...user, displayName:name, photoURL:photoUrl});
            setLoading(false);
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
        .then((res)=>{
            console.log(res);
            toast.success('Google login successful')
        })
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
        .then(()=>{
            toast.success('Github login successful')
        })
    }

    const logOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        updateUserProfile,
        googleLogin,
        githubLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
