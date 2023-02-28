import React from 'react'
import { Helmet } from 'react-helmet'
import AdminPanelMessagesComponent from '../Components/AdminPanelComponents/Contact Messages'
import AdminNavbar from '../Components/AdminPanelComponents/Navbar/AdminNavbar'

function AdminUserMessage() {
    return (
        <>
            <Helmet>
                <title>Admin Panel - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <AdminNavbar />
            <AdminPanelMessagesComponent />
        </>
    )
}

export default AdminUserMessage