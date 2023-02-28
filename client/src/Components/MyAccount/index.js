import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function MyAccountSection() {
    return (
        <section className='MyAccountSection'>
            <div className='MyAccountSectionMain'>
                <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='foto' />
                <div>
                    <div className='MyAccountName'>
                        <h2 id='myName'>{localStorage.getItem('firstName') ? localStorage.getItem('firstName') : <img style={{ width: "30px" }} src='https://www.shutterstock.com/image-vector/not-allowed-sign-no-vector-260nw-380111191.jpg' alt='fff' />}</h2>
                        <h2 id='myName'>{localStorage.getItem('lastName') ? localStorage.getItem('lastName') : <img style={{ width: "30px" }} src='https://www.shutterstock.com/image-vector/not-allowed-sign-no-vector-260nw-380111191.jpg' alt='fff' />}</h2>
                    </div>
                    <h3><i style={{ color: "black" }} class="fa-regular fa-user"></i> {localStorage.getItem('username') ? localStorage.getItem('username') : <img style={{ width: "30px" }} src='https://www.shutterstock.com/image-vector/not-allowed-sign-no-vector-260nw-380111191.jpg' alt='fff' />}</h3>
                    <h3><i style={{ color: "black" }} class="fa-regular fa-envelope"></i> {localStorage.getItem('email') ? localStorage.getItem('email') : <img style={{ width: "30px" }} src='https://www.shutterstock.com/image-vector/not-allowed-sign-no-vector-260nw-380111191.jpg' alt='fff' />}</h3>
                    <Link to={'/logout'}><h4>Çıkış yap <i class="fa-solid fa-right-from-bracket"></i></h4></Link>
                </div>
            </div>
        </section>
    )
}

export default MyAccountSection