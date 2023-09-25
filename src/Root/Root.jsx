import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import DonantionsContainer from "../components/DonationsContainer/DonantionsContainer";


const Root = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <DonantionsContainer></DonantionsContainer> */}



        </div>
    );
};

export default Root;