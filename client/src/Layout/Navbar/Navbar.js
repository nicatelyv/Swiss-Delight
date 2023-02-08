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
                    <li><NavLink id='topnavA' to={'/'}>Ana sayfa</NavLink></li>
                    <li id='navli'>Sayfalar
                        <ul className='dropdownmenu'>
                            <li><NavLink id='dropdownA' to={'/about-us'}>Hakkımızda</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/who-we-are'}>Biz Kimiz</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/our-chef'}>Şef</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/our-history'}>Tarihimiz</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/our-menu'}>Menü</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/pricing-plans'}>Fiyatlandırma Planları</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/contact-us'}>Bize Ulaşın</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/get-in-touch'}>Temasta olmak</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink id='topnavA' to={'/shop'}>Mağaza</NavLink></li>
                    <li><NavLink id='topnavA' to={'/portfolio-page'}>Portföy</NavLink></li>
                    <li><NavLink id='topnavA' to={'/blog'}>Blog</NavLink></li>
                </ul>
                <NavLink id='topnavlogoA' to='/'><img id='topnavLogo' alt='navfoto' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/logo-light.png' /></NavLink>
                <NavLink id='topnavlogo2A' to='/'><img id='topnavLogo2' alt='navfoto' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/logo-mobile.png' /></NavLink>
                <ul className='topnavRight'>
                    <NavLink id='navOnlineorder' to={'/shop'}>Online sipariş</NavLink>

                    <NavLink to={'/'}>
                        <div id='topnavLogin'>
                            <NavLink to={'/'}>Giriş yapmak</NavLink>
                            <div id='topnavright-border'>
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to={'/cart'}>
                        <div id='topnavCart'>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <div id='topnavright-border'>
                                <p id='cartCount'>0</p>
                            </div>
                        </div>
                    </NavLink>

                    <span class="qodef-m-icon qodef--open">
                        <svg class="qodef-side-area--svg-open" x="0px" y="0px" width="34px" height="9px" viewBox="0 0 34 9" enable-background="new 0 0 34 9" >
                            <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="0" y1="8.295" x2="34" y2="8.295"></line>
                            <line fill="none" stroke="#000000" stroke-miterlimit="10" x1="0" y1="0.705" x2="34" y2="0.705"></line>
                        </svg>
                    </span>
                    <i id='topnavIcon' class="fa-solid fa-bars" onClick={mobilnav}></i>
                </ul>
            </div>

            {/* Mobile Navbar */}
            {mobilenav &&
                <div className='mobilenav'>
                    <ul className='mobileNavList'>
                        <li><NavLink id='mobileTopnavA' to={'/'}>Ana sayfa</NavLink></li>
                        <li id='mobileTopnavA'>Sayfalar
                            <ul className='mobileDropdownmenu'>
                            <li><NavLink id='dropdownA' to={'/about-us'}>Hakkımızda</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/who-we-are'}>Biz Kimiz</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/our-chef'}>Şef</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/our-history'}>Tarihimiz</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/our-menu'}>Menü</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/pricing-plans'}>Fiyatlandırma Planları</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/contact-us'}>Bize Ulaşın</NavLink></li>
                            <li><NavLink id='dropdownA' to={'/get-in-touch'}>Temasta olmak</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink id='mobileTopnavA' to={'/shop'}>Mağaza</NavLink></li>
                        <li><NavLink id='mobileTopnavA' to={'/portfolio-page'}>Portföy</NavLink></li>
                        <li><NavLink id='mobileTopnavA' to={'/blog'}>Blog</NavLink></li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar