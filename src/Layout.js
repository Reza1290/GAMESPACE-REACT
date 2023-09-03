import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import useAuth from "./hooks/useAuth";

const Layout = ({auth}) => {
    const { isLogin } = useAuth();

    if(isLogin?.user) auth = true;
    // console.log(isLogin);
    // console.log(isLogin.user.uid);
    return (
        <main className="">
            <NavBar/>
            <SideBar auth={auth} active={'home'}/>
            <Outlet/>
        </main>
    )
}

export default Layout