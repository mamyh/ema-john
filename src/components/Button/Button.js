import React from 'react'
import "./Button.css";
export default function Button({ children, handleButton, product }) {
    return (
        <button className="button" type="button" onClick={() => handleButton(product)} >{children}</button>
    )
}
