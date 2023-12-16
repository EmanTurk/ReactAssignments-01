import React, { useState, useEffect } from 'react';
import products from './store';
import './home.css'


function Products() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setProductData(products);
    }, []);

    return (
       <> <h1 className='header'>Products</h1>
        <div>
            {productData.map(product => (
                <div key={product.id}>
                    {product.title}
                </div>
            ))}
        </div>
        </>
    );}

    export default Products;
