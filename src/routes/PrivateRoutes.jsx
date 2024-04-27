import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {

    const { user } = useAuth();

    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.any
};


export default PrivateRoutes;
