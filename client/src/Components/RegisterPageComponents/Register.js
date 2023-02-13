import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <section className='registerPage'>
      <div className='registerMain'>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', username: '', password: '' }}
          validationSchema={Yup.object({
            firstName: Yup.string(),
            lastName: Yup.string(),
            email: Yup.string().email('*Geçerli e-posta yazın').required('*E-posta boş olamaz'),
            username: Yup.string().required("*Kullanıcı adı boş olamaz"),
            password: Yup.string().required("*Şifre boş olamaz"),
          })}
          onSubmit={(values) => {
            axios.post('http://localhost:5555/api/auth/register/', values)
          }}
        >
          <div className='formDiv'>
            <h2 id='registerH2'>Üye Ol</h2>

            <Form>
              <div id='first_last_name'>
                <div id='frstNameDiv'>
                  <label htmlFor="firstName">Ad</label>
                  <Field name="firstName" type="text" />
                </div>

                <div id='lstNameDiv'>
                  <label htmlFor="lastName">Soyad </label>
                  <Field name="lastName" type="text" />
                </div>
              </div>

              <div className='email_usrname_password'>
                <div id='inputDiv'>
                  <label htmlFor="username"><i class="fa-solid fa-user"></i> Kullanıcı adı</label>
                  <Field name="username" type="text" />
                  <div id='errors'><ErrorMessage name="username" /></div>
                </div>

                <div id='inputDiv'>
                  <label htmlFor="email"><i class="fa-solid fa-envelope"></i> E-posta</label>
                  <Field name="email" type="email" />
                  <div id='errors'><ErrorMessage name="email" /></div>
                </div>


                <div id='inputDiv'>
                  <label htmlFor="password"><i class="fa-solid fa-lock"></i> Şifre</label>
                  <Field name="password" type="password" />
                  <div id='errors'><ErrorMessage name="password" /></div>
                </div>


              </div>

              <Link id='haveaccount' to={'/login'}>Hesabın var mı ?</Link>
              <button id='submitbtn' type="submit">Kayıt Olmak</button>
            </Form>
          </div>
        </Formik>
      </div>
    </section>
  )
}

export default RegisterPage