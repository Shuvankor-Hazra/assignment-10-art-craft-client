import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import TableBody from '../../components/TableBody/TableBody';

const AllArtAndCraft = () => {

    const crafts = useLoaderData();



    return (
        <div>
            <Helmet>
                <title>Art & craft | Details</title>
            </Helmet>
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">Details</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        crafts.map(craft => <TableBody key={craft._id} craft={craft}></TableBody>)
                    }
                </table>
            </div>



            {/* <thead>
            <tr>12</tr>
            <td></td>
        </thead>
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
            </tbody> */}
        </div>
    );
};

export default AllArtAndCraft;
