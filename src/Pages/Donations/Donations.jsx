import MyDonationCard from "./MyDonationCard";


const Donations = () => {
    const myDonations = JSON.parse(localStorage.getItem('donation'));
    console.log(myDonations);
    
    return (
        <>
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {
                myDonations.map(element => <MyDonationCard key={element.id} donation={element}></MyDonationCard>)
            }        
        </div>
    </>
    );
};

export default Donations;