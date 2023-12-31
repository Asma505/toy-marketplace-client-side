import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToysRow = ({ toy, addedToys, setAddedToys }) => {
    const { _id, seller_email, rating, description, seller_name, toy_name, sub_category, price, available_quantity, picture_url } = toy;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {



                fetch(`https://toy-marketplace-server-rho-rouge.vercel.app/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = addedToys.filter(to => to._id !== _id);
                            setAddedToys(remaining);
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <th><img src={picture_url} alt="" /></th>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{seller_email}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{rating} Stars</td>
            <td className="text-center">{available_quantity}</td>
            <td className="text-center"><div className="w-28 overflow-hidden">{description}</div></td>
            <td><Link to={`/updatetoys/${_id}`}><button className="btn btn-primary">Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button></td>
        </tr>
    );
};

export default MyToysRow;