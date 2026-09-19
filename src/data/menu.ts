import type { FoodCategory, MenuItem } from '../types';

export const foodCategories: FoodCategory[] = [
  {
    id: 'roti',
    number: '01',
    name: 'ROTI & MURTABAK',
    description: 'Hand-crafted flatbreads spun fresh to order and savory stuffed pastries served with signature dhal and curry.',
    image: '/malaysia/3.jpeg'
  },
  {
    id: 'nasi',
    number: '02',
    name: 'NASI GORENG',
    description: 'Malaysian fried rice prepared with fragrant spices across multiple variants, garnished with keropok and fried egg.',
    image: '/malaysia/4.jpeg'
  },
  {
    id: 'specialty',
    number: '03',
    name: 'SPECIALTY DISHES',
    description: 'Curated preparations rooted in Malaysian restaurant culture, rich coconut curries, and aromatic slow-cooked dishes.',
    image: '/malaysia/5.jpeg'
  },
  {
    id: 'noodles',
    number: '04',
    name: 'NOODLES & SOUPS',
    description: 'Wok-tossed noodle specialties, rich silky gravies, and spicy steaming herb broths cooked to order.',
    image: '/malaysia/image.jpeg'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    category: 'roti',
    name: 'Roti Canai Special',
    description: 'Traditional Malaysian crispy, flaky flatbread served fresh off the griddle with fragrant dhal sauce and curry dip.',
    isPopular: true,
    tags: ['Chef Special', 'Hand-Crafted'],
    image: '/malaysia/3.jpeg'
  },
  {
    id: 'm2',
    category: 'roti',
    name: 'Murtabak Ayam',
    description: 'Savory flatbread stuffed with spiced minced chicken, beaten egg, and sweet onions, grilled until golden brown.',
    isPopular: true,
    tags: ['Customer Favorite'],
    image: '/malaysia/img.jpeg'
  },
  {
    id: 'm3',
    category: 'roti',
    name: 'Murtabak Daging',
    description: 'Pan-fried parcel filled with aromatic spiced beef, caramelized onions, served with pickled pink onions and curry gravy.',
    tags: ['Traditional'],
    image: '/malaysia/WhatsApp Image 2026-09-18 at 10.17.56 PM.jpeg'
  },
  {
    id: 'm4',
    category: 'nasi',
    name: 'Nasi Goreng Ayam',
    description: 'Classic Malaysian fried rice tossed with garlic, sambal, and fresh vegetables, served with spiced fried chicken leg and keropok.',
    isPopular: true,
    tags: ['Popular'],
    image: '/malaysia/4.jpeg'
  },
  {
    id: 'm5',
    category: 'nasi',
    name: 'Nasi Goreng Daging',
    description: 'Wok-charred fried rice with tender beef slices, kangkung, chili, and dark soy sauce, topped with a fried egg.',
    tags: ['Wok Hei'],
    image: '/malaysia/5.jpeg'
  },
  {
    id: 'm6',
    category: 'nasi',
    name: 'Nasi Goreng Seafood',
    description: 'Fragrant fried rice packed with fresh squid, juicy prawns, fish cake slices, and aromatic spices.',
    tags: ['Seafood'],
    image: '/malaysia/image.jpeg'
  },
  {
    id: 'm7',
    category: 'specialty',
    name: 'Aasina Signature Chicken Curry',
    description: 'Tender chicken slow-simmered in coconut milk, lemongrass, galangal, and house-ground curry spices.',
    isPopular: true,
    tags: ['Signature'],
    image: '/malaysia/3.jpeg'
  },
  {
    id: 'm8',
    category: 'specialty',
    name: 'Special Lamb Rendang',
    description: 'Rich, caramelized lamb dry curry cooked down with roasted coconut (kerisik), kaffir lime leaves, and spices.',
    tags: ['Heritage'],
    image: '/malaysia/5.jpeg'
  },
  {
    id: 'm9',
    category: 'noodles',
    name: 'Watan Ho Ayam',
    description: 'Silky smooth flat rice noodles wok-charred and smothered in rich, velvety egg drop chicken gravy.',
    isPopular: true,
    tags: ['Wok Classic'],
    image: '/malaysia/image.jpeg'
  },
  {
    id: 'm10',
    category: 'noodles',
    name: 'Tomyam Ayam',
    description: 'Aromatic spicy and sour red soup infusion with tender chicken slices, mushrooms, kaffir lime, and lemongrass.',
    tags: ['Spicy & Sour'],
    image: '/malaysia/4.jpeg'
  },
  {
    id: 'm11',
    category: 'noodles',
    name: 'Mee Basa Ayam',
    description: 'Classic Sabah-style wet tossed noodles in savory gravy served with succulent chicken and fresh greens.',
    tags: ['Sabah Specialty'],
    image: '/malaysia/img.jpeg'
  }
];
