'../../public/paris.jpeg'

import Clients from '../components/Clients'
import PopularDestinations from '../components/PopularDestinations'
import Services from '../components/Services'

const Home = () => {
  return (
    < >
      <div className='min-h-screen relative' style={{ backgroundImage: 'url(../../public/paris.jpeg)' }}>
        <div className='absolute text-white bg-black inset-0 opacity-50 flex items-center justify-center flex-col'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Explore the world with us</h1>
          <p className='mb-8 text-lg md:text-2xl'>Explore amazing places at exclusive discounts</p>
          <button className='px-6 py-2 rounded-full text-lg border hover:bg-gray-600 hover:scale-105 transform transition duration-300'>Get Started</button>
        </div>
      </div>
      <PopularDestinations />
      <Services/>
      <Clients/>
    </>
    
  )
}

export default Home
