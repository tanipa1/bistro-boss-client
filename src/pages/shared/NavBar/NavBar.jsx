import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Log Out',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li>
            <Link to="/order/salad">
                <div className="indicator mr-12">
                    <span className="indicator-item badge badge-secondary">99+</span>
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="white" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" /></svg>
                    </button>
                </div>
            </Link>
        </li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case grid grid-rows-2">
                    <h3 className="uppercase text-xl">Bistro Boss</h3>
                    <p className="uppercase">R e s t a u r a n t</p>
                </a>
            </div>
            <div className="navbar-end hidden mr-4 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
                {
                    user ?
                        <>
                            <button onClick={handleLogOut}>Logout </button>

                            <div data-tip={user.displayName} className="w-10 rounded-full tooltip tooltip-bottom ml-4">
                                <img className="rounded-full" src={user.photoURL} />
                            </div>

                        </> :
                        <><Link className="mr-8" to="/login">Login</Link></>
                }
            </div>
        </div>
    );
};

export default NavBar;