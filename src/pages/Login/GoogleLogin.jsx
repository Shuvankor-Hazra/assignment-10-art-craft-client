import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();

    return (
        <div className="form-control mt-6 px-8">
            <button onClick={googleLogin} className="btn "><FaGoogle className="text-black text-xl" />Open with Google</button>
        </div>
    );
};

export default GoogleLogin;