import { Link } from "react-router-dom";

const MyDonationCard = ({donation}) => {
    const {id, title,picture, category, price, bg_color, text_color, category_color} = donation;
    return (
        <div className="mt-5">
            <div className="flex flex-col md:flex-row items-center gap-2 rounded-md" style={{backgroundColor:bg_color}}>
                <div className="">
                    <img src={picture} alt="" className="rounded-md h-200px" />
                </div>
                <div className="p-2 space-y-2">
                    <p className="text-sm inline-block p-0.5 rounded-md" style={{color:text_color, backgroundColor:category_color}}>{category}</p>
                    <h1 className="text-2xl font-medium">{title}</h1>
                    <p className="font-bold text-xl" style={{color:text_color}}>${price}</p>
                    <Link to={`/donation/${id}`}><button className="p-2 rounded-md font-medium text-white" style={{backgroundColor:text_color}}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyDonationCard;