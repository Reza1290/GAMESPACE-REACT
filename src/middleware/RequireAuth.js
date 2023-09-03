import useAuth from "../hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuth = ({ allowedRoles }) => {
    const { isLogin } = useAuth();
    const location = useLocation();

    // console.log(isLogin.user.roles.find(roles => allowedRoles?.includes(roles)));
    
    return(
        isLogin?.user?.roles.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : isLogin?.user
                ? <Navigate to="/gabahayata" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />

    )
}


export default RequireAuth;