import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Navbar() {
    //Mobile Navbar
    const [mobilenav, setMobilenav] = useState(false)
    function mobilnav() {
        setMobilenav(!mobilenav)
    }

    //Scroll Navbar
    const [navbar, setNavbar] = useState()
    const scrollNav = () => {
        if (window.scrollY >= 800) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', scrollNav)
    return (
        <nav className={navbar ? 'nav nav-bg' : 'nav'}>
            <div className='topnav'>
                <ul className='topnavLeft'>
                    <li><NavLink id='topnavA' to={'/'}>HOME</NavLink></li>
                    <li>
                        <NavLink id='topnavA' to={'/'}>PAGES</NavLink>
                        <ul className='dropdownmenu'>
                            <li><NavLink id='dropdownA' to={'/'}>About Us</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Who We Are</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Our Chef</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Our History</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Our Menu</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Pricing Plans</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Contact Us</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/'}>Get In Touch</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink id='topnavA' to={'/'}>SHOP</NavLink></li>
                    <li><NavLink id='topnavA' to={'/portfolio-page'}>PORTFOLIO</NavLink></li>
                    <li><NavLink id='topnavA' to={'/'}>BLOG</NavLink></li>
                </ul>
                <NavLink to='/'><img id='topnavLogo' alt='navfoto' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/logo-swiss-1.png' /></NavLink>
                <ul className='topnavRight'>
                    <NavLink id='navOnlineorder' to={'/'}>ONLINE ORDER</NavLink>

                    <NavLink to={'/'}>
                        <div id='topnavLogin'>
                            <NavLink to={'/'}>LOGIN</NavLink>
                            <div id='topnavright-border'>
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to={'/'}>
                        <div id='topnavCart'>
                            <img id='topnavbasket' alt='icom' src="https://img.icons8.com/ios-glyphs/30/null/shopping-cart--v1.png" />
                            <div id='topnavright-border'>
                                <p id='cartCount'>0</p>
                            </div>
                        </div>
                    </NavLink>

                    <span class="qodef-m-icon qodef--open">
                        <svg class="qodef-side-area--svg-open" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34px" height="9px" viewBox="0 0 34 9" enable-background="new 0 0 34 9">
                            <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="0" y1="8.295" x2="34" y2="8.295"></line>
                            <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="0" y1="0.705" x2="34" y2="0.705"></line>
                        </svg>
                    </span>
                    <img id='topnavIcon' alt='icon' src="https://img.icons8.com/ios-glyphs/40/null/top-menu.png" onClick={mobilnav} />
                </ul>
            </div>

            {/* Mobile Navbar */}
            {mobilenav &&
                <div className='mobilenav'>
                    <ul className='mobileNavList'>
                        <li><NavLink id='mobileTopnavA' to={'/'}>HOME</NavLink></li>
                        <li>
                            <NavLink id='mobileTopnavA' to={'/'}>PAGES</NavLink>
                            <ul className='mobileDropdownmenu'>
                                <li><NavLink id='dropdownA' to={'/'}>About Us</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Who We Are</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Our Chef</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Our History</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Our Menu</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Pricing Plans</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Contact Us</NavLink></li>
                                <li><NavLink id='dropdownA' to={'/'}>Get In Touch</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink id='mobileTopnavA' to={'/'}>SHOP</NavLink></li>
                        <li><NavLink id='mobileTopnavA' to={'/portfolio-page'}>PORTFOLIO</NavLink></li>
                        <li><NavLink id='mobileTopnavA' to={'/'}>BLOG</NavLink></li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar