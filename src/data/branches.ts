import type { Branch } from '../types';

/**
 * Branch timeline from founder Syed Mohammad:
 * 1st 2011 → 2nd 2023 → 3rd 2024 → 4th 2025 → 5th 2026
 * Maps URLs and place details resolved from the official Google Maps short links.
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
    coordinates: [6.0386689, 116.1601615],
    googleMapsUrl: 'https://maps.app.goo.gl/7NSyS7Y6X36LPCkf9',
    phone: '016-8709786',
    image: '/branch/1st_branch.webp',
    description:
      'Our original flagship restaurant, established in 2011 by Syed Mohammad in Taman Satriya, Menggatal — the home of Aasina Curry House.',
    isConfirmed: true,
    operatingHours: '8:00 AM – 12:00 AM Daily',
    yearOpened: 2011,
  },
  {
    id: 'branch-02',
    name: 'AASINA CURRYHOUSE (2nd Branch)',
    city: 'Tuaran',
    state: 'Sabah',
    country: 'Malaysia',
    address: 'Plaza Lemawang 2, Jalan Tuaran, 89150 Tuaran, Sabah, Malaysia',
    coordinates: [6.2073821, 116.249862],
    googleMapsUrl: 'https://maps.app.goo.gl/Chh6Ny6TnZN3VSRF9',
    phone: '016-8709786',
    image: '/branch/2nd_branch.png',
    description:
      'Opened in 2023 at Plaza Lemawang 2, Tuaran. Hand-crafted flatbreads, fragrant curries, and everyday family meals for the growing Aasina community.',
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
    googleMapsUrl: 'https://maps.app.goo.gl/KeD2WPpB7ydyha6A7?g_st=ac',
    phone: '016-8709786',
    image: '/branch/3rd_branch.png',
    description:
      'Established in 2024 in Kampung Indai, Tuaran. Serving authentic Malaysian favourites around the clock for the local community.',
    isConfirmed: true,
    operatingHours: 'Open 24 Hours Daily',
    yearOpened: 2024,
  },
  {
    id: 'branch-04',
    name: 'Restoren Aasina Cafe (4th Branch)',
    city: 'Tuaran',
    state: 'Sabah',
    country: 'Malaysia',
    address: 'Tuaran, Sabah, Malaysia',
    coordinates: [5.9788, 116.0753],
    googleMapsUrl: 'https://maps.app.goo.gl/ZMAVJTJneM6bJHYf6?g_st=awb',
    phone: '016-8709786',
    image: '/branch/4th_branch.png',
    description:
      'Opened in 2025 as Restoren Aasina Cafe — casual Malaysian dining, specialty drinks, roti, and quick family bites.',
    isConfirmed: true,
    operatingHours: '7:00 AM – 11:00 PM Daily',
    yearOpened: 2025,
  },
  {
    id: 'branch-05',
    name: 'AASINA CURRYHOUSE — Plaza Lemawang 2 (5th Branch)',
    city: 'Tuaran',
    state: 'Sabah',
    country: 'Malaysia',
    address: 'Plaza Lemawang 2, Jalan Tuaran, 89150 Tuaran, Sabah, Malaysia',
    coordinates: [6.2073821, 116.249862],
    googleMapsUrl: 'https://maps.app.goo.gl/U8wzpQg9d7GEhn447?g_st=ac',
    phone: '016-8709786',
    image: '/branch/5th_branch.png',
    description:
      'Opened in 2026 at Plaza Lemawang 2, Tuaran — continuing our culinary tradition of quality halal Malaysian food and warm hospitality.',
    isConfirmed: true,
    operatingHours: 'Open Daily',
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
