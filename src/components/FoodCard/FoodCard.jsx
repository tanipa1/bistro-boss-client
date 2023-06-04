import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const {name, recipe, price, image, _id} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item =>{
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); //Refetch cart number item
                    Swal.fire({
                        icon: 'success',
                        title: 'Item is added to cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'You have to login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
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
                    <button onClick={() => handleAddToCart(item)} className="btn btn-sm btn-outline bg-[#E8E8E8] border-[#BB8506] text-[#BB8506] border-0 border-b-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;