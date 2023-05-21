import useTitle from "../../hooks/useTitle";
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";


const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [search, setSearch] = useState('');
    const toysInPage = 20;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?limit=${toysInPage}`);

            const data = await response.json();
            setToys(data);
        }
        fetchData();
    }, []);

    useTitle('All Toys');
    return (
        <div className="my-10">
            <p className="text-5xl text-yellow-200 text-center mb-10">All Toys</p>

            {/* All Toys Section */}
            <div className="form-control w-9/12 mx-auto mb-5">
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
            </div>

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
                                toys.filter((item)=>{
                                    return search.toLowerCase() === '' ? item : item.toy_name.toLowerCase().includes(search);
                                }).map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;