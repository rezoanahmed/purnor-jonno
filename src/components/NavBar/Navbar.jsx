import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="mt-2 flex flex-col md:flex-row justify-between items-center">
           <div>
                <Link to='/'><img src="../../../public/Logo.png" alt="" className="w-36"/></Link>
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