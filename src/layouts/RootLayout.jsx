import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className='font-poppins' >
      <header>
        <Header/>
      </header>
      <main className='min-h-[calc(100vh-200px)]'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default RootLayout
