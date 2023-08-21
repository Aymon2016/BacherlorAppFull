import { useEffect, useState } from 'react';
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const Allnotice = () => {
    async function fetchData() {

        const { data } = await axios.get(URL + '/api/v1/notices')
        setNews(data.allNotice)
    }

    const URL = import.meta.env.VITE_backendurl
    const [news, setNews] = useState([])

    const Delete = async (id) => {
        await axios.delete(URL + `/api/v1/notices/${id}`)
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

            const { data } = await axios.get(URL + '/api/v1/notices')
            setNews(data.allNotice)
        }
        fetchData();

    }, [])

    if (!news) return

    return (
        <div className='newsContainer'>
            <ul>
                <div className="notice">Notice</div>
                {
                    news.length !== 0 ? news.map((item, index) => (

                        <li key={item.id} >
                            {index + 1}. {item.title} <button onClick={() => Delete(item.id)}>Delete</button>
                        </li>

                    )) : 'You have no notice right now.so, Create Notice'
                }

            </ul>
            <ToastContainer />
        </div>
    )
}

export default Allnotice

