import React from 'react'
import { Helmet } from 'react-helmet'
import AdminNavbar from '../Components/AdminPanelComponents/Navbar/AdminNavbar'
import AdminPanelUsersComponent from '../Components/AdminPanelComponents/Users'

function AdminPanelUsers() {
    return (
        <>
            <Helmet>
                <title>Admin Panel - Swiss Delight - Chocolate & Cake</title>
            </Helmet>
            <AdminNavbar />
            <AdminPanelUsersComponent />
        </>
    )
}

export default AdminPanelUsers