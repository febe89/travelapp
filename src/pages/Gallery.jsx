const images = ['https://images.unsplash.com/photo-1732635150320-df39f293481b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1732561030603-477b67140893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1702884162908-7e78b9381721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1732696290916-bef60504fa79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1731426899986-6506cc1beb4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D', 'https://images.unsplash.com/photo-1683491753112-604719ba1797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTl8fHxlbnwwfHx8fHw%3D']
const Gallery = () => {
  return (
    <div className=''>

      <div className='min-h-96 relative' style={{ backgroundImage: 'url(../../public/paris.jpeg)' }}>
        <div className='absolute text-white bg-black inset-0 opacity-50 flex items-center justify-center flex-col'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>Gallery</h1>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {images.map((image, index) => (
            <div key={index}  className="rounded-lg overflow-hidden shadow-md">

            <img  src={image} alt='' className='w-full h-full' />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Gallery
