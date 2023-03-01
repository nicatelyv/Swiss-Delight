import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AdminPanelAddProducts() {
    const navigate = useNavigate();
    const [error, setError] = useState("")

    async function handleSubmit(values) {
        try {
            let response = await axios.post('http://localhost:5555/api/products', values)
            navigate("/adminpanel")

        } catch (err) {
            console.log(err.response)
            setError(err.response.data.message)
        }
    }
    return (
        <section className='AdminAddProduct'>
            <div className='AdminAddProductMain'>
                <Formik
                    initialValues={{ productname: '', img1: "", img2: "", img3: "", img4: "", desc: "", tags: "", category: "", price: "", sku: '' }}
                    validationSchema={Yup.object({
                        productname: Yup.string().required("*"),
                        img1: Yup.string().required("*"),
                        img2: Yup.string().required("*"),
                        img3: Yup.string().required("*"),
                        img4: Yup.string().required("*"),
                        desc: Yup.string().required("*"),
                        tags: Yup.string().required("*"),
                        category: Yup.string().required("*"),
                        sku: Yup.number().required("*"),
                        price: Yup.number().required("*"),
                    })}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ errors, touched }) => (
                        <div className='formDiv'>
                            <h2 id='addH2'>Ürün ekle</h2>
                            <Form>
                                <div className='admin_product_add'>
                                    <div id='addDiv'>
                                        <label htmlFor="productname">Ürün ismi</label>
                                        <Field className={`inp ${errors.productname && touched.productname && "errorInp"}`} name="productname" type="text" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="desc">Hakkında</label>
                                        <Field className={`inp ${errors.desc && touched.desc && "errorInp"}`} name="desc" type="text" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="category">Kategori</label>
                                        <Field className={`inp ${errors.category && touched.category && "errorInp"}`} name="category" type="text" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="price">Fiyat</label>
                                        <Field className={`inp ${errors.price && touched.price && "errorInp"}`} name="price" type="number" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img1">Resim 1 linki</label>
                                        <Field className={`inp ${errors.img1 && touched.img1 && "errorInp"}`} name="img1" type="url" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img2">Resim 2 linki</label>
                                        <Field className={`inp ${errors.img2 && touched.img2 && "errorInp"}`} name="img2" type="url" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img3">Resim 3 linki</label>
                                        <Field className={`inp ${errors.img3 && touched.img3 && "errorInp"}`} name="img3" type="url" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img4">Resim 4 linki</label>
                                        <Field className={`inp ${errors.img4 && touched.img4 && "errorInp"}`} name="img4" type="url" />
                                    </div>

                                    <div id='addDiv'>
                                        <label htmlFor="tags">Etiketler</label>
                                        <Field className={`inp ${errors.tags && touched.tags && "errorInp"}`} name="tags" type="text" />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="sku">SKU</label>
                                        <Field className={`inp ${errors.sku && touched.sku && "errorInp"}`} name="sku" type="number" />
                                    </div>
                                </div>
                                <span className='errors' style={{ color: "#d91900" }}>{error}</span>
                                <button id='submitbtn' type="submit">Ekle</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default AdminPanelAddProducts