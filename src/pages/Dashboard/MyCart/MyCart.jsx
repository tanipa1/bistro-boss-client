import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle
                subHeading={'---My Cart---'}
                heading={'WANNA ADD MORE?'}
            ></SectionTitle>
            <div className="shadow-2xl p-12 mx-14">
                <div className="uppercase font-semibold  h-10 flex justify-between mb-6 font-serif">
                    <h2 className="text-xl">Total Orders: {cart.length}</h2>
                    <h2 className="text-xl">Total Price: ${total}</h2>
                    <button className="btn btn-sm bg-[#D1A054] border-0 ">Pay</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                key={item._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    {item.name}
                                    </td>
                                    <td className="text-end">${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="btn border-0 bg-[#B91C1C] btn-xs"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;