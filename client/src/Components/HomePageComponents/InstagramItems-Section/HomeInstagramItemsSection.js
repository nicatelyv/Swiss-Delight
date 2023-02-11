import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function HomeInstagramItemsSection() {
    return (
        <section className='instagramitemsSec'>
            <div className='instaSecDiv'>
                <div className='item1'></div>
                <div id='instaHover' className='item2'>
                    <Link target={'https://www.instagram.com/p/CKoQ63AJsA9/'} to={'https://www.instagram.com/p/CKoQ63AJsA9/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
                <div id='instaHover' className='item3'>
                    <Link target={'https://www.instagram.com/p/CKoQ5ITpbaI/'} to={'https://www.instagram.com/p/CKoQ5ITpbaI/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
                <div id='instaHover' className='item4'>
                    <Link target={'https://www.instagram.com/p/CKoQ3dFJmMC/'} to={'https://www.instagram.com/p/CKoQ3dFJmMC/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
            </div>
            <div className='instaSecDiv'>
                <div id='instaHover' className='item5'>
                    <Link target={'https://www.instagram.com/p/CKoQ1viJAMD/'} to={'https://www.instagram.com/p/CKoQ1viJAMD/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
                <div id='instaHover' className='item6'>
                    <Link target={'https://www.instagram.com/p/CKoQzWlp46c/'} to={'https://www.instagram.com/p/CKoQzWlp46c/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
                <div id='instaHover' className='item7'>
                    <Link target={'https://www.instagram.com/p/CKoQxL9pzPX/'} to={'https://www.instagram.com/p/CKoQxL9pzPX/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
                <div id='instaHover' className='item8'>
                    <Link target={'https://www.instagram.com/p/CKoQvRUJkAW/'} to={'https://www.instagram.com/p/CKoQvRUJkAW/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeInstagramItemsSection