import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";

import Dashboard from "../Pages/Dashboard";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import ForgetPassword from "../Components/ForgetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            path: "/",
            element: <Home/>
        },
        {
            path: "/dash-board",
            element: <Dashboard/>
        },
    ]
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/Sign-up",
        element: <Signup/>
    },{
        path: "/Login/ForgetPassword",
        element: <ForgetPassword/>
    }
]);

export default router;