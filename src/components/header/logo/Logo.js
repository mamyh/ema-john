import './Logo.css';
export default function Logo({ logo }) {
    return (
        <div className="logo-wrapper">
            <img className="logo" src={logo} alt="logo" />
        </div>
    )
}