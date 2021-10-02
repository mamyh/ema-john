import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import './Main.css';

export default function Main() {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    const handleClick = (product) => {

        const newCart = [...carts, product]
        setCarts(newCart);
    }
    return (
        <div className="main">
            <Products products={products} handleButton={handleClick}></Products>
            <Cart carts={carts}></Cart>
        </div>
    )

}