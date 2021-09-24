import React from 'react'
import "./Features.css"
export default function Features({ children }) {
    return (
        <div>
            <h1>Features</h1>
            <ul>
                {children.map(feature => <li className="feature__description">{feature.description} : <span className="feature__value">{feature.value}</span></li>)}
            </ul>
        </div>
    )
}
