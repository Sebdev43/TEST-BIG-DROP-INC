import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const images = [
  '/home.jpg',
  '/home2.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[45vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center">
        <div className="w-full px-4 sm:max-w-7xl sm:px-6 lg:px-8">
          <div className="w-full sm:max-w-[600px] sm:ml-8 lg:ml-16">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Invest in Real Estate{' '}
              <span className="text-[#3C82F6]">with Blockchain</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#878E9B] mb-6 sm:mb-8 w-full sm:max-w-[650px]">
              BlockEstate revolutionizes property investment through fractional ownership.
              Invest in premium real estate with cryptocurrency, starting from just $100.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/invest"
                className="w-full sm:w-auto inline-flex justify-center items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#3C82F6] text-white rounded-lg hover:bg-[#3C82F6]/90 transition-colors text-sm sm:text-base lg:text-lg font-medium"
              >
                Start Investing
              </Link>
              <Link
                to="/learn"
                className="w-full sm:w-auto inline-flex justify-center items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base lg:text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
