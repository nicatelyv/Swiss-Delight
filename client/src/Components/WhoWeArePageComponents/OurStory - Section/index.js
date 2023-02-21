import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function OurHistoryWhoWeAre() {
    return (
        <section className='ourhistory_whoweare'>
            <div className='ourhistoryBackground'></div>
            <div className='ourhistory_whoweare_texts'>
                <h5 id='ourhis_wwa_h5'>GELENEK</h5>
                <h2 id='ourhis_wwa_h2'>BİZİM HİKAYEMİZ</h2>
                <p id='ourhis_wwa_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. En az ve en az parayla, egzersiz yapmak her zaman işe yarayan bir sıvıdır. Duis aute irure dolor in reprehen türet in voluptate velit esse</p>
                <Link to={'/our-history'}><button id='ourhis_wwa_btn'>DEVAMINI OKU <i className="fa-solid fa-arrow-right-long"></i></button></Link>
            </div>
        </section>
    )
}

export default OurHistoryWhoWeAre