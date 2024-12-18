import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa"

const images = ['https://images.unsplash.com/photo-1732635150320-df39f293481b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1732561030603-477b67140893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1702884162908-7e78b9381721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1732696290916-bef60504fa79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1731426899986-6506cc1beb4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D', 'https://images.unsplash.com/photo-1683491753112-604719ba1797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D']
const Contact = () => {
  return (
    <div className='bg-gray-100'>

      <div className=' min-h-96 relative' style={{ backgroundImage: 'url(../../public/paris.jpeg)' }}>
        <div className='absolute text-white bg-black inset-0 opacity-50 flex items-center justify-center flex-col'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>Contact</h1>
        </div>
      </div>

      <div className=" container  mx-auto grid gap-8 py-12 px-4">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-500 mr-2"/>
              <p className="">info@travelagency.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-500 mr-2"/>
              <p className="">+123 456 789</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMap className="text-blue-500 mr-2" />
              <p className="">123 Travel St, City Country</p>
            </div>
          </div>

          <div className="bg-white shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <form className="">
              <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 mb-2">Email</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 mb-2">Message</label>
                <textarea name="" id="" className="w-full p-2 border border-gray-300 rounded"  />
              </div>
              <button className="py-2 px-4 bg-blue-500 text-white rounded">Send Message</button>
            </form>
          </div>
      </div>
        </div>

    </div>
  )
}

export default Contact
