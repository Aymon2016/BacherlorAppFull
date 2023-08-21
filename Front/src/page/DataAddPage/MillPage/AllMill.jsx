
import { useEffect, useState } from 'react';
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const AllMills = () => {

    async function fetchData() {

        const { data } = await axios.get(URL + '/api/v1/mills')
        setMills(data.allMill)
    }
    const URL = import.meta.env.VITE_backendurl
    const [mills, setMills] = useState([])

    const Delete = async (id) => {
        await axios.delete(URL + `/api/v1/mills/${id}`)
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

        fetchData();

    }, [])

    if (!mills) return

    return (
        <div className='newsContainer'>
            <ul>
                <div className="notice">Mills</div>
                {
                    mills.length !== 0 ? mills.map((item, index) => (

                        <li key={item.id} >
                            {index + 1}. Date: {item.date} User: {item.userID} Author: {item.authorID} <button onClick={() => Delete(item.id)}>Delete</button>
                        </li>

                    )) : 'You have no Mills right now.so, ADD Mills'
                }

            </ul>
            <ToastContainer />
        </div>
    )
}

export default AllMills

