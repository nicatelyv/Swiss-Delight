import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ContactUsMessageSection() {
    const navigate = useNavigate();

    return (
        <section className='ContactUsMessageSection'>
            <div className='ContactUsMessageSectionMain'>
                <Formik
                    initialValues={{ firstName: '', message: '', email: '' }}
                    validationSchema={Yup.object({
                        firstName: Yup.string().required("*"),
                        email: Yup.string().required("*"),
                        message: Yup.string().required("*"),
                    })}
                    onSubmit={(values) => {
                        axios.post('http://localhost:5555/api/contact-messages', values)
                        navigate("/contact-us")
                    }}
                >
                    {({ errors, touched }) => (
                        <div className='formDiv'>
                            <h2 id='loginH2'>Mesaj gönder</h2>
                            <Form>
                                <div className='Contact_Us_Messages'>
                                    <div id='addDiv'>
                                        <label htmlFor="firstName"><i class="fa-regular fa-user"></i> Adınız</label>
                                        <Field className={`inp ${errors.firstName && touched.firstName && "errorInp"}`} name="firstName" type="text" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="email"><i class="fa-regular fa-envelope"></i> E-posta adresiniz</label>
                                        <Field className={`inp ${errors.email && touched.email && "errorInp"}`} name="email" type="email" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="message"><i class="fa-regular fa-message"></i> Mesajınız</label>
                                        <Field className={`inp ${errors.message && touched.message && "errorInp"}`} name="message" type="text" />
                                    </div>
                                </div>
                                <button id='submitbtn' type="submit"> <i class="fa-regular fa-paper-plane"></i> Mesaj gönder</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default ContactUsMessageSection