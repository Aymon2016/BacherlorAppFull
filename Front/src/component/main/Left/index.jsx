import React, { Fragment } from 'react'
import NoticeSlide from './NoticeSlide'
import Graph from './Graph'

const Databody = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'calc( 100vh - 60px)',
            width: '75%'


        }}
        >
            <NoticeSlide />
            <Graph />
        </div>
    )
}

export default Databody