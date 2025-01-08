interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: 'Choose a Property',
    description: 'Browse our curated selection of premium real estate opportunities.',
    icon: '/icons/property.svg'
  },
  {
    title: 'Invest with Crypto',
    description: 'Use cryptocurrency to purchase fractional ownership in properties.',
    icon: '/icons/crypto.svg'
  },
  {
    title: 'Track Performance',
    description: 'Monitor your investments and returns in real-time through our dashboard.',
    icon: '/icons/track.svg'
  },
  {
    title: 'Grow Your Portfolio',
    description: 'Diversify your investments across multiple properties and locations.',
    icon: '/icons/portfolio.svg'
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0B1120] py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#3C82F6] rounded-lg p-4 mb-4 flex items-center justify-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#878E9B] leading-relaxed max-w-[250px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
