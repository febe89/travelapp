const destinations = [
  {
    title: "Mountain Adventure",
    description: "Explore the serene beauty of the mountains ",
    image: "https://images.unsplash.com/photo-1732740674539-74d1f760acfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cityscape at Night",
    description: "Discover the vibrant nightlife and dazzling lights of the bustling city.",
    image: "https://images.unsplash.com/photo-1733169258772-298088c23f57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Beach Paradise",
    description: "Relax on golden sands, swim in crystal-clear waters,",
    image: "https://images.unsplash.com/photo-1732561030603-477b67140893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Forest Retreat",
    description: "Immerse yourself in the tranquility of lush green .",
    image: "https://images.unsplash.com/photo-1733508244270-1155719f22d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Desert Expedition",
    description: "Embark on an adventurous journey .",
    image: "https://plus.unsplash.com/premium_photo-1690522330763-7cdc0f1eecc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  },
];

const PopularDestinations = () => {
  return <div className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl mb-8 font-bold text-center">PopularDestinations</h3>
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {destinations.map((city, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden transform transition duration-300 hover:scale-110">
              <img src={city.image} alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold mb-2">{ city.title}</h4>
              <p className="text-gray-600">{ city.description}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default PopularDestinations
