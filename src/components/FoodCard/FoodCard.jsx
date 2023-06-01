
const FoodCard = ({ item }) => {
    const {name, recipe, price, image} = item;
    return (
        <div className="card w-72 card-compact bg-base-100">
            <figure className="  ">
                <img src={image} alt="Shoes" />
            </figure>
            <p className="bg-[#111827] text-white absolute right-5 top-5 px-2 py-1">${price}</p>
            <div className="card-body bg-[#F3F3F3] items-center ">
                <h2 className="card-title text-center">{name}</h2>
                <p><small className="text-justify">{recipe}</small></p>
                <div className="card-actions">
                    <button className="btn btn-sm btn-outline bg-[#E8E8E8] border-[#BB8506] text-[#BB8506] border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;