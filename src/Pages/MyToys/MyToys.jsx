import { useContext} from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import AllToysRow from "../AllToys/AllToysRow";
import { useLoaderData } from "react-router-dom";


const MyToys = () => {

    const allToys = useLoaderData();

    useTitle('My Toys');

    const {user} = useContext(AuthContext);      
    
    const addedToys = allToys.filter(t => t.seller_email === user.email)
    
    
    return (
        <div className="my-10">
            <p className="text-5xl text-yellow-200 text-center mb-10">My Toys</p>

            
            <div className="w-9/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedToys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;