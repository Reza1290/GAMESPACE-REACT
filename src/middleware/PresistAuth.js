import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PresistAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const refresh = useRefe
    const { isLogin } = useAuth();



    useEffect(() => {
        
    }, [isLoading])

    return ( 
        <>
        {isLoading? <p>loading</p> : <Outlet/>}
        </>
    )
    
}


export default PresistAuth

