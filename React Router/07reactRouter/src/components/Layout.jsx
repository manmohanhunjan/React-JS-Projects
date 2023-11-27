import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />  {/* This is where the child components will be rendered */}
      <Footer/>
    </>
  )
}

export default Layout
