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