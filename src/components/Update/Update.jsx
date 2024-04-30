import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";




const Update = () => {

    const { user } = useAuth();

    const crafts = useLoaderData();

    const { _id, itemName, photo, subcategoryName, shortDescription, price, processingTime, rating, customization, stockStatus } = crafts;

    const handleUpdateCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.item_name.value;
        const photo = form.photo.value;
        const subcategoryName = form.subcategory_Name.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const processingTime = form.processing_time.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.user_email.value;
        const userName = form.user_name.value;
        const updatedCraft = { itemName: itemName, photo: photo, subcategoryName: subcategoryName, shortDescription: shortDescription, price: price, processingTime: processingTime, rating: rating, customization: customization, stockStatus: stockStatus, userEmail: userEmail, userName: userName };
        console.log(updatedCraft);

        fetch(`https://assignment-10-art-craft-server.vercel.app/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className=" mx-auto bg-[#F4F3F0] mb-10 md:mb-20 p-5 md:p-10 rounded-xl">
            <Helmet>
                <title>Art & craft | Update</title>
            </Helmet>
            <h1 className='text-2xl md:text-4xl font-bold text-center pb-3'>Update Craft</h1>

            <form onSubmit={handleUpdateCraft}>
                {/* section - 1 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input defaultValue={itemName} type="text" name="item_name" placeholder="Enter Coffee Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input defaultValue={photo} type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* section - 2 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Subcategory Name</span>
                        </div>
                        <select defaultValue={subcategoryName} name='subcategory_Name' className="select select-bordered">
                            <option disabled selected>Subcategory Name</option>
                            <option>Clay-made pottery</option>
                            <option>Stoneware</option>
                            <option>Porcelain</option>
                            <option>Terra Cotta</option>
                            <option>Ceramics & Architectural</option>
                            <option>Home decor pottery</option>
                        </select>
                    </label>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input defaultValue={shortDescription} type="text" name="short_description" placeholder="Enter Short Description" className="input input-bordered" required />
                    </div>
                </div>
                {/* section - 3 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={price} type="text" name="price" placeholder="Enter Price" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input defaultValue={processingTime} type="number" name="processing_time" placeholder="Enter Processing Time" className="input input-bordered" required />
                    </div>
                </div>
                {/* section - 4 */}
                <div className="md:flex md:gap-5 md:py-3">

                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <select defaultValue={rating} name='rating' className="select select-bordered">
                            <option disabled selected>Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </label>

                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Customization</span>
                        </div>
                        <select defaultValue={customization} name='customization' className="select select-bordered">
                            <option disabled selected>Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>

                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <select defaultValue={stockStatus} name='stockStatus' className="select select-bordered">
                            <option disabled selected>Stock Status</option>
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </label>
                </div>
                {/* section - 5 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="user_email" placeholder="User Email" className="input input-bordered" readOnly />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} name="user_name" placeholder="User Name Time" className="input input-bordered" readOnly />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D2B48C]">UPDATE CRAFT</button>
                </div>
            </form>
        </div>
    );
};

export default Update;