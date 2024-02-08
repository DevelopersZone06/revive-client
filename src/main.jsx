import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AuthProvider from "./Provider/AuthProvider";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import BlogDetail from "./Pages/Blog/BlogDetail";
import Events from "./Pages/Event/Events";
import BMIServices from "./Pages/UsersServices/BMIServices/BMIServices";
import AllServices from "./Pages/UsersServices/AllServices/AllServices";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EventDetails from "./Pages/Event/EventDetails";
import TrainerDetailPage from "./Pages/Trainers/TrainerDetailPage";
import AllTrainers from "./Pages/AllTrainers/AllTrainers";
import ServiceDetails from "./Components/ServicesComponents/ServiceDetails/ServiceDetails";
import { HelmetProvider } from "react-helmet-async";
import ToBeTrainers from "./Pages/Dashboard/Admin/Trainers/BeTrainers";
import Dashboard from "./Layout/Dashboard/Dashboard";
import AdminHome from "./Pages/Dashboard/Admin/Home/AdminHome";
import ServicesApproval from "./Pages/Dashboard/Admin/Services/ServicesApproval";
// import useAxiosPublic from "./Hooks/useAxiosPublic";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "/trainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "/trainersdetails/:id",
        element: <TrainerDetailPage></TrainerDetailPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/eventDetails/:id",
        element: <EventDetails />,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://revive-server-dun.vercel.app/service/${params.id}`),
      },

      {
        path: "/BMIServices",
        element: <BMIServices></BMIServices>,
      }
      
    ],
  },{
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
         path:'adminHome',
         element:<AdminHome></AdminHome>
    },
    {
      path:'toBeTrainers',
      element:<ToBeTrainers/>
    },
    {
      path:'servicesApproval',
      element:<ServicesApproval/>
    }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
