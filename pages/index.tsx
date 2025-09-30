import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE } from '../constants';
import { PropertyProps } from '../interfaces';

const Pill: React.FC<{ label: string; onClick: () => void; isActive: boolean }> = ({
  label,
  onClick,
  isActive,
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
    }`}
    aria-label={`Filter by ${label}`}
  >
    {label}
  </button>
);

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{property.name}</h3>
      <p className="text-gray-600">
        {property.address.city}, {property.address.country}
      </p>
      <p className="text-blue-600 font-bold">${property.price}/night</p>
      <p className="text-sm text-gray-500">Rating: {property.rating} ★</p>
      {property.discount && (
        <p className="text-green-600 text-sm">Discount: {property.discount}%</p>
      )}
    </div>
  </div>
);

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = [
    'Top Villa',
    'Self Checkin',
    'Luxury Villa',
    'Beachfront',
    'City View',
    'Mountain View',
  ];

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              onClick={() => setActiveFilter(filter === activeFilter ? null : filter)}
              isActive={activeFilter === filter}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;