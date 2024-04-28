
import PropTypes from 'prop-types';

const CraftTable = ({ craft }) => {

    const { photo, itemName, price, stockStatus, subcategoryName, rating } = craft;
    return (
        <tbody>
            <tr>
                <td className='w-4/12 p-0'>
                    <div className="lg:flex items-center text-center lg:text-left gap-2 lg:gap-6">
                        <div className="avatar p-1 md:p-3">
                            <div className="mask mask-squircle w-16 md:w-36">
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
                    <button className="btn bg-[#D2B48C] btn-xs">Details</button>
                </th>
            </tr>
        </tbody>
    );
};

CraftTable.propTypes = {
    craft: PropTypes.array
};


export default CraftTable;
