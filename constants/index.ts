import { PropertyProps } from '../interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://unsplash.com/photos/white-wooden-framed-glass-door-zjp79y-GGa0",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "https://unsplash.com/photos/white-wooden-framed-glass-door-zjp79y-GGa0",
    discount: "30",
  },

  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "https://unsplash.com/photos/white-wooden-framed-glass-door-zjp79y-GGa0",
    discount: "",
  },

  {
    id: "1",
    name: "Cozy Beachfront Villa",
    rating: 4.8,
    address: { city: "Miami", country: "USA" },
    image: "https://via.placeholder.com/600x400",
    images: [
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
      "https://via.placeholder.com/300x200",
    ],
    description: "A beautiful beachfront villa with stunning ocean views and modern amenities.",
    category: ["Wi-Fi", "Pool", "Parking", "Air Conditioning"],
    price: 200,
    reviews: [
      {
        name: "John Doe",
        avatar: "https://via.placeholder.com/50x50",
        rating: 5,
        comment: "Amazing stay! The view was breathtaking.",
      },
      {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/50x50",
        rating: 4,
        comment: "Great location, but the Wi-Fi was a bit slow.",
      },
    ]
  },

export const HERO_BACKGROUND_IMAGE = "https://unsplash.com/photos/white-wooden-framed-glass-door-zjp79y-GGa0";