import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyArtCraft = () => {

    const { user } = useAuth();
    console.log(user);

    const [myAdded, setMyAdded] = useState([]);

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-art-craft-server.vercel.app/crafts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myAdded.filter(myAdd => myAdd._id !== _id);
                            setMyAdded(remaining);
                        }
                    })
            }
        });
    }

    useEffect(() => {
        fetch(`https://assignment-10-art-craft-server.vercel.app/myArtCraft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAdded(data);
            })
    }, [user])

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold">{user.displayName} Art And Craft List</h2>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
                    {
                        myAdded.map(myAdd => <div key={myAdd._id}>
                            <div className="card border border-[#D2B48C] cursor-pointer bg-base-300">
                                <figure className='mt-6 bg-[#F3F3F3] mask mask-hexagon-2 '><img src={myAdd.photo} alt="Book" /></figure>
                                <div className='flex justify-between p-6'>
                                    <span className='btn btn-sm text-[#40A2D8] rounded-full'>Price: {myAdd.price}$</span>
                                    <span className='btn btn-sm text-[#40A2D8] rounded-full'>Rating: {myAdd.rating}.00</span>
                                </div>
                                <div className="flex justify-between items-center px-6 ">
                                    <div>
                                        <h2 className="text-xl font-semibold">{myAdd.itemName} </h2>
                                        <p className='font-medium'>Customization: {myAdd.customization} </p>
                                    </div>
                                    <h2 className='font-bold'>{myAdd.stockStatus}</h2>
                                </div>
                                <div className="m-6">
                                    <Link to={`/update/${myAdd._id}`} className="btn btn-sm md:btn-md bg-[#D2B48C] w-1/2">Update</Link>
                                    <button
                                        onClick={() => handleDelete(myAdd._id)}
                                        className="btn btn-sm md:btn-md bg-red-500 w-1/2">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyArtCraft;