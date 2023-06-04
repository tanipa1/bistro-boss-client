import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaHome, FaRaspberryPi, FaShoppingCart, FaWallet } from 'react-icons/fa';


const Dashboard = () => {
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
                    {/* <!-- Sidebar content here --> */}
                    <a className=" grid grid-rows-2 ml-3 mb-10">
                        <h3 className="uppercase text-2xl">Bistro Boss</h3>
                        <p className="uppercase">R e s t a u r a n t</p>
                    </a>
                    <li><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/myCart'><FaShoppingCart /> My Cart</NavLink></li> <br />
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