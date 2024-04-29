import { useLoaderData } from "react-router-dom";
import CraftTable from "../CraftTable/CraftTable";


const CraftItems = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <div className="text-center my-12">
                <h2 className="text-2xl md:text-3xl font-bold ">Our Craft Items</h2>
                <p className="md:text-xl md:w-2/3 mx-auto py-3 text-gray-500">Craft items section offers a diverse array of materials and tools for creative projects, inspiring endless possibilities.</p>
            </div>
            <div>
                <div className="overflow-x-visible mb-12 bg-base-300 rounded-xl md:p-10">
                    <table className="table">
                        {/* head */}
                        <thead className="md:text-xl">
                            <tr>
                                <th className="text-center">Craft Name</th>
                                <th>Rating</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            crafts.map(craft => <CraftTable key={craft._id} craft={craft}></CraftTable>)
                        }
                    </table>
                </div>
            </div>

        </div>
    );
};

export default CraftItems;