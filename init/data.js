
const sampleListings = [
  {
    title: "Sunset Stories Beach House",
    description:
      "A calm space where the sea whispers and evenings feel endless. Perfect for slow mornings, barefoot walks, and deep conversations under orange skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 1700,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Skyline Studio 27",
    description:
      "Minimal, modern, and made for dreamers. Watch the city lights sparkle through wide glass windows while you plan your next big move.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 2400,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Whispering Pines Retreat",
    description:
      "Hidden between tall pine trees, this cabin is built for silence, self-reflection, and star-filled nights away from noisy routines.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1300,
    location: "Kasol",
    country: "India",
  },
  {
    title: "Ivory Haven Villa",
    description:
      "Soft sunlight, open spaces, and a private pool that feels like your own world. Designed for comfort with a touch of quiet luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    },
    price: 3800,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Rustic Bloom Farmstay",
    description:
      "Wake up to birdsong and the smell of fresh earth. A peaceful farmhouse experience for those who miss simplicity and slow living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 1000,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Mirror Lake Escape",
    description:
      "Still waters, morning mist, and warm wooden interiors. A serene stay crafted for writers, thinkers, and quiet explorers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    },
    price: 1900,
    location: "Nainital",
    country: "India",
  },
    {
    title: "Glasshouse Over the Valley",
    description:
      "Floor-to-ceiling windows, floating clouds, and uninterrupted valley views. A stay built for sunrise lovers and late-night thinkers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 2600,
    location: "Mussoorie",
    country: "India",
  },
  {
    title: "The Brick & Breeze Loft",
    description:
      "Industrial interiors softened by warm lights and open air balconies. Ideal for creators who love raw design and city rhythm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    price: 2100,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Palmshade Coastal Nest",
    description:
      "Tucked between coconut trees and golden sand, this coastal stay blends salty air with peaceful privacy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 1750,
    location: "Varkala",
    country: "India",
  },
  {
    title: "The Writer’s Wooden Cabin",
    description:
      "A warm wooden hideout with a reading corner and rain-soaked windows. Built for journaling, deep focus, and digital detox.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    },
    price: 1400,
    location: "Dharamshala",
    country: "India",
  },
  {
    title: "Urban Pulse Apartment",
    description:
      "Compact, smart, and located steps away from cafés and co-working spaces. Designed for young professionals on the move.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    },
    price: 2300,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Desert Horizon Camp",
    description:
      "Sleep under open skies where the desert stretches endlessly. A minimal yet magical experience beside glowing bonfires.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    },
    price: 1100,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "The Courtyard Heritage Home",
    description:
      "Traditional architecture meets modern comfort. Experience old-world charm wrapped in peaceful courtyard evenings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    price: 2000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Cliffside Calm Retreat",
    description:
      "Perched on a dramatic cliff with endless sea views. Perfect for meditation mornings and slow sunset dinners.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa",
    },
    price: 3200,
    location: "Gokarna",
    country: "India",
  },
  {
    title: "The Midnight Blue Studio",
    description:
      "A bold, artistic studio apartment designed with deep blue tones and ambient lighting for a cinematic living experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
    },
    price: 1950,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "Hilltop Glass Cabin",
    description:
      "A transparent escape above the hills where mornings begin with mist and evenings end with glowing horizons.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 2700,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Serene Backwater Houseboat",
    description:
      "Float gently through quiet waters while enjoying traditional interiors and peaceful riverside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    price: 2500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Minimal White Haven",
    description:
      "A bright, clutter-free space crafted for clarity and calm. Ideal for remote workers seeking focus and balance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 1800,
    location: "Pune",
    country: "India",
  },
];

module.exports = { data: sampleListings };