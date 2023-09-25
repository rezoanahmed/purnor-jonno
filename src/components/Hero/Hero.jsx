

const Hero = () => {
    return (
        <div>
            <div className="mt-5 hero h-96" style={{ backgroundImage: 'url(../../../public/Banner.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center text-black">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className='flex'>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-error text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;