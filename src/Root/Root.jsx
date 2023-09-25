import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";


const Root = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;