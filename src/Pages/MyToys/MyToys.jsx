import { useContext, useState} from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyToysRow from "./MyToysRow";


const MyToys = () => {

    const allToys = useLoaderData();   

    useTitle('My Toys');

    const {user} = useContext(AuthContext);      
    
    const newToys = allToys.filter(t => t.seller_email === user.email)
    const [addedToys, setAddedToys] = useState(newToys);
    
    
    return (
        <div className="my-10">
            <p className="text-5xl text-yellow-200 text-center mb-10">My Toys</p>

            
            <div className="w-11/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Seller Email </th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedToys.map(toy => <MyToysRow key={toy._id} 
                                toy={toy}
                                addedToys={addedToys}
                                setAddedToys={setAddedToys}
                                ></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;