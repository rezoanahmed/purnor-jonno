import { useState } from "react";
import MyDonationCard from "./MyDonationCard";


const Donations = () => {
    const myDonations = JSON.parse(localStorage.getItem('donation'));
    // console.log(myDonations.length);
    const [show, setShow]=useState(false);

    

    return (
        <>
        <div className="text-center font-medium text-xl">
        {myDonations==null?"No donations yet":""}
        </div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {
                show?myDonations?.map(element => <MyDonationCard key={element.id} donation={element}></MyDonationCard>)
                :myDonations?.slice(0,4).map(element => <MyDonationCard key={element.id} donation={element}></MyDonationCard>)
            }        
        </div>
        <div className="flex justify-center mt-10">
            
        <button onClick={()=>setShow(!show)} className="bg-green-900 text-white p-2 rounded-md">{show?"See Less":"See All"}</button>
        </div>

    </>
    );
};

export default Donations;