import React from 'react'
import Button from '../../../Button/Button';
import Features from './Features/Features';
import "./Product.css";
export default function Product({ product, handleButton }) {

    const { name, img, seller, price, stock, features } = product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="Product image" />
            </div>
            <div className="product-body">
                <h1 className="product__body-name">{name}</h1>
                <p className="product__body-seller">by: {seller}</p>
                <div className="product__subBody">
                    <div className="product__subBody-price">
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <Button product={product} handleButton={handleButton}>add cart</Button>
                    </div>
                    <div className="product__subBody-icon">
                        <p className="rating">icon</p>
                        <Features >{features}</Features>
                    </div>
                </div>
            </div>
        </div>
    )
}
