import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Faq from "../FAQ/Faq";
import CourseHeading from "../Layout/CourseHeading/CourseHeading";
import Main from "../Layout/Main/Main";
import Login from "../login/Login";
import Register from "../login/Register";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <CourseHeading></CourseHeading>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
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
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "*",
                element: <Error></Error>
            },


        ]
    }


])