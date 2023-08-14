import './millpage.scss'
import axios from 'axios'
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { convertArray } from '../../utilis/changeStateToArray'
import "react-datepicker/dist/react-datepicker.css";

const MillPage = () => {
    const URL = import.meta.env.VITE_backendurl

    let user = ['1001', '1002', '1003', '1004', '1005', '1006']
    let member = ['AYMON', 'JAHED', 'FORKHAN', 'BAGINA', 'SHAHED', 'SAJJAD']

    user.sort((a, b) => a.localeCompare(b));

    const [startDate, setStartDate] = useState(new Date());
    const [mill, setMill] = useState([])
    const [error, setError] = useState(null)






    useEffect(() => {
        async function fetchData() {
            await axios.get(URL + '/api/v1/mills')

                .then(res => {

                    const data = res.data.allMill
                    const changeData = convertArray(data)
                    setMill(changeData)


                })
                .catch(error =>
                    setError(error.response.data.message)
                )
        }
        fetchData();

    }, [])



    let sortedMill = mill.sort((a, b) => new Date(a.date) - new Date(b.date));


    return (

        <div className="millContainer">
            <div className='table'>
                <ul>
                    <div className="Title">
                        <span>Monthly Mill List</span>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <table>
                        <thead>

                            <tr>
                                <td>DATE</td>
                                {
                                    member.map((item, index) => (
                                        <td key={index}>{item}</td>
                                    ))
                                }
                            </tr>

                        </thead>

                        {
                            error === null ? <tbody>

                                {sortedMill.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>
                                            {item.data.find(items => items.userID === user[0]) ? item.data.find(items => items.userID === user[0]).quantity : 0}
                                        </td>
                                        <td>
                                            {item.data.find(items => items.userID === user[1]) ? item.data.find(items => items.userID === user[1]).quantity : 0}
                                        </td>
                                        <td>
                                            {item.data.find(items => items.userID === user[2]) ? item.data.find(items => items.userID === user[2]).quantity : 0}
                                        </td>
                                        <td>
                                            {item.data.find(items => items.userID === user[3]) ? item.data.find(items => items.userID === user[3]).quantity : 0}
                                        </td>
                                        <td>
                                            {item.data.find(items => items.userID === user[4]) ? item.data.find(items => items.userID === user[4]).quantity : 0}
                                        </td>
                                        <td>
                                            {item.data.find(items => items.userID === user[5]) ? item.data.find(items => items.userID === user[5]).quantity : 0}
                                        </td>
                                    </tr>
                                ))}


                            </tbody> : ''
                        }
                    </table>
                </ul>
            </div>
        </div>
    )
}

export default MillPage