import React from 'react'
import { Helmet } from 'react-helmet'
import LoginComponents from '../Components/LoginPageComponents/LoginComponents'
// import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function Login() {
    return (
        <>
            <Helmet>
                <title>Login - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <LoginComponents />
            {/* <Footer /> */}
        </>
    )
}

export default Login