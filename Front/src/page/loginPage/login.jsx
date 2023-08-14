
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './login.scss'
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/reducer/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_backendurl

    const init = {

        email: '',
        password: '',


    }

    const checkValidity = (values) => {
        const errors = {};

        const { email, password } = values;


        if (!email) {
            errors.email = 'Invalid email';
        }

        if (!password) {
            errors.password = 'Invalid password';
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


        const { email, password } = logged;

        if (isValid) {


            await axios.post(`${URL}/api/v1/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    email, password
                })

            }).then(response => {

                const token = response.data.token
                if (token) {
                    dispatch(setToken(token));
                    localStorage.setItem('userToken', token);
                }

                if (response.status === 200) {
                    toast.error("SignIn Successfully 😃!", {
                        position: "top-center"
                    });

                    setData({
                        ...logged, email: "",
                        password: ""
                    });

                }
                navigate('/');
            })
                .catch(error => {



                    if (error?.response?.status !== 200) {
                        toast.error("not sigIn 👎!", {
                            position: "top-center"
                        });

                    }

                })
        }

    }



    return (
        <div className="Auth-form-container">
            <form method='post' className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Sign to Bachelor App? {" "}

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
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit"
                            className="btn btn-primary"
                            onClick={sendData}
                        >
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login