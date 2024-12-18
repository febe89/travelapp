import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-800 py-8 text-white'>
      <div className="container mx-auto px-4">

      <div className='grid grid-cols-1 md:grid-cols-3 '>
        <div className=''>
          <h2 className='text-2xl font-bold mb-4'>Travel</h2>
          <p className=''>Your trusted travel partner for unforgettable travel experiences. Explore the world with us.</p>
        </div>

        <div className='flex flex-col md:items-center'>
          <h2 className='mb-4 font-semibold text-lg'>Quick Links</h2>
          <div className='flex flex-col space-y-2 '>
            <Link to='/' className=''>
              Home
            </Link>
            <Link to='/gallery' className=''>
              Gallery
            </Link>
            <Link to='/contact' className=''>
              Contact
            </Link>
            <Link className='/about'>About</Link>
          </div>
        </div>

        <div className=''>
          <h2 className='font-semibold mb-4 text-lg'>Follow Us</h2>
          <div className='flex space-x-4 mb-4'>
            <FaFacebook size={24}  className='text-blue-500 hover:text-blue-600' />
            <FaTwitter size={24}  className='text-blue-500 hover:text-blue-600'/>
            <FaInstagram size={24}  className='text-blue-500 hover:text-blue-600'/>
            <FaLinkedin size={24} className='text-blue-500 hover:text-blue-600' />
          </div>
          <form action='' className='flex items-center mt-8 justify-center'>
            <input type='text' className='w-full p-2 rounded-l-lg bg-gray-800 border-gray-600 border' placeholder='Enter Email' />
            <button className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border-blue-600  '>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex justify-between border-t'>
        <p className=''>&copy; 2024</p>
        <div className=''>
          <Link>Privacy Policy</Link>
          <Link>Terms of Services</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
