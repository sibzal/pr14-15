import './UsersPage.css'
import { useEffect, useState } from "react";

export default function UsersPage (){
    const [users,setUsers] = useState([])

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(() => {
        fetchUsers()
    },[])
    return(
        <div className="users-page">
            <div className="container">
                <div className="users-page-content"><br />
                    <h2>Пользователи</h2> <br />
                    <ul>
                        {users.map((user) => {
                            return(
                                <li className="uss">{user.name}</li>
                            )
                        })}
                    </ul><br />
                </div>
            </div>
        </div>
    )
}