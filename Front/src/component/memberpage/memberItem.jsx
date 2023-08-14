
import { useEffect, useState } from 'react'
import './memberitem.scss'
import axios from 'axios'
import jwtDecode from "jwt-decode";
const MemberItem = () => {
    const URL = import.meta.env.VITE_backendurl

    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {

            const token = localStorage.getItem('userToken');
            const decodedToken = jwtDecode(token);
            const { userID } = decodedToken;

            await axios.get(URL + `/api/v1/users/info/${userID}`)
                .then(res => {
                    const data = res?.data?.data

                    setData(data)

                })
                .catch(error => {

                    setError(error.response.data.message)
                })
        }
        fetchData();
    }, [])


    if (data === null) return
    console.log(data)

    return (
        <div className='memberContainer'>
            <div className="memberImgdiv">
                <h4>Whole Report</h4>
                <div className='memberDetails'>
                    {
                        error === null ?
                            <ul>
                                <li>Total Cost : <span>{data.totalCost}</span></li>
                                <li>Total Mill : <span>{data.totalMill}</span></li>
                                <li>Each Mill : <span>{data.eachMill}</span>
                                    <span>
                                        {
                                            data.totalCost / data.totalMill < 35 ? 'Good' : 'Bad'
                                        }
                                    </span>
                                </li>

                            </ul> : <p>{error}</p>
                    }
                </div>
                <hr />
                <h4>Author Report</h4>
                <h4>{data.user.userID}</h4>
                <div className='memberDetails'>
                    {
                        error === null ?
                            <ul>
                                <li>Product Buy: <span>{data.user.userTotalCost}</span></li>
                                <li>Total Mill : <span>{data.user.userTotalMill}</span></li>
                                <li>Each Mill : <span>{data.user.userEachMill}</span>
                                    <span>
                                        {
                                            data.user.userTotalCostl / data.user.userTotalMill < 35 ? 'Good' : 'Bad'
                                        }
                                    </span>
                                </li>


                            </ul> : <p>{error}</p>
                    }
                </div>
                <h4>Self Report</h4>
                <h4>{data.user.userID}</h4>
                <div className='memberDetails'>
                    {
                        error === null ?
                            <ul>
                                <li>Buy: <span>{data.user.userTotalCost}</span></li>
                                <li>Mill Cost : <span>{data.user.self.selfTotalCost}</span></li>
                                <li>Mill : <span>{data.user.self.selfTotalMill}</span></li>

                                {
                                    data.user.self.giveTaka === 0 ?

                                        <li> Get Return: {data.user.self.getTaka}</li>
                                        : <li> Give Retun: {data.user.self.giveTaka}</li>
                                }


                            </ul> : <p>{error}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default MemberItem