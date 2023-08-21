import React from 'react'
import AllUsers from './AllUsers'
import './style.scss'
import { useState } from "react";
import Signup from '../../loginPage/signup';
import Model from '../../../component/shared/model';

const Notice = () => {

    const [user, setUsers] = useState(false);

    const handleClickOpenUsers = () => {
        setUsers(true);
    };

    const handleCloseUsers = () => {
        setUsers(false);
    };
    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: "center",
            width: '100%'
        }} >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <h3>Registration Users</h3>
                <button className='btn'
                    onClick={handleClickOpenUsers}
                >
                    Register
                </button>
            </div>
            {
                user ? <Model handleClose={handleCloseUsers} open={open}>
                    <Signup />
                </Model> : ''
            }
            <div style={{ width: '100%' }}>
                <AllUsers />
            </div>
        </div>
    )
}

export default Notice