import { useContext, useEffect, useState} from "react";
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
    const [ascending, setAscending] = useState([])
    const [descending, setDescending] = useState([])

    useEffect(()=>{
        fetch('https://toy-marketplace-server-rho-rouge.vercel.app/toy')
        .then(res => res.json())
        .then(data => setAscending(data))
    },[])
    
    useEffect(()=>{
        fetch('https://toy-marketplace-server-rho-rouge.vercel.app/toys')
        .then(res => res.json())
        .then(data => setDescending(data))
    },[])


    const handleAscensing = () =>{
        const result = ascending.filter(t => t.seller_email === user.email)
        setAddedToys(result);
    }
    
    const handleDescending = () =>{
        const result = descending.filter(t => t.seller_email === user.email)
        setAddedToys(result);
    }   
    
    
    return (
        <div className="my-10">
            <p className="text-5xl text-yellow-200 text-center mb-10">My Toys</p>

            {/* ascending discending order buttons */}
            <div className="flex gap-5 justify-center mb-5">
                <button className="btn btn-warning" onClick={handleAscensing}>Ascending By Price</button>
                <button className="btn btn-warning" onClick={handleDescending}>Descending By Price</button>
            </div>

            {/* Added Products Section */}
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