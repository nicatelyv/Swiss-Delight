import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function DetailPageHeader() {
    return (
        <header className='detailsPageHeader'>
            <div className='detailHeaderText'>
                <Link to={'/'}><h4 id='detailheaderH4'>Ana Sayfa</h4></Link>
                <h4 id='detailheaderH4'>/</h4>
                <Link to={'/shop'}><h4 id='detailheaderH4'>Mağaza</h4></Link>
                <h4 id='detailheaderH4'>/</h4>
                <h4 id='detailheaderH4'>Details</h4>
            </div>
        </header>
    )
}

export default DetailPageHeader
