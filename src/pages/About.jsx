import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa"

const images = ['https://images.unsplash.com/photo-1732635150320-df39f293481b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1732561030603-477b67140893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1702884162908-7e78b9381721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1732696290916-bef60504fa79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1731426899986-6506cc1beb4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D', 'https://images.unsplash.com/photo-1683491753112-604719ba1797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D']
const About = () => {
  return (
    <div className='bg-gray-100'>

      <div className=' min-h-96 relative' style={{ backgroundImage: 'url(../../public/paris.jpeg)' }}>
        <div className='absolute text-white bg-black inset-0 opacity-50 flex items-center justify-center flex-col'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>About</h1>
        </div>
      </div>

      <div className=" container  mx-auto grid gap-8 py-12 px-4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1729717069574-e25f4bb69d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D" className="w-full h-96 object-cover shadow-md rounded" alt="" />
        </div>
          <div className="flex flex-col  justify-center">
            <h3 className="text-2xl font-bold mb-4">Who we are</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sed ab sequi? Placeat maxime inventore aliquid necessitatibus non delectus cumque.</p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam odio ut optio ipsa tenetur eligendi quam sapiente, neque mollitia dignissimos, aut voluptatum debitis odit!</p>
        </div>
      </div>
        </div>

    </div>
  )
}

export default About
