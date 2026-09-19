import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Branch } from '../types';
import { MapPin, ExternalLink } from 'lucide-react';

// Custom Gold Marker Icon for Leaflet
const createGoldIcon = () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z" fill="#063F31" stroke="#C99B3B" stroke-width="2"/>
      <circle cx="12" cy="12" r="5" fill="#C99B3B"/>
    </svg>
  `;
  return L.divIcon({
    className: 'custom-gold-marker',
    html: svg,
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -38],
  });
};

interface BranchMapProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  onSelectBranch: (branch: Branch) => void;
}

// Helper component to smoothly animate map center to selected branch
const MapController: React.FC<{ selectedBranch: Branch | null }> = ({ selectedBranch }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedBranch && selectedBranch.coordinates) {
      map.flyTo(selectedBranch.coordinates, 12, {
        duration: 1.5,
      });
    }
  }, [selectedBranch, map]);

  return null;
};

export const BranchMap: React.FC<BranchMapProps> = ({
  branches,
  selectedBranch,
  onSelectBranch,
}) => {
  const initialCenter: [number, number] =
    selectedBranch && selectedBranch.coordinates
      ? selectedBranch.coordinates
      : [6.207603, 116.2500]; // Tuaran default

  const activeBranches = branches.filter((b) => b.coordinates !== null);

  return (
    <div className="relative w-full h-[400px] lg:h-full min-h-[400px] border border-[#C99B3B]/40 shadow-2xl overflow-hidden">
      <MapContainer
        center={initialCenter}
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController selectedBranch={selectedBranch} />

        {activeBranches.map((branch) => {
          if (!branch.coordinates) return null;

          return (
            <Marker
              key={branch.id}
              position={branch.coordinates}
              icon={createGoldIcon()}
              eventHandlers={{
                click: () => onSelectBranch(branch),
              }}
            >

              <Popup>
                <div className="p-1 max-w-[220px]">
                  <h4 className="font-serif font-bold text-sm text-[#C99B3B] mb-1">
                    {branch.name}
                  </h4>
                  <p className="text-xs text-[#F8F5EC]/90 mb-2 leading-tight">
                    {branch.address}
                  </p>
                  {branch.googleMapsUrl && branch.googleMapsUrl !== '#' && (
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[10px] font-bold tracking-wider text-[#C99B3B] uppercase hover:underline"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Map Decorative Overlay Header */}
      <div className="absolute top-4 left-4 z-[400] bg-[#063F31]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#C99B3B]/40 flex items-center space-x-2">
        <MapPin className="w-3.5 h-3.5 text-[#C99B3B]" />
        <span className="text-[10px] font-bold tracking-widest text-[#F8F5EC] uppercase">
          MALAYSIA RESTAURANT MAP
        </span>
      </div>
    </div>
  );
};
