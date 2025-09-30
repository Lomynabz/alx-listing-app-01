// components/property/PropertyDetail.tsx
"use client";

import { PropertyProps } from "@/interfaces";
import { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto p-6 lg:flex lg:space-x-6">
      {/* Left Section: Property Details */}
      <div className="lg:w-2/3">
        {/* Property Header */}
        <h1 className="text-3xl font-bold text-gray-800">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">★ {property.rating}</span>
          <span className="text-gray-600">
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img
            src={property.image}
            alt={property.name}
            className="col-span-2 w-full h-96 object-cover rounded-lg"
          />
          {property.image?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.name} ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="flex space-x-4 border-b">
            <button
              className={`pb-2 px-4 ${
                activeTab === "description"
                  ? "border-b-2 border-green-500 text-green-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`pb-2 px-4 ${
                activeTab === "amenities"
                  ? "border-b-2 border-green-500 text-green-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("amenities")}
            >
              What We Offer
            </button>
            <button
              className={`pb-2 px-4 ${
                activeTab === "reviews"
                  ? "border-b-2 border-green-500 text-green-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`pb-2 px-4 ${
                activeTab === "host"
                  ? "border-b-2 border-green-500 text-green-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("host")}
            >
              About Host
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "description" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
                <p className="text-gray-600 mt-2">{property.description}</p>
              </div>
            )}
            {activeTab === "amenities" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">What This Place Offers</h2>
                <ul className="grid grid-cols-2 gap-4 mt-2">
                  {property.category.map((amenity, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded-md text-gray-700">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "reviews" && <ReviewSection reviews={property.reviews} />}
            {activeTab === "host" && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">About the Host</h2>
                <p className="text-gray-600 mt-2">
                  Hosted by a professional team dedicated to making your stay unforgettable.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Booking */}
      <div className="lg:w-1/3 mt-6 lg:mt-0">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;