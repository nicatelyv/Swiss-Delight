import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function RegisterPage() {
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
  async function handleButton(values) {
    try {
      wait()
      let response = await axios.post('https://swiss-delight-api.vercel.app/api/auth/register/', values)
      localStorage.setItem('username', response.data.username)
      localStorage.setItem('firstName', response.data.firstName)
      localStorage.setItem('lastName', response.data.lastName)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('isAdmin', response.data.isAdmin)
      window.location.reload(false);
      navigate("/shop")
      console.log(response)

    } catch (err) {
      defaultCursor()
      console.log(err.response)
      setError(error.response.data.message)
    }
  }
  return (
    <section className='registerPage'>
      <div className='registerMain'>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', username: '', password: '' }}
          validationSchema={Yup.object({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            email: Yup.string().email('*Geçerli e-posta yazın').required('*E-posta boş olamaz'),
            username: Yup.string().required("*Kullanıcı adı boş olamaz"),
            password: Yup.string().required("*Şifre boş olamaz"),
          })}
          onSubmit={(values) => handleButton(values)}
        >
          {({ errors, touched }) => (
            <div className='formDiv'>
              <h2 id='registerH2'>Üye Ol</h2>
              <Form>
                <div id='first_last_name'>
                  <div id='frstNameDiv'>
                    <label htmlFor="firstName">Ad</label>
                    <Field className={`inp ${errors.firstName && touched.firstName && "errorInp"}`} name="firstName" type="text" />
                  </div>

                  <div id='lstNameDiv'>
                    <label htmlFor="lastName">Soyad </label>
                    <Field className={`inp ${errors.lastName && touched.lastName && "errorInp"}`} name="lastName" type="text" />
                  </div>
                </div>

                <div className='email_usrname_password'>
                  <div id='inputDiv'>
                    <label htmlFor="username"><i className="fa-solid fa-user"></i> Kullanıcı adı</label>
                    <Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
                  </div>

                  <div id='inputDiv'>
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i> E-posta</label>
                    <Field className={`inp ${errors.email && touched.email && "errorInp"}`} name="email" type="email" />
                  </div>

                  <div id='inputDiv'>
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i> Şifre</label>
                    <Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type="password" />
                  </div>
                </div>

                <Link id='haveaccount' to={'/login'}>Hesabın var mı ?</Link>
                <button id='submitbtn' type="submit">Kayıt Ol</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default RegisterPage