export const properties = [
  {
    id: 1,
    title: 'Modern Apartment with Ocean View',
    price: 850000,
    type: 'sale',
    category: 'apartment',
    location: {
      address: '123 Coastal Drive',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      coordinates: {
        lat: 25.761681,
        lng: -80.191788
      }
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      garage: 1,
      yearBuilt: 2020
    },
    description:
      'Stunning modern apartment with breathtaking ocean views from every room. This recently built luxury apartment features high-end finishes, an open floor plan, and a private balcony perfect for enjoying Miami sunsets. The building offers premium amenities including a pool, fitness center, and 24-hour security.',
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    featured: true,
    agent: 1,
    createdAt: '2023-04-12'
  },
  {
    id: 2,
    title: 'Spacious Family Home with Garden',
    price: 1250000,
    type: 'sale',
    category: 'house',
    location: {
      address: '456 Maple Avenue',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
      coordinates: {
        lat: 47.608013,
        lng: -122.335167
      }
    },
    features: {
      bedrooms: 4,
      bathrooms: 3.5,
      area: 2800,
      garage: 2,
      yearBuilt: 2015
    },
    description:
      "Beautiful family home in Seattle's most desirable neighborhood. This property features a spacious layout, modern kitchen with high-end appliances, master suite with walk-in closet, and a large backyard perfect for entertaining. Close to schools, parks, and shopping centers.",
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    featured: true,
    agent: 2,
    createdAt: '2023-05-23'
  },
  {
    id: 3,
    title: 'Downtown Luxury Loft',
    price: 4500,
    type: 'rent',
    category: 'apartment',
    location: {
      address: '789 Urban Street',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      coordinates: {
        lat: 41.878113,
        lng: -87.629799
      }
    },
    features: {
      bedrooms: 1,
      bathrooms: 1,
      area: 1200,
      yearBuilt: 2010
    },
    description:
      'Stylish downtown loft in a converted historical building. High ceilings, exposed brick walls, and large windows create a unique urban living experience. The unit includes a fully equipped kitchen, in-unit laundry, and access to a rooftop terrace with panoramic city views.',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    featured: false,
    agent: 3,
    createdAt: '2023-06-05'
  },
  {
    id: 4,
    title: 'Luxury Villa with Private Pool',
    price: 3200000,
    type: 'sale',
    category: 'villa',
    location: {
      address: '101 Palm Boulevard',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90210',
      coordinates: {
        lat: 34.052235,
        lng: -118.243683
      }
    },
    features: {
      bedrooms: 5,
      bathrooms: 5.5,
      area: 5500,
      garage: 3,
      yearBuilt: 2018
    },
    description:
      'Exquisite luxury villa in exclusive Los Angeles neighborhood. This magnificent property features soaring ceilings, a gourmet kitchen, home theater, wine cellar, and a master suite with spa bathroom. The outdoor space includes a private pool, hot tub, outdoor kitchen, and meticulously landscaped gardens.',
    images: [
      'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    featured: true,
    agent: 2,
    createdAt: '2023-03-15'
  },
  {
    id: 5,
    title: 'Modern Office Space in Business District',
    price: 3800,
    type: 'rent',
    category: 'office',
    location: {
      address: '555 Corporate Plaza',
      city: 'New York',
      state: 'NY',
      zip: '10007',
      coordinates: {
        lat: 40.712776,
        lng: -74.005974
      }
    },
    features: {
      bedrooms: 0,
      bathrooms: 2,
      area: 2500,
      yearBuilt: 2019
    },
    description:
      "Premium office space in New York's premier business district. This modern office features an open floor plan, conference room, kitchenette, and stunning city views. The building offers amenities including a lobby with 24-hour security, high-speed elevators, and a shared rooftop lounge.",
    images: [
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg',
      'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg'
    ],
    featured: true,
    agent: 1,
    createdAt: '2023-02-18'
  },
  {
    id: 6,
    title: 'Cozy Cottage near the Lake',
    price: 550000,
    type: 'sale',
    category: 'house',
    location: {
      address: '222 Lakeside Drive',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      coordinates: {
        lat: 30.267153,
        lng: -97.743057
      }
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1500,
      garage: 1,
      yearBuilt: 1995
    },
    description:
      'Charming cottage just steps from the lake. This cozy home offers the perfect blend of rustic charm and modern conveniences. Features include a wood-burning fireplace, renovated kitchen, and a spacious deck overlooking a beautifully landscaped yard. Enjoy lakeside living with easy access to water activities.',
    images: [
      'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
    ],
    featured: false,
    agent: 3,
    createdAt: '2023-07-07'
  }
];
