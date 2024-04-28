import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const CraftDetails = () => {

    const crafts = useLoaderData();

    const { photo, itemName, price, stockStatus, subcategoryName } = crafts;

    return (
        <div>
            <Helmet>
                <title>Real state | Details</title>
            </Helmet>
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">Details</h2>
            </div>
            <div className="lg:flex items-center lg:mb-14 bg-base-300 my-10 rounded-xl">
                <figure className="lg:w-1/2  mask mask-hexagon-2">
                    <img className="rounded-xl p-6" src={photo} alt="img" />
                </figure>
                <div className="lg:w-1/2 card-body px-3 lg:px-6">
                    <div className="space-y-5">
                        <p><span className="md:text-lg font-semibold">Item Name: </span>{itemName}</p>
                        <p><span className="md:text-lg font-semibold">Price: </span>{price}</p>

                        <p><span className="md:text-lg font-semibold">Subcategory Name: </span> {subcategoryName}</p>

                        <p><span className="md:text-lg font-semibold">Stock Status: </span> {stockStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CraftDetails;
