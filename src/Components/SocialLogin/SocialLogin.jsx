
import useAuth from "../../Hooks/useAuth";
//import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const{googleSignIn} = useAuth()
    const handleGoogleLogin=()=>{
        console.log("clicked");
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            // const userInfo ={
            //     email:result.user?.email,
            //     name:result.user?.displayName,
            //     photoURL:result.user?.photoURL
            // }
        })
        .catch(error=>console.log(error))

       




    }


    return (
        <div className="flex flex-col gap-3">
            <div>
                <button  onClick={handleGoogleLogin} className="cursor-pointer border-2 font-bold text-teal-50 border-[#448c74] w-full py-1 normal rounded-lg hover:secondary-bg bg-[#448c74]  flex items-center justify-center  transition-all" type=""> Login with Google </button>
            </div>
           
        </div>
    );
};

export default SocialLogin;