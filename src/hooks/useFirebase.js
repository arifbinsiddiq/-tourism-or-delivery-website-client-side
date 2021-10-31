import { useEffect, useState } from 'react';
import firebaseAuthentication from '../components/pages/Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";



// firebase call
firebaseAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
   

    const signInUsingGoogle = ()=>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }


    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
    
    return{
        user,
        logOut,
        signInUsingGoogle,
        isLoading
    }
};

export default useFirebase;