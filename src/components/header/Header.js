import Logo from './logo/Logo';
import Nav from './nav/Nav';
import logo from '../../images/logo.png';

export default function Header() {
    return (
        <div className="header">
            <Logo logo={logo}></Logo>
            <Nav></Nav>
        </div>
    )
}