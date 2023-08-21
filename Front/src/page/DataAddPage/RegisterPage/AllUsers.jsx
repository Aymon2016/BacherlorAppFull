import { useEffect, useState } from 'react';
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const AllUsers = () => {
    async function fetchData() {

        const { data } = await axios.get(URL + '/api/v1/users')
        setUsers(data.users)
    }

    const URL = import.meta.env.VITE_backendurl
    const [user, setUsers] = useState([])

    const Delete = async (id) => {
        await axios.delete(URL + `/api/v1/users/${id}`)
            .then((res) => {
                toast.error(`${res.data.message} 😃!`, {
                    position: "top-center"
                });
                fetchData()
            })
            .catch((e) => {
                toast.error(`Something Wrong 😃!`, {
                    position: "top-center"
                });
            })
    }

    useEffect(() => {
        async function fetchData() {

            const { data } = await axios.get(URL + '/api/v1/users')
            setUsers(data.users)
        }
        fetchData();

    }, [])

    if (!user) return

    return (
        <div className='newsContainer'>
            <ul>
                <div className="notice">All Members</div>
                {
                    user.length !== 0 ? user.map((item, index) => (

                        <li key={item.id} >
                            {index + 1}. Name: {item.name}  <button onClick={() => Delete(item.id)}>Delete</button>
                        </li>

                    )) : 'You have no notice right now.so, Create Notice'
                }

            </ul>
            <ToastContainer />
        </div>
    )
}

export default AllUsers

