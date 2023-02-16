import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function ShopHeader() {
    return (
        <header className='shopheader'>
            <div className='shopHeaderText'>
                <Link to={'/'}><h4 id='shopheaderH4'>Ana Sayfa</h4></Link>
                <h4 id='shopheaderH4'>/</h4>
                <h4 id='shopheaderH4'>Mağaza</h4>
            </div>
        </header>
    )
}

export default ShopHeader