'use client'

import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';


const AuthContext = createContext({})


export const AuthProvider = ({children}) => {
    const [ isLogin, setAuth] = useState({});
    const [ isLoading, setIsLoading] = useState(true);
    // const refresh = useRefe
    // const { isLogin } = useAuth();

    // const [ set]
    useEffect(() => {
        auth.onAuthStateChanged((userCreds) => {

            const user = userCreds;
            const accessToken = userCreds?.accessToken;
            
            if(userCreds != null){userCreds.roles = ['user']}
            
            setAuth({user, accessToken}); 
            setIsLoading(false);
        })
      
    }, [])

    if(isLoading){ return (<></>)}
    

    // console.log(isLogin);
    return (
        <AuthContext.Provider value={{ isLogin, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext