export interface Branch {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  address: string;
  coordinates: [number, number] | null;
  googleMapsUrl: string;
  phone: string;
  image: string;
  description: string;
  isConfirmed: boolean;
  operatingHours?: string;
}

export interface MenuItem {
  id: string;
  category: 'roti' | 'nasi' | 'specialty' | 'noodles';
  name: string;
  description: string;
  price?: string;
  isPopular?: boolean;
  tags?: string[];
  image?: string;
}

export interface FoodCategory {
  id: 'roti' | 'nasi' | 'specialty' | 'noodles';
  number: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'restaurant' | 'food' | 'dining' | 'interior';
  src: string;
  alt: string;
  caption?: string;
}
