import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login"
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "../SharedComponent/PrivateRoute/PrivateRoute"






const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/" ,
                element: <Home></Home>

            },
            
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            }

        ]
    },
]);


export default router;