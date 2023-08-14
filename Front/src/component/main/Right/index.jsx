import { useEffect, useState } from 'react'
import MemberItem from './MemberItem'
import axios from 'axios'


const Member = () => {

    const URL = import.meta.env.VITE_backendurl


    const [users, setUser] = useState([])

    const getUserFuntion = async () => {

        await axios.get(`${URL}/api/v1/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            }
        }).then((res) => {
            setUser(res.data.users)
        })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getUserFuntion()
    }, [])

    if (users.length === 0) return

    return (
        <div style={{
            width: '23%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'calc(100vh - 60px)',
            overflowX: 'auto'

        }}>
            {
                users?.map((user) => (
                    <MemberItem key={user.userID} userID={user.userID} username={user.name} />
                ))
            }

        </div>
    )
}

export default Member