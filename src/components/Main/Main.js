import React from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import './Main.css';

export default class Main extends React.Component {
    state = { products: [], cart: {} }

    componentDidMount() {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    products: data
                })
            });
    }
    handleClick = (product) => {
        const { cart } = this.state;
        const copyCart = { ...cart }
        const newCart = { copyCart, product }
        this.setState(newCart);
    }

    render() {
        const { products, cart } = this.state;
        return (
            <div className="main">
                <Products products={products} handleButton={this.handleClick}></Products>
                <Cart cart={cart}></Cart>
            </div>
        )
    }
}