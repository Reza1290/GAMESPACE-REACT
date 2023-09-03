
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../component/NavBar"
import SideBar from "../component/SideBar"
import HomeContent from "../content/HomeContent"
import useAuth from "../hooks/useAuth"


// import Login from "./auth/Login"


const HomePage = ({auth}) => {
    return(
        <>
            <HomeContent/>
        </>
    )
}

export default HomePage