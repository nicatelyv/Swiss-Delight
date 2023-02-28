import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'

function AdminNavbar() {
    return (
        <nav className='admintopNav'>
            <div className='adminNav'>
                <ul className='adminNavUl'>
                    <ul id='adminNavUl'>
                        <li id='adminNavLi'>Admin Paneli
                            <ul id='adminNavDropdown'>
                                <Link to={'/adminpanel-users'}><li>Kullanıcılar</li></Link>
                                <Link to={'/adminpanel'}><li id='adminNavLi2'>Ürünler
                                    <ul id='adminNavDropdown2'>
                                        <Link to={'/adminpanel-addproduct'}><li>Ürün ekle</li></Link>
                                    </ul>
                                </li></Link>
                                <Link to={'/adminpanel-user-message'}><li>Mesajlar</li></Link>
                            </ul>
                        </li>
                        <NavLink to={'/'}><li id='adminNavLi'>Swiss Delight</li></NavLink>
                        <li style={{ cursor: "default" }} id='adminNavLi'>Database <img style={{ width: "20px", cursor: "default" }} src='https://media.tenor.com/8CYBdrNs8jAAAAAi/circle.gif' alt='Database Connected' /></li>
                    </ul>
                    <div>
                        <div id='adminProfilePhoto'></div>
                        <h2 id='AdminName'>Nicat Aliyev</h2>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default AdminNavbar