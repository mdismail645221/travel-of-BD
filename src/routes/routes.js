import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import TourInfo from "../shared/TourInfo/TourInfo";


export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: ()=> fetch(`http://localhost:5000/travels`),
                element: <Home></Home>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'tavelsInfo/:id',
                loader: (params)=> fetch(`http://localhost:5000/travels/${params.id}`),
                element: <TourInfo></TourInfo>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    }
])