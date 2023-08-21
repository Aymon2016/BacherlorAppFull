import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './style.scss'


const AddMill = () => {


    const URL = import.meta.env.VITE_backendurl

    const init = {
        date: '',
        quantity: '',
        authorID: '',
        userID: '',
    }

    const checkValidity = (values) => {
        const errors = {};

        const { date, quantity, authorID, userID } = values;


        if (!date) {
            errors.date = 'Invalid date';
        }
        if (!quantity) {
            errors.quantity = 'Invalid quantity';
        }
        if (!authorID) {
            errors.authorID = 'Invalid authorID';
        }
        if (!userID) {
            errors.userID = 'Invalid userID';
        }



        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [Mill, setMill] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setMill(() => {
            return {
                ...Mill,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(Mill);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { date, quantity, authorID, userID } = Mill
        if (isValid) {

            await axios.post(`${URL}/api/v1/mills`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    date, quantity, authorID, userID
                })

            }).then(response => {

                if (response.status === 200) {
                    toast.error("Created Successfully 😃!", {
                        position: "top-center"
                    });

                    setNotice({
                        ...Mill,
                        date,
                        quantity,
                        authorID,
                        userID
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
                    <h3 className="Auth-form-title">Add Mill</h3>
                    <div className="form-group mt-3">
                        <label>Date</label>
                        <select
                            className="form-control mt-1"
                            name="date"
                            value={Mill.date}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {Mill.date ? Mill.date : 'Select a date'}
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>

                        </select>
                        {errors.date && <p>{errors.date}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>quantity</label>
                        <select
                            className="form-control mt-1"
                            name="quantity"
                            value={Mill.quantity}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {Mill.quantity ? Mill.quantity : 'Select a quantity'}
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>

                        </select>
                        {errors.quantity && <p>{errors.quantity}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>authorID</label>
                        <select
                            className="form-control mt-1"
                            name="authorID"
                            value={Mill.authorID}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {Mill.authorID ? Mill.authorID : 'Select a authorID'}
                            </option>
                            <option value="1001">1001</option>
                            <option value="1002">1002</option>
                            <option value="1003">1003</option>
                            <option value="1004">1004</option>
                            <option value="1005">1005</option>
                            <option value="1006">1006</option>

                        </select>
                        {errors.authorID && <p>{errors.authorID}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>userID</label>
                        <select
                            className="form-control mt-1"
                            name="userID"
                            value={Mill.userID}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {Mill.userID ? Mill.userID : 'Select a userID'}
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

export default AddMill