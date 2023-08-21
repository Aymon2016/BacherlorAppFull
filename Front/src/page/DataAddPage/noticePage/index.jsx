import React from 'react'
import AllNotice from './Allnotice'
import './style.scss'
import { useState } from "react";
import CreateNotice from '../../../component/DataAdd/notice';
import Model from '../../../component/shared/model';

const Notice = () => {

    const [notice, setNotice] = useState(false);

    const handleClickOpenNotice = () => {
        setNotice(true);
    };

    const handleCloseNotice = () => {
        setNotice(false);
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
                <h3>Announced a Notice</h3>
                <button className='btn'
                    onClick={handleClickOpenNotice}
                >
                    Announced Notice
                </button>
            </div>
            {
                notice ? <Model handleClose={handleCloseNotice} open={open}>
                    <CreateNotice />
                </Model> : ''
            }
            <div style={{ width: '100%' }}>
                <AllNotice />
            </div>
        </div>
    )
}

export default Notice