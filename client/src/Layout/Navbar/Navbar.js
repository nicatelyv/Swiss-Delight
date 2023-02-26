import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import './style.scss'

function Navbar() {
	const quantity = useSelector(state => state.cart.quantity)

	//Mobile Navbar
	const [mobilenav, setMobilenav] = useState(false)
	function mobilnav() {
		setMobilenav(!mobilenav)
	}

	//Scroll Navbar
	const [navbar, setNavbar] = useState()
	const scrollNav = () => {
		if (window.scrollY >= 500) {
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
					<li><NavLink id='topnavA' to={'/shop'}>Mağaza</NavLink>
						<ul className='dropdownmenu'>
							<li><NavLink id='dropdownA' to={'/cart'}>Sepet</NavLink></li>
							{/* <li><NavLink id='dropdownA' to={'/wishlist'}>Dilek listesi</NavLink></li> */}
							{/* <li><NavLink id='dropdownA' to={'/my-account'}>Hesabım</NavLink></li> */}
						</ul>
					</li>
					<li id='navli'><span id='sayfalar'>Sayfalar</span>
						<ul className='dropdownmenu'>
							<li><NavLink id='dropdownA' to={'/about-us'}>Hakkımızda</NavLink></li>
							<li><NavLink id='dropdownA' to={'/who-we-are'}>Biz Kimiz</NavLink></li>
							<li><NavLink id='dropdownA' to={'/our-chef'}>Şef</NavLink></li>
							<li><NavLink id='dropdownA' to={'/our-history'}>Tarihimiz</NavLink></li>
							<li><NavLink id='dropdownA' to={'/our-menu'}>Menü</NavLink></li>
							{/* <li><NavLink id='dropdownA' to={'/pricing-plans'}>Fiyatlandırma Planları</NavLink></li> */}
							<li><NavLink id='dropdownA' to={'/contact-us'}>Bize Ulaşın</NavLink></li>
							<li><NavLink id='dropdownA' to={'/get-in-touch'}>Temasta Olmak</NavLink></li>
						</ul>
					</li>
					{/* <li><NavLink id='topnavA' to={'/portfolio'}>Portföy</NavLink></li>
					<li><NavLink id='topnavA' to={'/blog'}>Blog</NavLink></li> */}
				</ul>
				<NavLink id='topnavlogo2A' to='/'><img id='topnavLogo2' alt='navfoto' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/logo-mobile.png' /></NavLink>
				<ul className='topnavRight'>

					<NavLink to={'/cart'}>
						<div id='topnavCart'>
							<i className="fa-solid fa-cart-shopping"></i>
							<div id='topnavright-border'>
								<p id='cartCount'>{quantity}</p>
							</div>
						</div>
					</NavLink>

					{localStorage.getItem('username') ?
						<div id='topnavLogin'>
							<Link to="/logout">
								<h3 id='loginA' >Log out</h3>
							</Link>
							<h3 title='Username' style={{ cursor: "default", fontWeight: "600", marginLeft: "15px" }} id='loginA' >{localStorage.getItem('username')}</h3>
							<i style={{ fontSize: "20px", color: "black" }} className="fa-regular fa-user"></i>
						</div>
						:
						<NavLink to={'/login'}>
							<div id='topnavLogin'>
								<h3 id='loginA'>Giriş</h3>
								<div id='topnavright-border'>
									<i style={{ color: "black" }} className="fa-solid fa-user"></i>
								</div>
							</div>
						</NavLink>
					}
					<i id='topnavIcon' className="fa-solid fa-bars" onClick={mobilnav}></i>
				</ul>
			</div>

			{/* Mobile Navbar */}
			{mobilenav &&
				<div className='mobilenav'>
					<ul className='mobileNavList'>
						<li><NavLink id='mobileTopnavA' to={'/'}>Ana sayfa</NavLink></li>
						<li><NavLink id='mobileTopnavA' to={'/shop'}>Mağaza</NavLink></li>
						<li id='mobileTopnavA'><span id='sayfalar'>Sayfalar</span>
							<ul className='mobileDropdownmenu'>
								<li><NavLink id='dropdownA' to={'/about-us'}>Hakkımızda</NavLink></li>
								<li><NavLink id='dropdownA' to={'/who-we-are'}>Biz Kimiz</NavLink></li>
								<li><NavLink id='dropdownA' to={'/our-chef'}>Şef</NavLink></li>
								<li><NavLink id='dropdownA' to={'/our-history'}>Tarihimiz</NavLink></li>
								<li><NavLink id='dropdownA' to={'/our-menu'}>Menü</NavLink></li>
								<li><NavLink id='dropdownA' to={'/pricing-plans'}>Fiyatlandırma Planları</NavLink></li>
								<li><NavLink id='dropdownA' to={'/contact-us'}>Bize Ulaşın</NavLink></li>
								<li><NavLink id='dropdownA' to={'/get-in-touch'}>Temasta Olmak</NavLink></li>
							</ul>
						</li>
						{/* <li><NavLink id='mobileTopnavA' to={'/portfolio'}>Portföy</NavLink></li>
						<li><NavLink id='mobileTopnavA' to={'/blog'}>Blog</NavLink></li> */}

						{localStorage.getItem('username') ?
							<div style={{ display: "flex", gap: '10px', alignItems: "center" }} id='topnavLogin'>
								<i style={{ fontSize: "20px", color: "black" }} class="fa-regular fa-user"></i>
								<h3 id='mobileTopnavA' >{localStorage.getItem('username')}</h3>
								<Link to="/logout">
									<h3 id='mobileTopnavA' >- Log out</h3>
								</Link>
							</div>

							:
							<li><NavLink id='mobileTopnavA' to={'/login'}>Giriş</NavLink></li>
						}

					</ul>
				</div>
			}
		</nav>
	)
}

export default Navbar