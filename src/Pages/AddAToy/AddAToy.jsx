import { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {

    const {user} = useContext(AuthContext);

    useTitle('Add a Toy');

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = form.sub_category.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const available_quantity = parseInt(form.available_quantity.value);
        const description = form.description.value;
        const picture_url = form.picture_url.value;

        form.reset('');

        const newToy = { toy_name, seller_name, seller_email, sub_category, price, rating, available_quantity, description, picture_url };
        console.log(newToy);        

        fetch('https://toy-marketplace-server-rho-rouge.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto">
            <p className="text-5xl text-yellow-200 text-center my-10">Add a Toy</p>

            {/* Add a Toy Section */}
            <form onSubmit={handleAddToy}>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <span>Toy Name</span>
                            <input type="text" name="toy_name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <span>Seller Name</span>
                            <input type="text" name="seller_name" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <span>Seller Email</span>
                            <input type="email" name="seller_email" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 pt-9">
                        <div className="input-group">
                            <select name="sub_category" className="select select-bordered w-full">
                                <option>Outdoor Sports</option>
                                <option>Indoor Sports</option>
                                <option>Indoor and Outdoor Sports</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Available quantity</span>
                            <input type="number" name="available_quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <span>Detail description</span>
                            <input type="text" name="description" placeholder="info@site.com" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Picture URL of the toy</span>
                    </label>
                    <label className="input-group">
                        <span>Picture URL of the toy</span>
                        <input type="text" name="picture_url" placeholder="Picture URL of the toy" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className="btn btn-primary w-full my-10" type="submit" value="Submit" />
            </form>
        </div>

    );
};

export default AddAToy;