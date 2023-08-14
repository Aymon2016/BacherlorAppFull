import MemberItem from '../../component/memberpage/memberItem'
import './memberpage.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";


const MemberPage = () => {


    const URL = import.meta.env.VITE_backendurl

    const [product, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem('userToken');
            const decodedToken = jwtDecode(token);
            console.log(decodedToken)
            const { userID } = decodedToken;

            await axios.get(URL + `/api/v1/${userID}/products`)
                .then(res => {
                    setProducts(res.data.products)

                })
                .catch(error => {
                    setError(error.response.data.message)
                })
        }
        fetchData();

    }, [])

    if (!product) return

    return (
        <div className="container">
            <div className='productlist'>
                <ul>
                    <div className="Title">Product List</div>
                    {
                        product.length !== 0 ? product?.map((item, index) => (

                            <div key={Math.random() * 100} className='product'>
                                <h5>{index + 1} . {item.productName}</h5>
                                <h5>{item.price}</h5>
                            </div>
                        )) : <h2>{error}</h2>

                    }

                </ul>
            </div>
            <div>
                <MemberItem />
            </div>
        </div>
    )
}

export default MemberPage