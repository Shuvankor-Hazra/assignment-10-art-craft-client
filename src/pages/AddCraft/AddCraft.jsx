import Swal from 'sweetalert2'

const AddCraft = () => {

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        // console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="md:w-2/3 mx-auto bg-[#F4F3F0] my-20 p-10 rounded-xl">
            <h1 className='text-4xl font-bold text-center py-3'>Add New Craft</h1>

            <form onSubmit={handleAddCraft}>
                {/* 1111111111111111111111111111111 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name="item_name" placeholder="Enter Coffee Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* 222222222222222222222222222222 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name="subcategory_name" placeholder="Enter Subcategory Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="short_description" placeholder="Enter Short Description" className="input input-bordered" required />
                    </div>
                </div>
                {/* 333333333333333333333333333333333 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter Price (Taka)" className="input input-bordered" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input type="number" name="processing_time" placeholder="Enter Processing Time (Hours)" className="input input-bordered" required />
                    </div>
                </div>
                {/* 44444444444444444444444444444 */}
                <div className="md:flex md:gap-5 md:py-3">

                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <select className="select select-bordered">
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
                        <select className="select select-bordered">
                            <option disabled selected>Customization</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>

                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Stock Status</option>
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </label>
                </div>
                {/* 55555555555555555555555 */}
                <div className="md:flex md:gap-5 md:py-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name="user_email" placeholder="User Email" className="input input-bordered" readOnly/>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="user_name" placeholder="User Name Time" className="input input-bordered" readOnly/>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#D2B48C]">ADD CRAFT</button>
                </div>
            </form>
        </div>
    );
};

export default AddCraft;