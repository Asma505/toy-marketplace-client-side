import { useLoaderData } from "react-router-dom";


const Details = () => {
    const productDetails = useLoaderData();
    return (
        <div>
            <p>This is details page</p>
        </div>
    );
};

export default Details;