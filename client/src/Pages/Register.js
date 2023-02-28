import React from 'react'
import { Helmet } from 'react-helmet'
import RegisterPage from '../Components/RegisterPageComponents/Register'
// import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

function Register() {
    return (
        <>
            <Helmet>
                <title>Register - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <Navbar />
            <RegisterPage />
            {/* <Footer /> */}
        </>
    )
}

export default Register