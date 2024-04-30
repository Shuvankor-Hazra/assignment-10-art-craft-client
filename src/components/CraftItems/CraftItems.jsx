import { useLoaderData } from "react-router-dom";
import CraftCard from "../../CraftCard/CraftCard";


const CraftItems = () => {

    const crafts = useLoaderData();
    console.log(crafts);

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold ">Our Craft Items</h2>
                <p className="md:text-xl md:w-2/3 mx-auto py-3 text-gray-500">Craft items section offers a diverse array of materials and tools for creative projects, inspiring endless possibilities.</p>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        crafts.map(craft => <CraftCard key={craft._id} craft={craft} ></CraftCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CraftItems;