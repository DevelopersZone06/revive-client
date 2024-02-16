
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogOut = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);

            })
        navigate("/");

    }
    return (
        <div>
            <button onClick={handleLogOut} className='text-lg px-6 text-sky-200' type="">
                <span className="xl:flex lg:flex md:flex hidden">
                    LogOut
                </span>
            </button>
        </div>
    );
};

export default LogOut;