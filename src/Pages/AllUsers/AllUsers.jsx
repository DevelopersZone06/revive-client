import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]); 

   
    useEffect(() => {
        fetch('https://revive-server-dun.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            })
           
    }, []);

    // const handleNormal = () => {
    //     const normalUser = users.filter(user => user.category == 'normal' ); 
    //     setFilteredUsers(normalUser)
    // }

    // const handlePremiumUsers = () => {
    //     const premiumUser = users.filter(user => user.category == 'premium'); 
    //     setFilteredUsers(premiumUser)
    // }

    // const handleTrainers = () => {
    //     const trainers = users.filter(user => user.category == 'trainer')
    //     setFilteredUsers(trainers); 
    // }
    const handleFilter=(category)=>{
       
        const allUsers=users.filter(user=>user.category==category)
        setFilteredUsers(allUsers)
    }

    return (
        <>
            <div className="overflow-x-auto text-white">

                <Helmet>
                    <title>
                        Revive | All Users
                    </title>
                </Helmet>
                <h2 className="text-3xl font-semibold text-center mt-5 mb-10">All users</h2>

                <ul className="flex justify-start gap-4 text-4xl font-medium ms-4">
                    <li onClick={()=>handleFilter('normal')}>Normal</li>
                    <li onClick={()=>handleFilter('premium')}>Premium</li>
                    <li onClick={()=>handleFilter('trainer')}>Trainers</li>
                </ul>

                <div className="divider"></div>
                <table className="table">
                    <tbody>
                        {
                            filteredUsers.map((user, index) => <UsersCard key={index} user={user}></UsersCard>)
                        }
                    </tbody>


                </table>
            </div>
        </>
    );
};

export default AllUsers;