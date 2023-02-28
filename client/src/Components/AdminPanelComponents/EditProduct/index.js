import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function AdminEditProduct() {
    const { id } = useParams();
    const [editProduct, setEditProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5555/api/products/find/${id}`).then((response) => {
            setEditProduct(response.data);
        })
    }, [])

    return (
        <section className='AdminEditProduct'>
            <div className='AdminEditProductMain'>
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
                        price: Yup.number().required("*")
                    })}
                    onSubmit={(values) => {
                        axios.put(`http://localhost:5555/api/products/${editProduct._id}`, {
                            productname: values.productname,
                            img1: values.img1,
                            img2: values.img2,
                            img3: values.img3,
                            img4: values.img4,
                            desc: values.desc,
                            tags: values.tags,
                            category: values.category,
                            sku: values.sku,
                            price: values.price
                        })
                        navigate("/adminpanel")
                    }}
                >
                    {({ errors, touched }) => (
                        <div className='formDiv'>
                            <h2 id='addH2'>Ürün yenile</h2>
                            <Form>
                                <div className='admin_product_add'>
                                    <div id='addDiv'>
                                        <label htmlFor="productname">Ürün ismi</label>
                                        <Field className={`inp ${errors.productname && touched.productname && "errorInp"}`} name="productname" type="text" placeholder={editProduct.productname} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="desc">Hakkında</label>
                                        <Field className={`inp ${errors.desc && touched.desc && "errorInp"}`} name="desc" type="text" placeholder={editProduct.desc} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="category">Kategori</label>
                                        <Field className={`inp ${errors.category && touched.category && "errorInp"}`} name="category" type="text" placeholder={editProduct.category} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="price">Fiyat</label>
                                        <Field className={`inp ${errors.price && touched.price && "errorInp"}`} name="price" type="number" placeholder={'$' + editProduct.price + '.00'} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img1">Resim 1 linki</label>
                                        <Field className={`inp ${errors.img1 && touched.img1 && "errorInp"}`} name="img1" type="text" placeholder={editProduct.img1} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img2">Resim 2 linki</label>
                                        <Field className={`inp ${errors.img2 && touched.img2 && "errorInp"}`} name="img2" type="text" placeholder={editProduct.img2} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img3">Resim 3 linki</label>
                                        <Field className={`inp ${errors.img3 && touched.img3 && "errorInp"}`} name="img3" type="text" placeholder={editProduct.img3} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="img4">Resim 4 linki</label>
                                        <Field className={`inp ${errors.img4 && touched.img4 && "errorInp"}`} name="img4" type="text" placeholder={editProduct.img4} />
                                    </div>

                                    <div id='addDiv'>
                                        <label htmlFor="tags">Tags</label>
                                        <Field className={`inp ${errors.tags && touched.tags && "errorInp"}`} name="tags" type="text" placeholder={editProduct.tags} />
                                    </div>
                                    <div id='addDiv'>
                                        <label htmlFor="sku">SKU</label>
                                        <Field className={`inp ${errors.sku && touched.sku && "errorInp"}`} name="sku" type="number" placeholder={editProduct.sku} />
                                    </div>
                                </div>
                                <button id='submitbtn' type="submit">Değiştir</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default AdminEditProduct