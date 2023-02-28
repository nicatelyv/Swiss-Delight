import React from 'react'
import { Helmet } from 'react-helmet'
import AdminPanelAddProducts from '../Components/AdminPanelComponents/AddProducts'
import AdminNavbar from '../Components/AdminPanelComponents/Navbar/AdminNavbar'

function AdminAddProduct() {
    return (
        <>
            <Helmet>
                <title>Admin Panel - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <AdminNavbar />
            <AdminPanelAddProducts />
        </>
    )
}

export default AdminAddProduct