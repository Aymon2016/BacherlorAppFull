import React from 'react'
import AllProducts from './AllProducts'
import './style.scss'
import { useState } from "react";
import AddProducts from '../../../component/DataAdd/product';
import Model from '../../../component/shared/model';

const Notice = () => {

    const [products, setProducts] = useState(false);

    const handleClickOpenProducts = () => {
        setProducts(true);
    };

    const handleCloseProducts = () => {
        setProducts(false);
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
                <h3>ADD a Products</h3>
                <button className='btn'
                    onClick={handleClickOpenProducts}
                >
                    Products
                </button>
            </div>
            {
                products ? <Model handleClose={handleCloseProducts} open={open}>
                    <AddProducts />
                </Model> : ''
            }
            <div style={{ width: '100%' }}>
                <AllProducts />
            </div>
        </div>
    )
}

export default Notice