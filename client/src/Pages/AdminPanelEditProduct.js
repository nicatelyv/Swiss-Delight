import React from 'react'
import { Helmet } from 'react-helmet'
import AdminEditProduct from '../Components/AdminPanelComponents/EditProduct'
import AdminNavbar from '../Components/AdminPanelComponents/Navbar/AdminNavbar'

function AdminPanelEditProduct() {
    return (
        <>
            <Helmet>
                <title>Admin Panel - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <AdminNavbar />
            <AdminEditProduct />
        </>
    )
}

export default AdminPanelEditProduct