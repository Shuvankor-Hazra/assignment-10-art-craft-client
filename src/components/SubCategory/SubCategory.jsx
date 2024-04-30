import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SubCategory = () => {

    const [subCat, setSubCat] = useState([]);
    
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://assignment-10-art-craft-server.vercel.app/myCrafts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSubCat(data);
            })
    }, [id])

    return (
            <div>
                <div className="text-center my-10">
                    <h2 className="text-2xl md:text-3xl font-bold">Sub Category Craft List</h2>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
                        {
                            subCat.map(sub => <div key={sub._id}>
                                <div className="card border border-[#D2B48C] cursor-pointer bg-base-300">
                                    <figure className='mt-6 bg-[#F3F3F3] mask mask-hexagon-2 '><img src={sub.image} alt="" /></figure>
                                    <div className='flex justify-between p-6'>
                                        <span className='btn btn-sm text-[#40A2D8] rounded-full'>Price: {sub.price}$</span>
                                        <span className='btn btn-sm text-[#40A2D8] rounded-full'>Rating: {sub.rating}.00</span>
                                    </div>
                                    <div className="flex justify-between items-center px-6 ">
                                        <div>
                                            <h2 className="text-xl font-semibold">{sub.itemName} </h2>
                                            <p className='font-medium'>Customization: {sub.customization} </p>
                                        </div>
                                        <h2 className='font-bold'>{sub.stockStatus}</h2>
                                    </div>
                                    <div className="m-6">
                                        <Link to="/details" className="btn btn-sm md:btn-md bg-[#D2B48C] w-1/2">View Details</Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default SubCategory;