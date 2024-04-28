
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftTable = ({ craft }) => {

    const { _id, photo, itemName, price, stockStatus, subcategoryName, rating } = craft;

    return (
        <tbody className='md:text-2xl'>
            <tr>
                <td className='w-4/12 p-0'>
                    <div className="lg:flex items-center text-center lg:text-left gap-2 lg:gap-6">
                        <div className="avatar p-1 md:p-3">
                            <div className="mask mask-hexagon-2 w-16 md:w-36">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div className=''>
                            <div className="font-bold">{itemName}</div>
                            <div className="text-sm opacity-50">{subcategoryName}</div>
                        </div>
                    </div>
                </td>
                <td className='w-2/12 p-0  md:p-4 text-center md:text-left'>
                    {rating}.00
                </td>
                <td className='w-2/12 p-0  md:p-4 text-center md:text-left'>
                    {price} $
                </td>
                <td className='w-2/12 p-0  md:p-4 text-center md:text-left'>
                    {stockStatus}
                </td>
                <th className='w-2/12 p-0  md:p-4 text-center'>
                    <Link to={`/details/${_id}`} className="btn btn-sm md:btn-md bg-[#D2B48C]">Details</Link>
                </th>
            </tr>
        </tbody>
    );
};

CraftTable.propTypes = {
    craft: PropTypes.array
};


export default CraftTable;
