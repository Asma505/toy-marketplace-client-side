

const Card = ({product}) => {

    const {picture_url, toy_name, price, rating} = product;
    return (
        <div className="mb-3">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-96" src={picture_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating} Stars</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;