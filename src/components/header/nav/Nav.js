import './Nav.css';
export default function Nav() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About us</a>
                </li>
                <li>
                    <a href="/contact">contact us</a>
                </li>
            </ul>

        </div>
    )
}