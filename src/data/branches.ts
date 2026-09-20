import type { Branch } from '../types';

/**
 * Branch timeline from founder Syed Mohammad:
 * 1st 2011 → 4th 2015 → 2nd 2023 → 3rd 2024 → 5th 2026
 * Details enriched from Google Maps links + public listings (foodpanda / directories).
 */
export const branches: Branch[] = [
  {
    id: 'branch-01',
    name: 'Restoran Aasina Curry House — Taman Satriya (1st Branch)',
    city: 'Menggatal',
    state: 'Sabah',
    country: 'Malaysia',
    address:
      'Ground Floor, Lot 1, Unit 1-0-1, Lorong Satria 1, Taman Satria Phase 3, 88450 Kota Kinabalu, Sabah, Malaysia',
    coordinates: [6.0253, 116.1481],
    googleMapsUrl: 'https://share.google/OuBTYkw5c66wp981R',
    phone: '016-8709786',
    image: '/branch/curry-house.webp',
    description:
      'Our original flagship restaurant, established in 2011 by Syed Mohammad in Taman Satriya, Menggatal — the home of Aasina Curry House.',
    isConfirmed: true,
    operatingHours: '8:00 AM – 12:00 AM Daily',
    yearOpened: 2011,
  },
  {
    id: 'branch-02',
    name: 'Restoran Aasina Curry House 2 (2nd Branch)',
    city: 'Kota Kinabalu',
    state: 'Sabah',
    country: 'Malaysia',
    address:
      'Lot S11, Ground Floor, Taman Canggih Commercial Centre, Jalan Tuaran Bypass, 88450 Kota Kinabalu, Sabah, Malaysia',
    coordinates: [6.0167601, 116.139188],
    googleMapsUrl: 'https://maps.app.goo.gl/FdAGVoKyv1XrdzD49?g_st=ac',
    phone: '016-8709786',
    image: '/images/tuaran_branch.png',
    description:
      'Opened in 2023 along Jalan Tuaran Bypass. Hand-crafted flatbreads, fragrant curries, and everyday family meals for the growing Aasina community.',
    isConfirmed: true,
    operatingHours: 'Open Daily',
    yearOpened: 2023,
  },
  {
    id: 'branch-03',
    name: 'Restoran Aasina Maju (3rd Branch)',
    city: 'Tuaran',
    state: 'Sabah',
    country: 'Malaysia',
    address: 'Lot No. 6 & 7, Kampung Indai, 89200 Tuaran, Sabah, Malaysia',
    coordinates: [5.9804, 116.0735],
    googleMapsUrl: 'https://maps.app.goo.gl/ZMAVJTJneM6bJHYf6?g_st=awb',
    phone: '016-8709786',
    image: '/malaysia/3.png',
    description:
      'Established in 2024 in Kampung Indai, Tuaran. Serving authentic Malaysian favourites with extended hours for the local community.',
    isConfirmed: true,
    operatingHours: 'Open 24 Hours Daily',
    yearOpened: 2024,
  },
  {
    id: 'branch-04',
    name: 'Aasina Cafe (4th Branch)',
    city: 'Kota Kinabalu',
    state: 'Sabah',
    country: 'Malaysia',
    address: 'Kota Kinabalu, Sabah, Malaysia',
    coordinates: [5.9788, 116.0753],
    googleMapsUrl:
      'https://www.google.com/maps?q=6.2076029777526855,116.24999237060547&z=17&hl=en',
    phone: '016-8709786',
    image: '/malaysia/4.jpeg',
    description:
      'Established in 2015 as Aasina Cafe — casual Malaysian dining, specialty drinks, roti, and quick family bites.',
    isConfirmed: true,
    operatingHours: '7:00 AM – 11:00 PM Daily',
    yearOpened: 2015,
  },
  {
    id: 'branch-05',
    name: 'Aasina Curry House (5th Branch)',
    city: 'Kota Kinabalu',
    state: 'Sabah',
    country: 'Malaysia',
    address: 'Sabah, Malaysia',
    coordinates: [6.0312, 116.1215],
    googleMapsUrl: 'https://maps.app.goo.gl/FdAGVoKyv1XrdzD49?g_st=ac',
    phone: '016-8709786',
    image: '/malaysia/5.png',
    description:
      'Opened in 2026, continuing our culinary tradition of quality halal Malaysian food and warm hospitality.',
    isConfirmed: true,
    operatingHours: '7:00 AM – 10:00 PM Daily',
    yearOpened: 2026,
  },
];

/** Primary contact used site-wide */
export const businessContact = {
  founder: 'Syed Mohammad',
  phone: '016-8709786',
  phoneTel: '0168709786',
  established: 2011,
  positioning: 'Makanan dan Minuman Islam',
  region: 'Sabah, Malaysia',
};
