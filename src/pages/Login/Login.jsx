import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import GithubLogin from "./GithubLogin";
import GoogleLogin from "./GoogleLogin";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { signInUser } = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-fit bg-base-200 md:p-10 mb-12 rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-right">
                    <h1 className="text-3xl md:text-5xl font-bold">Login here!</h1>
                    <p className="py-6">Securely access your account, safeguarding your data while unlocking a world of personalized services, seamless transactions, and tailored experiences.</p>
                </div>
                <div className="card shrink-0 w-full lg:w-2/3 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
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
                                placeholder="password"
                                className="input input-bordered"
                                required />
                        </div>
                        <div>
                            <div className="form-control my-6">
                                <button className="btn bg-[#D2B48C]"><AiOutlineLogin className="text-black text-2xl" />Login</button>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>New user ? please... <Link to="/register" className="underline font-bold">Create an account</Link></p>
                        </div>
                    </form>
                    <GoogleLogin></GoogleLogin>
                    <GithubLogin></GithubLogin>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Login;