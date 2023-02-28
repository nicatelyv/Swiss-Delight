import React from 'react'
import { Helmet } from 'react-helmet'
import AdminNavbar from '../Components/AdminPanelComponents/Navbar/AdminNavbar'
import AdminPanelProductsComponent from '../Components/AdminPanelComponents/Products'

function AdminPanelProducts() {
    return (
        <>
            <Helmet>
                <title>Admin Panel - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <AdminNavbar />
            <AdminPanelProductsComponent />
        </>
    )
}

export default AdminPanelProducts