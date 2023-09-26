import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold font-serif text-violet-950">404 Error!</h1>
            <br />
            <p>Your requested page is not found</p>
            <br />
            <Link to='/' className="font-semibold p-2 text-white bg-violet-950 rounded-md">Go back to Homepage</Link>
            
        </div>
    );
};

export default Error;