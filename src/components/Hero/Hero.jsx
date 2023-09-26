


const Hero = () => {
    return (
        <>
        <div>
            <div className="mt-5 hero h-[70vh] md:h-[50vh]" style={{ backgroundImage: 'url(../../../public/Banner.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center text-black">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-5 text-xl md:text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className='flex'>
                            <input type="text" placeholder="Search Here" className="input input-bordered w-3/4 lg:w-full text-sm max-w-xs" />
                            <button className="bg-red-400 text-sm px-4 rounded-r-lg -mx-2 text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Hero;