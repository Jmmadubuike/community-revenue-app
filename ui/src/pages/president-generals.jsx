import React from 'react';

const PresidentGenerals = () => {
  // Sample data - replace with actual data
  const presidents = [
    {
      id: 1,
      name: "Current President-General",
      term: "2020 - Present",
      image: "/images/presidents/president1.jpg",
      description: "Description of achievements and contributions during their tenure."
    },
    {
      id: 2,
      name: "Previous President-General",
      term: "2015 - 2020",
      image: "/images/presidents/president2.jpg",
      description: "Description of achievements and contributions during their tenure."
    },
    // Add more presidents as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          President-Generals of Ogidi
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {presidents.map((president) => (
            <div
              key={president.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2"
            >
              <div className="relative pb-[100%]">
                <img
                  src={president.image}
                  alt={president.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {president.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  Term: {president.term}
                </p>
                <p className="text-gray-700">
                  {president.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresidentGenerals; 