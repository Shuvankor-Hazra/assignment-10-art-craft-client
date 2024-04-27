import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto font-openSans px-3 md:px-0">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;