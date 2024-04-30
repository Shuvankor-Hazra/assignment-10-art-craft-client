import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TableBody = ({ craft }) => {

    const { _id, photo, itemName, price, stockStatus, subcategoryName, rating } = craft;

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-16">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{itemName}</div>
                            <div className="text-sm opacity-50">{subcategoryName}</div>
                        </div>
                    </div>
                </td>
                <td>
                {stockStatus}
                    <br />
                    <span className="badge badge-ghost badge-sm">{rating}.00</span>
                </td>
                <td>{price}$</td>
                <th>
                    <Link to={`/details/${_id}`} className="btn btn-sm md:btn-md bg-[#D2B48C]">Details</Link>
                </th>
            </tr>
        </tbody>
    );
};


TableBody.propTypes = {
    craft: PropTypes.object
};


export default TableBody;
