
import useAuth from '../../Hooks/useAuth';

const LogOut = () => {
    const {logOut}= useAuth()
    

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
                
            })
            
        }
    return (
        <div>
            <button onClick={handleLogOut} className='text-lg px-6 pr-4 text-sky-200' type="">LogOut</button>
        </div>
    );
};

export default LogOut;