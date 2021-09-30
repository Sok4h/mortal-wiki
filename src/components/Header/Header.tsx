import React from "react";
import { Link } from '../Link/Link';
import logomk from './logomk.svg'
import './Header.css'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {

    return <header className="headerApp">
        <div className="logoContainer">
        <img className="logo" src={logomk} alt="" />
        </div>
        <Link text="Juegos" url="" ></Link>
        <Link text="Escenarios" url="" ></Link>
        <Link text="Personajes" url="" ></Link>
    </header>;
}

export default Header;