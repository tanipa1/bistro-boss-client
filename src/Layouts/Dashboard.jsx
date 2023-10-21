import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaRaspberryPi, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    // TODO: load data from the server
    // const isAdmin = true;
    const isAdmin = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content font-serif font-bold text-lg">
                    <a className=" grid grid-rows-2 ml-3 mb-10">
                        <h3 className="uppercase text-2xl">Bistro Boss</h3>
                        <p className="uppercase">R e s t a u r a n t</p>
                    </a>
                    {
                        isAdmin ? <>

                            <li><NavLink to='/dashboard/home'><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'><FaBars /> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageBookings'><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaUsers /> All Users</NavLink></li>
                        
                        </> : <>
                            <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/myCart'><FaShoppingCart /> My Cart</NavLink></li>
                        </>
                    }


                    <br />

                    <hr className="h-1" />
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'><FaBars />Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaRaspberryPi /> Our Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;