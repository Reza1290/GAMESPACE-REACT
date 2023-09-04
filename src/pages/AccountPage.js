import { useEffect } from "react";
import AccountContent from "../content/AccountContent"
import useAuth from "../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { fireDb } from "../firebase";


const AccountPage = () =>{
    const {isLogin} = useAuth();
    // console.log(isLogin);
    const user = isLogin.user;


    return (
        <>
            <AccountContent account={user}/>
        </>
    )
}

export default AccountPage