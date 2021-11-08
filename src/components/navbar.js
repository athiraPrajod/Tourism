//import { computeHeadingLevel } from '@testing-library/dom';
import React, {useState} from 'react';
import {Button} from "./Button.js"
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960)
            setButton(false)
        else    
            setButton(true)
    }

    window.addEventListener("resize", showButton)

    return (
        <nav className = "navbar">
            <div className = "navbar-container">
                <Link to="/" className = "navbar-logo">
                    {/*<p style={{color:'white'}}>NORWAY</p>*/}
                    NORWAY
                </Link>
                <div className = "menu-icon" onClick = {handleClick}>
                    <i className = {click ? "fas fa-times":"fas fa-bars"} />
                </div>

                <ul className = {click ? 'nav-menu active':'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to="/" className = "nav-links" onClick = {closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to="/destinations" className = "nav-links" onClick = {closeMobileMenu}>
                            Destinations
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to="/services" className = "nav-links" onClick = {closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li>
                        {button && <Button buttonStyle = 'btn--outline'>Sign Up</Button>}
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar