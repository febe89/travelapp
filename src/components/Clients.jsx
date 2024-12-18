import { FaCar, FaGlobe, FaHotel, FaPlane } from "react-icons/fa";

const clients = [
  {
    name: "Alice Johnson",
    image: "https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?t=st=1734515770~exp=1734519370~hmac=a5315957afb02e77e8bfaa55849518a356b8792bddacd015b48bc6fc31742e2f&w=740",
    text: "The trip was incredible! Everything was perfectly organized, and the support team was amazing.",
    location: "New York, USA",
  },
  {
    name: "Rajesh Kumar",
    image: "https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?t=st=1734515770~exp=1734519370~hmac=a5315957afb02e77e8bfaa55849518a356b8792bddacd015b48bc6fc31742e2f&w=740",
    text: "I had an amazing experience exploring the local culture. The tour package exceeded my expectations!",
    location: "Delhi, India",
  },
  {
    name: "Sofia Martínez",
    image: "https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?t=st=1734515770~exp=1734519370~hmac=a5315957afb02e77e8bfaa55849518a356b8792bddacd015b48bc6fc31742e2f&w=740",
    text: "Thanks to this travel agency, I had the most memorable beach vacation ever. Highly recommend!",
    location: "Barcelona, Spain",
  },
];


const Clients = () => {
  return <div className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl mb-8 font-bold text-center">Our Services</h3>
      <div className="grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-3 gap-6">
        {clients.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md cursor-pointer  transform transition duration-300 hover:scale-110 text-center p-6">
            <img src={item.image} alt="" className="w-24 h-24 mx-auto mb-4 rounded-full" />
              <h4 className="text-xl font-bold mb-2">{ item.name}</h4>
              <p className="text-gray-600">{ item.location}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default Clients
