import React from 'react';
import Button from '../../Button/Button';
import "./Cart.css";

export default function Cart({ cart }) {
    return (
        <div className="cart">
            <h1 style={{ fontSize: '15px', fontWeight: '700', textAlign: 'center' }}>Order Summery</h1>
            <p style={{ fontSize: '14px', textAlign: 'center' }}>items ordered:{ }</p>
            <div className="price">
                <div className="price-description">
                    <p>Items:</p>
                    <p>Shipping & Handling:</p>
                    <p>Total Before Tax:</p>
                    <p>Eslimated Tax:</p>
                    <p style={{ color: 'red', fontWeight: 'bold' }}>Order Total:</p>
                </div>
                <div className="price-value">
                    <p>${ }</p>
                    <p>${ }</p>
                    <p>${ }</p>
                    <p>${ }</p>
                    <p>${ }</p>
                </div>
            </div>
            <Button>Review your order</Button>
        </div>
    )
}
