import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ArtAndCrafts = () => {

    const [subCrafts, setSubCrafts] = useState([]);

    const navigate = useNavigate();

    const handleSubCraft = (subCraft) => {
        navigate(`/subCraft/${subCraft}`)
        console.log(subCraft);
    }

    useEffect(() => {
        fetch('https://assignment-10-art-craft-server.vercel.app/subCrafts')
            .then(res => res.json())
            .then(data => {
                setSubCrafts(data);
            })
    }, [])

    return (
        <>
            <div className="text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold ">Art & Craft Categories</h2>
                <p className="md:text-xl md:w-2/3 mx-auto py-3 text-gray-500">Art & Craft categories encompass pottery, painting, sculpture, weaving, woodworking, jewelry-making, paper crafts, and more creative disciplines.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    subCrafts.map(subCraft =>
                        <div onClick={() => handleSubCraft(subCraft.subcategory_Name)} key={subCraft._id}><div className="card bg-base-100 shadow-xl">
                            <figure><img src={subCraft.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{subCraft.subcategory_Name}</h2>
                                <p>{subCraft.short_description}</p>
                            </div>
                        </div></div>)
                }
            </div>
        </>

    );
};

export default ArtAndCrafts;