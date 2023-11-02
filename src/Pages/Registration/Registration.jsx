import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";



const Registration = () => {
    const {userCreate} = useContext(AuthContext)


    const handleUserSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userInfo = {name, email, password}
        console.log(userInfo)

        userCreate(email, password)
        .then(result => {
            console.log(result.user)
            updateProfile(result.user, {
                displayName: name,
                
            })
              
            return 'successfull'
        })
        .catch(error => {
            console.log(error.message)
        })

    }


    return (
        <div className="flex justify-center items-center h-[650px]">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleUserSignIn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                    </div>
                </form>
                <div className="px-4 mb-4">
                    <p>Already have an account? Please <Link to={`/login`}><span className="text-rose-400">Login</span></Link></p>
                </div>
            </div>

        </div>
    );
};

export default Registration;