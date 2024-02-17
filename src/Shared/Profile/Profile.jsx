import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useTrainer from "../../Hooks/useTrainer";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Profile = () => {

  const { isTrainer } = useTrainer()

  const { user } = useAuth();


  const [userDetails, setUserDetails] = useState({})
  const axiosPublic = useAxiosPublic()

  useEffect( () => {
    axiosPublic(`/users?email=${user?.email}`)
    .then(res => {
      setUserDetails(res.data)
      console.log(res.data)
    })
  }, [])


  const {name, email, photo} = userDetails

  return (
    <div>
      <div>
        {/* left side */}
        <div className="text-center">
          <img
            // src={user?.photoURL}
            src={photo}
            alt=""
            className="md:w-[100px] md:h-[100px] my-4 w-[100px] h-[100px]  rounded-full  bg-gradient-to-r p-[4px] from-teal-400 via-sky-100 to-sky-600 object-cover "
          />
        </div>
        <div className="">
          <h1 className=" text-sm font-semibold text-blue-300">
            {name}
          </h1>
          <p className=" text-sm text-blue-300">{user?.email}</p>
        </div>
        {
          isTrainer &&
          <div>
            <Link to={'postBlog'}><button className="btn btn-sm mt-3">Post a blog</button></Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Profile;
