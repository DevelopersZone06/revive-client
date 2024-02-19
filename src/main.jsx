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
// import AllUsers from "./Pages/AllUsers/AllUsers";
import PostGallery from "./Pages/Dashboard/PostGallery/PostGallery";
import ServicesApproval from "./Pages/Dashboard/Admin/Services/ServicesApproval";
import TrainerDetail from "./Pages/Dashboard/Admin/Trainers/TrainerDetail";
import ServiceDetail from "./Pages/Dashboard/Admin/Services/ServiceDetail";
import PostedPackages from "./Pages/Dashboard/Admin/Packages/PostedPackages";
// import Calender from "./Pages/Dashboard/User/Calender/Calender";

import ServicesDetails from "./Pages/Dashboard/User/Services/ServicesDetails";
import TrainerProfile from "./Pages/Dashboard/Trainer/TrainerProfile/TrainerProfile";
import OrderHistory from "./Pages/Dashboard/User/OrderHistory/OrderHistory";
import UpdateProfile from "./Pages/Dashboard/User/UpdateProfile/UpdateProfile";
import MyServices from "./Pages/Dashboard/User/Services/MyServices";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import SpeechRecog from "./Shared/SpeechRecog/SpeechRecog";
import UserProfile from "./Pages/Dashboard/User/UserProfile/UserProfile";
import Todo from "./Pages/Dashboard/User/Todo/Todo";

import TrainerForm from "./Pages/TrainerForm/TrainerForm";
import UserDashboard from "./Layout/UserDashboard/UserDashboard";
import TrainerPostedService from "./Pages/Dashboard/Trainer/TrainerProfile/TrainerPostedService/TrainerPostedService";
import PostBlog from "./Pages/Dashboard/Trainer/PostBlog/PostBlog";
import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import TrainerRoute from "./Routes/TrainerRoute";

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
        path: "/speech",
        element: <SpeechRecog></SpeechRecog>,
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
        element: <PrivateRoute><AllServices></AllServices></PrivateRoute>,
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
      },
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
    children: [
      //Admin routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "postGallery",
        element:<AdminRoute> <PostGallery></PostGallery></AdminRoute>,
      },

      {
        path: "toBeTrainers",
        element: <AdminRoute><ToBeTrainers /></AdminRoute>,
      },
      {
        path: "postPackages",
        element: <AdminRoute><PostedPackages></PostedPackages></AdminRoute>,
      },
      {
        path: "servicesApproval",
        element: <AdminRoute><ServicesApproval /></AdminRoute>,
      },
      {
        path: "/dashboard/toBeTrainers/trainerDetail",
        element: <AdminRoute><TrainerDetail /></AdminRoute>,
      },
      {
        path: "/dashboard/servicesApproval/serviceDetail",
        element: <AdminRoute><ServiceDetail /></AdminRoute>,
      },

      // user route
      // {
      //   path: 'calender',
      //   element: <Calender />
      // },
      {
        path: 'myServices',
        element: <MyServices />
      },
      {
        path: 'myServices/myServicesDetails',
        element: <ServicesDetails />
      },
      {
        path: 'applyTrainerForm',
        element: <TrainerForm></TrainerForm>
      }
      ,
      {
        path: 'orderHistory',
        element: <OrderHistory></OrderHistory>
      },
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>
      },

      //Trainer Route

      {
        path: "todo",
        element: <TrainerRoute><Todo /></TrainerRoute>,
      },


      {
        path: "trainerProfile",
        element: <TrainerRoute><TrainerProfile /></TrainerRoute>,
      },

      {
        path: "orderHistory",
        element: <TrainerRoute><OrderHistory></OrderHistory></TrainerRoute>,
      },
      {
        path: 'postBlog', 
        element: <TrainerRoute><PostBlog /></TrainerRoute>
      },
      {
        path: 'orderHistory',
        element:<TrainerRoute> <OrderHistory /></TrainerRoute>
      },
      {
        path: 'updateProfile',
        element:<TrainerRoute> <UpdateProfile /></TrainerRoute>
      },
      {
        path: 'trainerPostedService',
        element:<TrainerRoute> <TrainerPostedService /></TrainerRoute>
      },
      {
        path: 'todo',
        element: <TrainerRoute><Todo /></TrainerRoute>
      }





      //Trainer Route
      // {
      //   path:'trainerProfile',
      //   element:<TrainerProfile/>
      // },

      // {
      //   path: 'orderHistory', 
      //   element: <OrderHistory></OrderHistory>
      // }, 
      // {
      //   path: 'updateProfile', 
      //   element: <UpdateProfile></UpdateProfile>
      // }
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