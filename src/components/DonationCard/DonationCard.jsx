import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const { id, picture, title, category, bg_color, text_color, category_color } = donation;

    return (

        <Link to={`donation/${id}`}>
            <div>
                <img src={picture} alt="" />
                <div className="p-2 rounded-md" style={{ backgroundColor: bg_color }}>
                    <p className="inline p-1 rounded-md text-sm" style={{ color: text_color, backgroundColor: category_color }}>{category}</p>
                    <h1 className="text-xl font-bold my-2" style={{ color: text_color }}>{title}</h1>
                </div>
            </div>
        </Link>

    );
};
DonationCard.propTypes={
    donation: PropTypes.object.isRequired
}
export default DonationCard;