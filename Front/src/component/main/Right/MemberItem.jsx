import React from 'react'
import img from '../../../../assets/logo.png'
import './member.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MemberItem = ({ userID, username }) => {

    const authorID = userID;

    const URL = import.meta.env.VITE_backendurl

    const [productPrice, setProductPrice] = useState(0)
    const [mill, setMill] = useState(0)
    const [error, setError] = useState(null)

    useEffect(() => {

        async function fetchProduct() {
            await axios.get(URL + `/api/v1/${userID}/products`)
                .then(res => {
                    const product = res?.data?.products
                    if (product) {
                        let total = 0
                        for (let i = 0; i < product.length; i++) {
                            const totalProductPrice = parseFloat(product[i].price);
                            total += totalProductPrice
                        }
                        setProductPrice(total)
                    }

                })
                .catch(error => {
                    setError(error.response.data.message)
                })
        }

        async function fetchMill() {
            await axios.get(URL + `/api/v1/${authorID}/mills`)
                .then(res => {
                    const data = res?.data?.data
                    if (data) {
                        let total = 0
                        for (let i = 0; i < data.length; i++) {
                            const totalmill = parseFloat(data[i].quantity);
                            total += totalmill
                        }
                        setMill(total)
                    }

                })
                .catch(error => {

                    setError(error.response.data.message)
                })
        }
        fetchProduct();
        fetchMill()
    }, [])



    return (
        <div className='member'>
            <div className="imgdiv">
                <img src={img} alt='memberimg' />
            </div>
            <div className='details'>
                <h4>{username}</h4>
                {
                    error === null ?
                        <>
                            <p>Each mill:  {productPrice / mill}</p>
                            <p>Status:{productPrice / mill > 35 ? "BaD" : "GooD"}</p>
                        </>
                        : <span>{error}</span>
                }
            </div>
        </div>
    )
}

export default MemberItem