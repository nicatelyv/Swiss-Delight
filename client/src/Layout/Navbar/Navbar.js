import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import './style.scss'

function Navbar() {
	const quantity = useSelector(state => state.cart.quantity)
	console.log(localStorage.getItem('username'));
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
						{/* <ul className='dropdownmenu'>
							<li><NavLink id='dropdownA' to={'/cart'}>Sepet</NavLink></li>
							<li><NavLink id='dropdownA' to={'/wishlist'}>Dilek listesi</NavLink></li>
							<li><NavLink id='dropdownA' to={'/my-account'}>Hesabım</NavLink></li>
						</ul> */}
					</li>
					<li id='navli'><span id='sayfalar'>Sayfalar</span>
						<ul className='dropdownmenu'>
							<li><NavLink id='dropdownA' to={'/about-us'}>Hakkımızda</NavLink></li>
							<li><NavLink id='dropdownA' to={'/who-we-are'}>Biz Kimiz</NavLink></li>
							<li><NavLink id='dropdownA' to={'/our-chef'}>Şef</NavLink></li>
							<li><NavLink id='dropdownA' to={'/our-history'}>Tarihimiz</NavLink></li>
							<li><NavLink id='dropdownA' to={'/contact-us'}>Bize Ulaşın</NavLink></li>
							{/* <li><NavLink id='dropdownA' to={'/our-menu'}>Menü</NavLink></li> */}
							{/* <li><NavLink id='dropdownA' to={'/pricing-plans'}>Fiyatlandırma Planları</NavLink></li> */}
							{/* <li><NavLink id='dropdownA' to={'/get-in-touch'}>Temasta Olmak</NavLink></li> */}
						</ul>
					</li>
					{/* <li><NavLink id='topnavA' to={'/portfolio'}>Portföy</NavLink></li>
					<li><NavLink id='topnavA' to={'/blog'}>Blog</NavLink></li> */}
				</ul>
				<NavLink id='topnavlogo2A' to='/'><img id='topnavLogo2' alt='navfoto' src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/04/logo-mobile.png' /></NavLink>
				<ul className='topnavRight'>
					{localStorage.getItem('username') ?
						<NavLink to={'/wishlist'}><i style={{ color: "black", fontSize: "20px" }} className="fa-solid fa-heart"></i></NavLink>
						: <NavLink to={'/login'}><i style={{ color: "black", fontSize: "20px" }} className="fa-solid fa-heart"></i></NavLink>
					}
					{localStorage.getItem('username') ?
						<NavLink to={'/cart'}>
							<div id='topnavCart'>
								<i className="fa-solid fa-cart-shopping"></i>
								<p style={{ position: "absolute", marginLeft: "35px" }} id='cartCount'>{quantity}</p>
							</div>
						</NavLink>
						: <NavLink to={'/login'}>
							<div id='topnavCart'>
								<i className="fa-solid fa-cart-shopping"></i>
								<p style={{ position: "absolute", marginLeft: "35px" }} id='cartCount'>0</p>
							</div>
						</NavLink>
					}

					{localStorage.getItem('username') ?
						<div id='topnavLogin'>
							<li id='loginLi'>
								<h3 title='Username' style={{ fontWeight: "600", marginLeft: "15px" }} id='loginA' >{localStorage.getItem('username')}</h3>
								<i style={{ fontSize: "20px", color: "black" }} className="fa-regular fa-user"></i>
								<ul id='loginDropdown'>
									<li>
										<Link to={'/my-account'}>Hesabım</Link>
									</li>
									{/* <li>
										<Link to={'/wishlist'}>Beğendiklerim</Link>
									</li> */}
									{localStorage.isAdmin === "true" ?
										<li>
											<Link to={'/adminpanel'}>Admin Panel</Link>
										</li>
										: ""
									}
									<li>
										<Link to="/logout">
											<h3 id='loginA' >Çıkış yap</h3>
										</Link>
									</li>
								</ul>
							</li>
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
			</div >

			{/* Mobile Navbar */}
			{
				mobilenav &&
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
								<li><NavLink id='dropdownA' to={'/contact-us'}>Bize Ulaşın</NavLink></li>
								{/* <li><NavLink id='dropdownA' to={'/our-menu'}>Menü</NavLink></li> */}
								{/* <li><NavLink id='dropdownA' to={'/pricing-plans'}>Fiyatlandırma Planları</NavLink></li> */}
								{/* <li><NavLink id='dropdownA' to={'/get-in-touch'}>Temasta Olmak</NavLink></li> */}
							</ul>
						</li>
						{/* <li><NavLink id='mobileTopnavA' to={'/portfolio'}>Portföy</NavLink></li>
						<li><NavLink id='mobileTopnavA' to={'/blog'}>Blog</NavLink></li> */}
						{
							localStorage.isAdmin === "true" &&
							<li><NavLink id='mobileTopnavA' to={'/adminpanel'}>Admin Panel</NavLink></li>
						}
						{localStorage.getItem('username') ?
							<div style={{ display: "flex", gap: '10px', alignItems: "center" }} id='topnavLogin'>
								<i style={{ fontSize: "20px", color: "black" }} class="fa-regular fa-user"></i>
								<Link to={'/my-account'}><h3 id='mobileTopnavA' >{localStorage.getItem('username')}</h3></Link>
								<Link to="/logout">
									<h3 id='mobileTopnavA' >- Çıkış yap</h3>
								</Link>
							</div>

							:
							<li><NavLink id='mobileTopnavA' to={'/login'}>Giriş</NavLink></li>
						}

					</ul>
				</div>
			}
		</nav >
	)
}

export default Navbar