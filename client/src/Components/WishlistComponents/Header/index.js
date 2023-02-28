import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function WishListHeader() {
    return (
        <header className='WishListHeader'>
            <Link to={'/shop'}><h4 id='WishListHeaderH4'>Mağaza</h4></Link>
            <h1 id='WishListHeaderH1'>Beğendiklerim</h1>
        </header>
    )
}

export default WishListHeader