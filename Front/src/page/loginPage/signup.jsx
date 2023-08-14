import { Link } from "react-router-dom"
import React, { useState } from "react"
import './login.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {


    const URL = import.meta.env.VITE_backendurl

    const init = {
        userID: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: ''

    }

    const checkValidity = (values) => {
        const errors = {};

        const { userID, name, email, password, confirmPassword } = values;
        if (!userID) {
            errors.userID = 'Invalid userID';
        }
        if (!name) {
            errors.name = 'Invalid name';
        }
        if (!email) {
            errors.email = 'Invalid email';
        }

        if (!password) {
            errors.password = 'Invalid password';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'password did not match'
        }

        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [logged, setData] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logged,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(logged);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }


        const { userID, name, email, password, confirmPassword } = logged;

        if (isValid) {
            await axios.post(`${URL}/api/v1/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userID, name, email, password, confirmPassword
                })

            }).then(responese => {

                if (responese.status === 200) {
                    toast.error("SignUp Successfully 😃!", {
                        position: "top-center"
                    });

                    setData({
                        ...logged,
                        userID: '',
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    });

                }
            })
                .catch(error => {

                    if (error.response.status !== 200) {
                        toast.error("not sigUp 👎!", {
                            position: "top-center"
                        });

                    }

                })
        }

    }


    return (
        <div className="Auth-form-container">
            <form method="post" className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary">
                            <Link to="/login">Sign In</Link>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>UserID</label>
                        <select
                            className="form-control mt-1"
                            name="userID"
                            value={logged.userID}
                            onChange={addData}
                        >
                            <option value="" disabled hidden>
                                {logged.userID ? logged.userID : 'Select a userID'}
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
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="fullName"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            name='name'
                            value={logged.name}
                            onChange={addData}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name='email'
                            value={logged.email}
                            onChange={addData}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            name='password'
                            value={logged.password}
                            onChange={addData}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            type="confirmPassword"
                            className="form-control mt-1"
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            value={logged.confirmPassword}
                            onChange={addData}
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={sendData}
                        >
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
export default Signup