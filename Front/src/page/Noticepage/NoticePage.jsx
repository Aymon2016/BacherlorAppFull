import { useEffect, useState } from 'react';
import './noticepage.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const NoticePage = () => {


    const URL = import.meta.env.VITE_backendurl

    const navigate = useNavigate();
    const handleClick = (data) => {
        navigate('/singlenotice', { state: data });
    }
    const [news, setNews] = useState([])

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

                        <li key={item.id} onClick={() => handleClick(item)}>{index + 1}. {item.title} <span>{item.date}</span></li>

                    )) : 'You have no notice right now.so, please wait for announce any notice'
                }

            </ul>
        </div>
    )
}


export default NoticePage