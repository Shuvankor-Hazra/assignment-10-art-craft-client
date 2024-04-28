import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser, updateUserProfile } = useAuth();

    const navigate = useNavigate();

    const from = "/";

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');
        console.log(name, email, photoUrl, password);

        if (password.length < 6) {
            toast.error('Password should be al least 6 character or longer')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Password should be al least 1 Uppercase character')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Password should be al least 1 Lowercase character')
            return;
        }

        createUser(email, password, name, photoUrl)
            .then((result) => {
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        navigate(from);
                    })
                console.log(result);
                toast.success('Registration completed successfully!')
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-fit bg-base-200 md:p-10 mb-12 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-right">
                    <h1 className="text-3xl md:text-5xl font-bold">Register Here</h1>
                    <p className="py-6">Register now to unlock exclusive benefits, personalized offers, and seamless access to our platform, creating your account in just a few simple steps.</p>
                </div>
                <div className="card shrink-0 w-full lg:w-2/3 shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>        
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photoUrl"
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="text-xl relative top-10 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoIosEye /> : <IoIosEyeOff />}</span>
                            </label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control my-6">
                            <button className="btn ">Register</button>
                        </div>
                        <div className="text-center">
                            <p>Already have an account ? please... <Link to="/login" className="underline font-bold">Login</Link></p>
                        </div>
                    </form>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Register;