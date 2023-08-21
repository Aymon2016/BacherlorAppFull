import { useEffect, useState } from 'react';
import './style.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const AllProducts = () => {

    async function fetchData() {

        const { data } = await axios.get(URL + '/api/v1/products')
        setProducts(data.allProducts)
    }

    const URL = import.meta.env.VITE_backendurl
    const [products, setProducts] = useState([])

    const Delete = async (id) => {
        await axios.delete(URL + `/api/v1/products/${id}`)
            .then((res) => {
                toast.error(`${res.data.message} 😃!`, {
                    position: "top-center"
                });

            })
            .catch((e) => {
                toast.error(`Something Wrong 😃!`, {
                    position: "top-center"
                });
            })

        fetchData();
    }

    useEffect(() => {
        fetchData();

    }, [])

    if (!products) return

    return (
        <div className='newsContainer'>
            <ul>
                <div className="notice">Products</div>
                {
                    products.length !== 0 ? products.map((item, index) => (

                        <li key={item.id} >
                            {index + 1}. Name: {item.productName} Price: {item.price} <button onClick={() => Delete(item.id)}>Delete</button>
                        </li>

                    )) : 'You have no notice right now.so, Create Notice'
                }

            </ul>
            <ToastContainer />
        </div>
    )
}

export default AllProducts

