import React from 'react';
import Button from '../../Button/Button';
import "./Cart.css";

export default function Cart({ carts }) {

    let price, shipping, totalBeforeTax, tax, total;
    price = carts.reduce((prevPrice, cart) => prevPrice + cart.price, 0);
    shipping = carts.reduce((prevShipping, cart) => prevShipping + cart.shipping, 0);
    if (!carts.length) {
        totalBeforeTax = 0;
        tax = 0;
    } else {
        totalBeforeTax = price + shipping;
        tax = totalBeforeTax * 0.1;
    }
    total = totalBeforeTax + tax;
    return (
        <div className="cart">
            <h1 style={{ fontSize: '15px', fontWeight: '700', textAlign: 'center' }}>Order Summery</h1>
            <p style={{ fontSize: '14px', textAlign: 'center' }}>items ordered:{carts.length}</p>
            <div className="price">
                <div className="price-description">
                    <p>Items:</p>
                    <p>Shipping & Handling:</p>
                    <p>Total Before Tax:</p>
                    <p>Eslimated Tax:</p>
                    <p style={{ color: 'red', fontWeight: 'bold' }}>Order Total:</p>
                </div>
                <div className="price-value">
                    <p>${price.toFixed(2)}</p>
                    <p>${shipping.toFixed(2)}</p>
                    <p>${totalBeforeTax.toFixed(2)}</p>
                    <p>${tax.toFixed(2)}</p>
                    <p>${total.toFixed(2)}</p>
                </div>
            </div>
            <Button>Review your order</Button>
        </div>
    )
}
