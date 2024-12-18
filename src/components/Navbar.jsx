import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [bars, setBars] = useState(false)
  return (
    <nav className='bg-white fixed top-0 left-0 right-0 m-4 z-50 '>
      <div className='h-16 flex items-center px-4 justify-between'>
        <h2 className='font-bold text-2xl'>Brand</h2>
        <div className='space-x-4 text-sm font-bold hidden md:block'>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/'>
            Home
          </Link>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/gallery'>
            Gallery
          </Link>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/contact'>
            Contact
          </Link>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/about'>
            About
          </Link>
          <button className='px-6 py-2 bg-gray-300 text-white border'>Login</button>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setBars(!bars)} className=''>
            {bars ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {bars && (
        <div className='space-y-4 text-sm font-bold flex items-center flex-col md:hidden'>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/'>
            Home
          </Link>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/gallery'>
            Gallery
          </Link>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/contact'>
            Contact
          </Link>
          <Link className='px-6 py-2 hover:bg-gray-600 hover:text-white' to='/about'>
            About
          </Link>
          <button className='px-6 py-2 bg-gray-300 text-white border'>Login</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
