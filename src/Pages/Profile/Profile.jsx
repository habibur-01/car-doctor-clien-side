import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUpload } from "react-icons/fa";


const Profile = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName } = user;
    const profileNav = <>
        <li><NavLink to="/profile">My Profile</NavLink></li>
        <li><NavLink to="/favourite">Favourite</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
    </>
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-20">
            <div className="px-20">
                <div className="bg-slate-200 border-2 w-full h-96 flex justify-center items-center">
                    <div className="w-48 h-48 rounded-full bg-slate-50 flex justify-center items-center">
                        <FaUpload></FaUpload>
                    </div>

                </div>
                <div>
                    <input type="file" className="input input-bordered p-2 w-full bg-rose-400" />
                </div>
                <div className="my-10 space-y-5">
                    <p>Name: {displayName}</p>
                    <p>Email: {email} </p>
                    <p>Registration:</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {profileNav}
                </ul>
            </div>

        </div>
    );
};

export default Profile;