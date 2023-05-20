import { Link } from "react-router-dom";

const AllToysRow = ({ toy }) => {
    const {_id, seller_name, toy_name, sub_category, price, available_quantity} = toy;
    return (
        <tr>
            <th>{seller_name}</th>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td className="text-center">{available_quantity}</td>
            <td><Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link></td>            
        </tr>
    );
};

export default AllToysRow;