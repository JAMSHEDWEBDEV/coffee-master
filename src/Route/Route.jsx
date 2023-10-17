
import {
    createBrowserRouter,
  } from "react-router-dom";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Home from "../components/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const Route =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=>fetch('http://localhost:5000/coffee')
            },
            {
                path:"/addCoffee",
                element:<AddCoffee></AddCoffee>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/update/:id",
                element:<UpdateCoffee></UpdateCoffee>,
                loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
    
])

export default Route;