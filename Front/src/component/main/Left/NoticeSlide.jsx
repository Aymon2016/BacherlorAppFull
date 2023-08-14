import React from 'react'
import './newsSlide.scss'
import { motion, useTime } from "framer-motion";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const NoticeSlide = () => {

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
        <div className="news-container">
            <div className="title">
                News
            </div>

            <ul>
                {
                    news.map((item, index) => (<li key={index} onClick={() => handleClick(item)}>{item.title} |</li>))
                }

            </ul>
        </div>
    )
}

export default NoticeSlide
