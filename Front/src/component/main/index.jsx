import React from 'react'
import Member from './Right'
import Databody from './Left'

const Mainbody = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '80%',
            height: '100%',
            backgroundColor: '#F5F5F5',
            padding: '10px',
            justifyItems: 'center',
            alignItems: 'center'
        }}>
            <Databody />
            <Member />
        </div>
    )
}

export default Mainbody