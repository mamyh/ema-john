import React from 'react';
import Product from './Product/Product';
import "./Products.css"

export default function Products({ products, handleButton }) {

    return (
        <div className="products">
            {products.map((product) => <Product key={product.key} handleButton={handleButton} product={product}></Product>)}
        </div>
    )
}
