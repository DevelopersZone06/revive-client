import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            }, [])

    })

    const handleNormal = () => {
        const normalUser = users.filter(user => user.category == 'normal' ); 
        setFilteredUsers(normalUser)
    }

    const handlePremiumUsers = () => {
        const premiumUser = users.filter(user => user.category == 'premium'); 
        setFilteredUsers(premiumUser)
    }

    const handleTrainers = () => {
        const trainers = users.filter(user => user.category == 'trainer')
        setFilteredUsers(trainers); 
    }

    return (
        <>
            <div className="overflow-x-auto">

                <h2 className="text-3xl font-semibold text-center mt-5 mb-10">All users</h2>

                <ul className="flex justify-start gap-4 text-4xl font-medium ms-4">
                    <li onClick={handleNormal}>Normal</li>
                    <li onClick={handlePremiumUsers}>Premium</li>
                    <li onClick={handleTrainers}>Trainers</li>
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