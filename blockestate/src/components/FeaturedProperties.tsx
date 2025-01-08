interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  roi: number;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Luxury Apartment in Downtown',
    location: 'New York City, NY',
    price: 250000,
    roi: 8.5,
    image: '/immeuble.jpg'
  },
  {
    id: 2,
    title: 'Beachfront Villa',
    location: 'Miami, FL',
    price: 500000,
    roi: 7.2,
    image: '/home3.jpg'
  },
  {
    id: 3,
    title: 'Modern Office Building',
    location: 'San Francisco, CA',
    price: 750000,
    roi: 9.1,
    image: '/immeuble2.jpg'
  }
];

const FeaturedProperties = () => {
  return (
    <section className="bg-[#1B2434] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-[#242F42] rounded-lg overflow-hidden"
            >
              <div className="relative h-40">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {property.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {property.location}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#38BDF8] font-medium">
                    ${property.price.toLocaleString()}
                  </span>
                  <span className="text-[#10B981]">
                    Expected ROI: {property.roi}%
                  </span>
                </div>
                <button className="w-full bg-[#3C82F6] hover:bg-[#0EA5E9] text-white py-2 rounded transition-colors text-center">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
