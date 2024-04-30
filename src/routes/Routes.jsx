import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddCraft from "../pages/AddCraft/AddCraft";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";
import SubCategory from "../components/SubCategory/SubCategory";
import MyArtCraft from "../pages/MyArtCraft/MyArtCraft";
import Update from "../components/Update/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-art-craft-server.vercel.app/crafts')
            },
            {
                path: "/details/:id",
                element: <PrivateRoutes><CraftDetails></CraftDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-10-art-craft-server.vercel.app/crafts/${params.id}`)
            },
            {
                path: "/subCraft/:id",
                element: <SubCategory></SubCategory>,
            },
            {
                path: "/allArt",
                element: <AllArtAndCraft></AllArtAndCraft>,
                loader: () => fetch('https://assignment-10-art-craft-server.vercel.app/crafts')
            },
            {
                path: "/addCraft",
                element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
            },
            {
                path: "/myArt",
                element: <PrivateRoutes><MyArtCraft></MyArtCraft></PrivateRoutes>
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
                path: "/update",
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://assignment-10-art-craft-server.vercel.app/crafts/${params.id}`)
            },
        ]
    },
]);
export default router;