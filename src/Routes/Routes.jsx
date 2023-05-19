import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFoundLayOut from "../Layout/NotFoundLayOut";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,        
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/addatoy',
                element: <AddAToy></AddAToy>
            }
            
        ],
    },
    {
        path: '*',
        element: <NotFoundLayOut></NotFoundLayOut>
    }
]);

export default router;