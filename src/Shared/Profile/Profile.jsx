import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useTrainer from "../../Hooks/useTrainer";

const Profile = ({ img }) => {

  const { isTrainer } = useTrainer()

  const { user } = useAuth();

  return (
    <div>
      <div>
        {/* left side */}
        <div className="text-center">
          <img
            // src={user?.photoURL}
            src={user?.photoURL}
            
            alt=""
            className="md:w-[100px] md:h-[100px] my-4 w-[100px] h-[100px]  rounded-full  bg-gradient-to-r p-[4px] from-teal-400 via-sky-100 to-sky-600 object-cover "
          />
        </div>
        <div className="">
          <h1 className=" text-sm font-semibold text-blue-300">
            {user?.displayName}
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
