import DonationCard from "../DonationCard/DonationCard";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";

const DonantionsContainer = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                {
                   data.map(element => <DonationCard key={element.id} donation={element}></DonationCard>) 
                }
            </div>
        </div>
    );
};

export default DonantionsContainer;