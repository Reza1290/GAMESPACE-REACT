import { useEffect } from "react"
import { auth } from "../../firebase"
import useAuth from "../../hooks/useAuth"
import { redirect } from "react-router-dom";



const SignOut = () => {
    const { setAuth } = useAuth();
    useEffect(() => {
        auth.signOut();
        setAuth({})
        redirect('login')
    }, [])
    
    
    return(
        <>
        
        </>
    )
}

export default SignOut