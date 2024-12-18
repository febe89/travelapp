import { FaCar, FaGlobe, FaHotel, FaPlane } from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-400"/>,
    title: "Flight Booking",
    description: "Book flights at the best prices with flexible options to match your travel plans.",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-400" />, // Replace with an actual icon class or image URL if needed
    title: "Hotel Stays",
    description: "Find and reserve the perfect accommodations for a comfortable stay anywhere.",
  },
  {
    icon: <FaGlobe className="text-4xl text-blue-400"/>, // Replace with an actual icon class or image URL if needed
    title: "Custom Tours",
    description: "Explore personalized travel packages that cater to your unique interests.",
  },
  {
    icon: <FaCar className="text-4xl text-blue-400"/>, // Replace with an actual icon class or image URL if needed
    title: "Car Rentals",
    description: "Rent vehicles for local sightseeing, road trips, or intercity travel with ease.",
  },
];

const Services = () => {
  return <div className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl mb-8 font-bold text-center">Our Services</h3>
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md cursor-pointer flex flex-col items-center transform transition duration-300 hover:scale-110 p-4">
              <div className="mb-4">{ item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{ item.title}</h4>
              <p className="text-gray-600">{ item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default Services
