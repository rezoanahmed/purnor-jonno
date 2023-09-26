import { useState } from "react";
import { Link } from "react-router-dom";


const Hero = () => {
    const [inputValue, setInputValue] = useState('');  // State for the input value

    // This function is triggered whenever the input value changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    
    const handleClick=()=>{
        console.log(inputValue);
        
        
    }
    return (
        <>
            <div>
                <div className="mt-5 hero h-[70vh] md:h-[50vh]" style={{ backgroundImage: 'url(../../../public/Banner.png)' }}>
                    <div className="hero-overlay bg-white bg-opacity-80"></div>
                    <div className="hero-content text-center text-black">
                        <div className="flex flex-col items-center">
                            <h1 className="mb-5 text-xl md:text-4xl font-bold">I Grow By Helping People In Need</h1>
                            <div className='flex'>
                                <input value={inputValue}
                                    onChange={handleInputChange} type="text" placeholder="Search Here" className="input input-bordered w-3/4 lg:w-full text-sm max-w-xs" />
                                <Link onClick={()=>handleClick()} className="flex justify-center items-center bg-red-400 text-sm px-4 rounded-r-lg -mx-2 text-white">Search</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Hero;