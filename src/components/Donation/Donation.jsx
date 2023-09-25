import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Donation = () => {
    const {id} = useParams();
    const data = useLoaderData();

    const [donation, setDonation] = useState({});
    useEffect(()=>{
        const donationDetails = data.find(element=>element.id==id);
        setDonation(donationDetails)
    },[data, id])
    const {title, picture, description, price} = donation;
    return (
        <div>
            {/* hello: {id} {title} */}
            <div className="mt-10 mx-auto">
                <img src={picture} alt="" className="w-full"/>
                <div className="bg-black bg-opacity-40 -mt-[120px] absolute w-3/4 p-8">
                    <button className="text-white bg-red-500 p-4 rounded-md">Donate ${price}</button>
                </div>
                <div className="space-y-2">
                <h1 className="text-4xl font-medium">{title}</h1>
                <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Donation;