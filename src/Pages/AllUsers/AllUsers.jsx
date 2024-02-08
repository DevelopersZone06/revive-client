import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    })

    return (
        <>
            <div className="overflow-x-auto">

            <h2 className="text-3xl font-semibold text-center mt-5 mb-10">All users</h2>

            <ul className="flex justify-start gap-4 text-4xl font-medium ms-4">
                <li>Normal</li>
                <li>Premium</li>
                <li>Trainers</li>
            </ul>

            <div className="divider"></div>
                <table className="table">
                    <tbody>
                        {
                            users.map((user, index) => <UsersCard key={index} user={user}></UsersCard>)
                        }
                    </tbody>


                </table>
            </div>
        </>
    );
};

export default AllUsers;