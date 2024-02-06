import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
    const {isAdmin}=useAdmin();
    return (
        <div className="flex flex-col md:flex-row">
        <div className="md:w-64 secondary-bg md:min-h-screen ">
          <ul className="menu flex flex-row md:flex-col text-white">
            <li>
              <Link to={"/"}>
                {" "}
                <span className="cursor-pointer text-3xl  flex">
                  Revive
                </span>
              </Link>
            </li>
            {isAdmin &&  (
              <>
                {/* Admin exits */}
                <li>
                  <NavLink
                    to={"/dashboard/adminHome"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-yellow-300" : ""
                    }
                  >
                    Admin Home
                  </NavLink>
                </li>
  
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-yellow-300" : ""
                    }
                  >
                  
                    All users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-yellow-300" : ""
                    }
                  >
                    {" "}
                   Applied Trainers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-yellow-300" : ""
                    }
                  >
                    
                   Post Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-yellow-300" : ""
                    }
                  >
                    {" "}
                    Post Packages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-yellow-300" : ""
                    }
                  >
                    {" "}
                    Services Approval
                  </NavLink>
                </li>
              </>
            ) }
            
  
           
          </ul>
        </div>
        {/* dashboard outlet */}
        <div className="flex-1 p-8 ">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;