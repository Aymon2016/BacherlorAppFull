import React from 'react'
import AllMills from './AllMill'
import './style.scss'
import { useState } from "react";
import AddMill from '../../../component/DataAdd/mill';
import Model from '../../../component/shared/model';

const Mills = () => {

    const [mills, setMills] = useState(false);

    const handleClickOpenMills = () => {
        setMills(true);
    };

    const handleCloseMills = () => {
        setMills(false);
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
                <h3>Add Daily Mills</h3>
                <button className='btn'
                    onClick={handleClickOpenMills}
                >
                    Add Mill
                </button>
            </div>
            {
                mills ? <Model handleClose={handleCloseMills} open={open}>
                    <AddMill />
                </Model> : ''
            }
            <div style={{ width: '100%' }}>
                <AllMills />
            </div>
        </div>
    )
}

export default Mills