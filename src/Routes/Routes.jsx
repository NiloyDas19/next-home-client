import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/Shared/MyProfile/MyProfile";
import PropertyBought from "../Pages/Dashboard/PropertyBought/PropertyBought";
import WishList from "../Pages/Dashboard/WishList/WishList";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import AllProperties from "../Pages/AllProperties/AllProperties";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/allProperties",
                element: <AllProperties></AllProperties>
            }
        ]
    },
    {
        path:"dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"myProfile",
                element: <MyProfile></MyProfile>
            },
            {
                path:'propertyBought',
                element: <PropertyBought></PropertyBought>,
            },
            {
                path: 'wishList',
                element: <WishList></WishList>
            },
            {
                path: 'myReviews',
                element: <MyReviews></MyReviews>
            }
        ]
    }
]);