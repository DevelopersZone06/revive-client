import useAuth from "../../Hooks/useAuth";

const Profile = ({img}) => {
  const { user } = useAuth();

  return (
    <div className="border-2 border-red-500">
      <div>
        {/* left side */}
        <div className="md:text-center text-left">
          <img
            // src={user?.photoURL}
            src={img}
            alt=""
            className="md:w-[100px] md:h-[100px] my-4 w-[70px] h-[70px] lg:mt-0 md:mt-0 mt-10 lg:mr-0 md:mr-0 md:ml-4 mr-10 rounded-full  bg-gradient-to-r p-[4px] from-teal-400 via-sky-100 to-sky-600 object-cover "
          />
        </div>
        <div className="  lg:pr-0 md:pr-5 pr-6 ">
          <h1 className=" text-sm font-semibold text-blue-300 ">
            {user?.displayName}
          </h1>
          <p className=" lg:text-sm md:text-xs text-xs text-blue-300">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
