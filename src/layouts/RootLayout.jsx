import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import useDynamicTitle from '../dynamicTitle/useDynamicTitle'

const RootLayout = () => {
  useDynamicTitle()
  return (
    <div className='font-poppins dark:bg-[#121C22]' >
      <header className='sticky top-0 z-50 bg-base-200 dark:bg-[#1B262C] shadow-lg'>
        <Header/>
      </header>
      <main className='min-h-[calc(100vh-132px)]'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default RootLayout
