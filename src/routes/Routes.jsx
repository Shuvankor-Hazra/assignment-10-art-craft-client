import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddCraft from "../pages/AddCraft/AddCraft";
import CraftDetails from "../pages/CraftDetails/CraftDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-art-craft-server-f1u5cjdxy.vercel.app/crafts')
            },
            {
                path: "/details/:id",
                element: <CraftDetails></CraftDetails>,
                loader: ({params}) => fetch(`https://assignment-10-art-craft-server-f1u5cjdxy.vercel.app/crafts/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allArt",
                element: <div>allArt</div>
            },
            {
                path: "/addCraft",
                element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
            },
            {
                path: "/myArt",
                element: <PrivateRoutes><div>myArt</div></PrivateRoutes>
            },
        ]
    },
]);
export default router;