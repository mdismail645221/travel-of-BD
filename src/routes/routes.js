import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import TourDetails from "../shared/TourDetails/TourDetails";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://travel-bd-server-gamma.vercel.app/travels'),
                element: <Home></Home>,
            },
            {
                path: 'tourDetails/:id',
                loader: ({params}) => fetch(`https://travel-bd-server-gamma.vercel.app/travels/${params.id}`),
                element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    }
])