import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginComponents() {
    const navigate = useNavigate();
    const [error, setError] = useState("")

    function wait() {
        let button = document.getElementById('submitbtn');
        button.style.cursor = 'wait'
    }
    function defaultCursor() {
        let button = document.getElementById('submitbtn');
        button.style.cursor = 'pointer'
    }
    async function handleSubmit(values) {
        try {
            wait()
            let response = await axios.post('https://swiss-delight-api.vercel.app/api/auth/login/', values)
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('firstName', response.data.firstName)
            localStorage.setItem('lastName', response.data.lastName)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('isAdmin', response.data.isAdmin)
            navigate("/shop")
            window.location.reload(false);

        } catch (err) {
            defaultCursor()
            console.log(err.response)
            setError(err.response.data.message)
        }
    }
    return (
        <section className='loginPage'>
            <div className='loginMain'>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string().required("*Kullanıcı adı boş olamaz"),
                        password: Yup.string().required("*Şifre boş olamaz"),
                    })}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ errors, touched }) => (
                        <div className='formDiv'>
                            <h2 id='loginH2'>Giriş Yap</h2>
                            <Form>
                                <div className='login_usrname_password'>
                                    <div id='loginDiv'>
                                        <label htmlFor="username"><i className="fa-solid fa-user"></i> Kullanıcı adı</label>
                                        <Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
                                    </div>

                                    <div id='loginDiv'>
                                        <label htmlFor="password"><i className="fa-solid fa-lock"></i> Şifre</label>
                                        <Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type="password" />
                                    </div>
                                </div>
                                <span className='errors' style={{ color: "#d91900" }}>{error}</span>
                                <Link id='havenotaccount' to={'/register'}>Hesabın yok mu ?</Link>
                                <button id='submitbtn' type="submit">Giriş Yap</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default LoginComponents