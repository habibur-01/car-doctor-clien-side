import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.svg"
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const navLinks = <>
        <li className="btn"><NavLink to="/"> Home </NavLink></li>
        <li className="btn"><NavLink to="/about"> About </NavLink></li>
        <li className="btn"><NavLink to="/services"> Services </NavLink></li>
        <li className="btn"><NavLink to="/blog"> Blog </NavLink></li>
        <li className="btn"><NavLink to="/contact"> Contact </NavLink></li>
    </>
   

    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                return ('logout successfull')

            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <nav className="flex justify-around h-36 items-center">
            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost ">
                    <GrMenu />
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>

            <div>
                <picture>
                    <img src={logo} alt="logo" />
                </picture>
            </div>
            <div className="hidden lg:block">
                <ul className="list-none flex items-center gap-5 ">
                    {navLinks}
                </ul>

            </div>


            <div>
                <div className="flex items-center gap-3">

                    <NavLink to="/"><div><FaShoppingCart /></div></NavLink>
                    <div><FaSearch /></div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-base-300  flex items-center justify-center">

                            <FaUserAlt></FaUserAlt>

                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to="/profile">
                                    <p className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </p>
                                </NavLink>

                            </li>
                            <li><NavLink to="/addproduct">My Booking</NavLink></li>
                            <li><NavLink to="/addproduct">Add Product</NavLink></li>
                            <li><NavLink to="/setting">Settings</NavLink></li>
                            <li><NavLink to={`/login`}>{user ? <span onClick={handleLogOut}>Logout</span> : 'Login'}</NavLink></li>
                        </ul>
                    </div>
                    <div><button className="btn btn-outline btn-error">Appointment</button></div>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;