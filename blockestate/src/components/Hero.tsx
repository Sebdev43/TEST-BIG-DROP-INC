import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/home.jpg', '/home2.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImageIndex = (currentImage + 1) % images.length;

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: 'cover',
              backgroundPosition: '75% center',
              opacity: currentImage === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Next Image Preview */}
      <div 
        className="absolute top-0 right-0 w-8 h-full transition-opacity duration-1000 hidden md:block"
        style={{
          backgroundImage: `url("${images[nextImageIndex]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl pt-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Invest in Real Estate
              <span className="block text-[#3C82F6] mt-2">with Blockchain</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
              BlockEstate revolutionizes property investment through fractional
              ownership. Invest in premium real estate with cryptocurrency,
              starting from just $100.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#3C82F6] hover:bg-[#0EA5E9] text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center group">
                Start Investing
                <svg 
                  className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-medium transition-colors backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
