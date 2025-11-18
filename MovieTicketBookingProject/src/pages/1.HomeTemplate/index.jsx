import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './_components/1.Header/index.jsx'
import Footer from './_components/2.Footer/index.jsx'

const HomeTemplate = () => {
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

export default HomeTemplate
