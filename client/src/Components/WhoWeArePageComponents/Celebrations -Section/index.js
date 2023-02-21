import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function WhoWeAreCelebrations() {
    return (
        <section className='WhoWeAreCelebrations'>
            <div className='WhoWeAreCelebrationsBackground1'></div>
            <div className='WhoWeAreCelebrationsTexts'>
                <div className='celebrationsItems'>
                    <Link to={'/our-menu'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/01/h1-icon-img2.png' alt='foto' /></Link>
                    <div id='cItemTexts'>
                        <Link to={'/our-menu'}><h3 id='celebrationH3'>Uzmanlıklar</h3></Link>
                        <p id='celebrationP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim reklam minimum zaman</p>
                    </div>
                </div>
                <div className='celebrationsItems'>
                    <Link to={'/our-menu'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/h1-icon3.png' alt='foto' /></Link>
                    <div id='cItemTexts'>
                        <Link to={'/our-menu'}><h3 id='celebrationH3'>Kutlamalar</h3></Link>
                        <p id='celebrationP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim reklam minimum zaman</p>
                    </div>
                </div>
                <div className='celebrationsItems'>
                    <Link to={'/our-menu'}><img src='https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/03/h1-icon1.png' alt='foto' /></Link>
                    <div id='cItemTexts'>
                        <Link to={'/our-menu'}><h3 id='celebrationH3'>Şirketimiz</h3></Link>
                        <p id='celebrationP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim reklam minimum zaman</p>
                    </div>
                </div>
            </div>
            <div className='WhoWeAreCelebrationsBackground2'></div>
        </section>
    )
}

export default WhoWeAreCelebrations