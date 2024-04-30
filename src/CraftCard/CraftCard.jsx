import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CraftCard = ({ craft }) => {

    const { _id, photo, itemName, price, stockStatus, subcategoryName, rating } = craft;

    return (
        <div>
            <div className="card border border-[#D2B48C] cursor-pointer bg-base-300">
                <figure className='mt-6 bg-[#F3F3F3] mask mask-hexagon-2 '><img src={photo} alt="Book" /></figure>
                <div className='flex justify-between p-6'>
                    <span className='btn btn-sm text-[#40A2D8] rounded-full'>Price: {price}$</span>
                    <span className='btn btn-sm text-[#40A2D8] rounded-full'>Rating: {rating}.00</span>
                </div>
                <div className="flex justify-between items-center px-6 ">
                    <div>
                        <h2 className="text-xl font-semibold">{itemName} </h2>
                        <p className='font-medium opacity-70'>{subcategoryName} </p>
                    </div>
                    <h2 className='font-bold'>{stockStatus}</h2>
                </div>
                <Link to={`/details/${_id}`} className="btn btn-sm md:btn-md bg-[#D2B48C] m-6">Details</Link>
            </div>
        </div>
    );
};


CraftCard.propTypes = {
    craft: PropTypes.object
};


export default CraftCard;
