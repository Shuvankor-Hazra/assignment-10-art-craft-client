import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/user.png";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleSIgnOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="p-2 rounded-lg"><NavLink to="/">Home</NavLink></li>
        <li className="p-2 rounded-lg"><NavLink to="/allArt">All Art & craft Items</NavLink></li>
        <li className="p-2 rounded-lg"><NavLink to="/addCraft">Add Craft Item</NavLink></li>
        <li className="p-2 rounded-lg"><NavLink to="/myArt">My Art & Craft List</NavLink></li>
    </>

    return (
        <div className="navbar py-6 md:py-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="p-3 dropdown-content mt-3 z-[10] shadow bg-white border-4 rounded-box w-60 text-gray-500">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl lg:text-4xl font-bold gap-0 p-0 hover:bg-white"><span className="text-2xl lg:text-4xl font-extrabold">Art&Craft</span>{"'"}s</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 px-1 text-xl font-bold text-gray-500">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">


                {
                    user ?
                        <div className="flex items-center gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName || 'Name not found'}>
                                    <div className="w-10 md:w-12 rounded-full ">
                                        <img alt="Profile" src={user?.photoURL || userDefaultPic} />
                                    </div>
                                </div>
                            </div>
                            <Link onClick={handleSIgnOut} className="btn bg-[#D2B48C] btn-sm md:btn-md md:px-10 md:text-lg md:font-bold">Log Out</Link>
                        </div> :
                        
                        <div className="flex items-center gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName || 'Name not found'}>
                                    <div className="w-10 md:w-12 rounded-full ">
                                        <img alt="Profile" src={user?.photoURL || userDefaultPic} />
                                    </div>
                                </div>
                            </div>
                            <Link to="/login" className="btn bg-[#D2B48C] btn-sm md:btn-md  md:px-10 md:text-lg md:font-bold">Log In</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;