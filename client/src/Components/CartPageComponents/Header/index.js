import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function CartHeader() {
    return (
        <header className='CartHedaer'>
            <Link to={'/shop'}><h4 id='CartHedaerH4'>Mağaza</h4></Link>
            <h1 id='CartHedaerH1'>Sepetim</h1>
        </header>
    )
}

export default CartHeader