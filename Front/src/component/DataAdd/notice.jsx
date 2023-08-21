
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from "react"
import axios from 'axios'
import './style.scss'


const CreateNotice = () => {

    const URL = import.meta.env.VITE_backendurl

    const init = {
        title: '',
        noticeBody: ''
    }

    const checkValidity = (values) => {
        const errors = {};

        const { title, noticeBody } = values;


        if (!title) {
            errors.title = 'Invalid title';
        }
        if (!noticeBody) {
            errors.noticeBody = 'Invalid noticeBody';
        }



        return {
            errors,
            isValid: Object.entries(errors).length === 0,
        };
    };

    const [notice, setNotice] = useState({ ...init })

    const [errors, setErrors] = useState({ ...init });

    const addData = (e) => {
        const { name, value } = e.target;
        setNotice(() => {
            return {
                ...notice,
                [name]: value

            }

        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const { isValid, errors } = checkValidity(notice);

        if (isValid) {
            setErrors({ ...errors })
        } else {
            setErrors({ ...errors });
        }

        const { title, noticeBody } = notice
        if (isValid) {

            await axios.post(`${URL}/api/v1/notices`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    title, noticeBody
                })

            }).then(response => {

                if (response.status === 200) {
                    toast.error("Created Successfully 😃!", {
                        position: "top-center"
                    });

                    setNotice({
                        ...notice,
                        title,
                        noticeBody
                    });



                }
            })
                .catch(error => {

                    if (error?.response?.status !== 200) {
                        toast.error("Create not Sucessfull 👎!", {
                            position: "top-center"
                        });

                    }

                })
        }

    }


    return (
        <div className="questionContainer">
            <form method='post' className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Create Notice</h3>
                    <div className="form-group mt-3">
                        <label>Title</label>
                        <input
                            type="title"
                            className="form-control mt-1"
                            placeholder="gas is finished"
                            name='title'
                            value={notice.title}
                            onChange={addData}
                        />
                        {errors.title && <p>{errors.title}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Notice</label>
                        <input
                            type="noticeBody"
                            className="form-control mt-1"
                            placeholder="120"
                            name='noticeBody'
                            value={notice.noticeBody}
                            onChange={addData}
                        />
                        {errors.noticeBody && <p>{errors.noticeBody}</p>}
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

export default CreateNotice