import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="mt-2 flex justify-between items-center">
           <div>
                <img src="../../../public/Logo.png" alt="" className="w-36"/>
            </div> 
            <div className="flex gap-2">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/donantions'>Donations</NavLink>
                <NavLink to='/stats'>Statistics</NavLink>
            </div>
        </div>
        {/* <Outlet></Outlet> */}
        
        </>
    );
};

export default Navbar;