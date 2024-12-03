import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id="error-page" className="flex flex-col justify-center items-center py-10 space-y-4">
    <Link to={'/'} className="text-[#374151] flex items-center gap-2"><FaArrowLeft /> Back to Home</Link>
    <img src="https://i.ibb.co.com/2nV77F1/pngtree-error.jpg" alt="" className='object-cover rounded-lg' />
  </div>
  )
}

export default ErrorPage
