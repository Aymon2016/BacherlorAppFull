import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './style.scss'


const AddProducts = () => {

    const URL = import.meta.env.VITE_backendurl

    const init = {
        productName: '',
        price: '',
        userID: '',
    }

    const checkValidity = (values) => {
        const errors = {};

        const { productName, price, userID } = values;


        if (!productName) {
            errors.productName = 'Invalid productName';
        }
        if (!price) {
            errors.price = 'Invalid price';
        }

        if (!userID) {
            errors.userID = 'Invalid userID';
        }



        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [Products, setProducts] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setProducts(() => {
            return {
                ...Products,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(Products);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { productName, price, userID } = Products
        if (isValid) {

            await axios.post(`${URL}/api/v1/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    productName, price, userID
                })

            }).then(response => {

                if (response.status === 200) {
                    toast.error("Created Successfully 😃!", {
                        position: "top-center"
                    });

                    setProducts({
                        ...Products,
                        productName, price, userID
                    });


                }


            })
                .catch(error => {


                    toast.error("Create not Sucessfull 👎!", {
                        position: "top-center"
                    });



                })
        }

    }


    return (
        <div className="questionContainer">
            <form method='post' className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Add Products</h3>
                    <div className="form-group mt-3">
                        <label>Product Name</label>
                        <input
                            type="productName"
                            className="form-control mt-1"
                            placeholder="Rice"
                            name='productName'
                            value={Products.productName}
                            onChange={addData}
                        />
                        {errors.productName && <p>{errors.productName}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Price</label>
                        <input
                            type="price"
                            className="form-control mt-1"
                            placeholder="500"
                            name='price'
                            value={Products.price}
                            onChange={addData}
                        />
                        {errors.price && <p>{errors.price}</p>}
                    </div>

                    <div className="form-group mt-3">
                        <label>userID</label>
                        <select
                            className="form-control mt-1"
                            name="userID"
                            value={Products.userID}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {Products.userID ? Products.userID : 'Select a userID'}
                            </option>
                            <option value="1001">1001</option>
                            <option value="1002">1002</option>
                            <option value="1003">1003</option>
                            <option value="1004">1004</option>
                            <option value="1005">1005</option>
                            <option value="1006">1006</option>

                        </select>
                        {errors.userID && <p>{errors.userID}</p>}
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={sendData}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default AddProducts