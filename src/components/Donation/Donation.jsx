import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const Donation = () => {

    // passing the id and show the donation details based on their id
    const {id} = useParams();
    const data = useLoaderData();

    const [donation, setDonation] = useState({});
    useEffect(()=>{
        const donationDetails = data.find(element=>element.id==id);
        setDonation(donationDetails)
    },[data, id])
    const {title, picture, description, price, text_color} = donation;

    // click handler
    const donationHandler = () =>{
        
        const totalDonation = [];

        const addedDonation = JSON.parse(localStorage.getItem("donation"))

        if(!addedDonation){
            totalDonation.push(donation);
            localStorage.setItem('donation', JSON.stringify(totalDonation))
        }else{
            totalDonation.push(...addedDonation,donation);
            localStorage.setItem('donation', JSON.stringify(totalDonation))
            
        }
        swal("Thanks for the donation", "❤️❤️❤️", "success");
        

    }
    return (
        <div>
            {/* hello: {id} {title} */}
            <div className="mt-10 mx-auto">
                <img src={picture} alt="" className="w-full mx-auto"/>
                <div className="bg-black bg-opacity-50 -mt-10 md:-mt-[120px] absolute w-3/4 p-1 md:p-8">
                    <button onClick={()=> donationHandler()} className="text-white p-1 md:p-4 rounded-md" style={{backgroundColor:text_color}}>Donate ${price}</button>
                </div>
                <div className="space-y-2">
                <h1 className="text-xl md:text-4xl font-medium">{title}</h1>
                <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Donation;