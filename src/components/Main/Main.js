import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import './Main.css';
import { add, storedCarts } from "../../utilities/fakedb";

export default function Main() {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(datas => {
                const productKeys = storedCarts();
                //console.log('key', productKeys)
                let products = [];
                for (let key of productKeys) {
                    products.push(datas.find((data) => data.key === key));
                }

                setProducts(datas);
                setCarts(products);
            })
    }, [])
    const handleClick = (product) => {
        add(product.key);
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