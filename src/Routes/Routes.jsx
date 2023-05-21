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
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,        
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('https://toy-marketplace-server-rho-rouge.vercel.app/products')
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
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: ()=> fetch('https://toy-marketplace-server-rho-rouge.vercel.app/products')                

            },
            {
                path: '/addatoy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=> fetch(`https://toy-marketplace-server-rho-rouge.vercel.app/products/${params.id}`)
            },
            {
                path: '/updatetoys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({params})=> fetch(`https://toy-marketplace-server-rho-rouge.vercel.app/products/${params.id}`)
            }
            
        ],
    },
    {
        path: '*',
        element: <NotFoundLayOut></NotFoundLayOut>
    }
]);

export default router;