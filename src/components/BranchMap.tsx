import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Branch } from '../types';
import { MapPin, ExternalLink } from 'lucide-react';

const createMarkerIcon = (isSelected: boolean) => {
  const size = isSelected ? 40 : 28;
  const height = isSelected ? 58 : 42;
  const fill = isSelected ? '#C99B3B' : '#063F31';
  const stroke = isSelected ? '#F8F5EC' : '#C99B3B';
  const inner = isSelected ? '#063F31' : '#C99B3B';
  const pulse = isSelected
    ? `<circle cx="12" cy="12" r="10" fill="none" stroke="#C99B3B" stroke-width="1.5" opacity="0.9">
         <animate attributeName="r" from="8" to="16" dur="1.4s" repeatCount="indefinite"/>
         <animate attributeName="opacity" from="0.8" to="0" dur="1.4s" repeatCount="indefinite"/>
       </circle>`
    : '';

  const svg = `
    <div class="map-marker ${isSelected ? 'map-marker--active' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="${size}" height="${height}">
        ${pulse}
        <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
        <circle cx="12" cy="12" r="5" fill="${inner}"/>
      </svg>
    </div>
  `;

  return L.divIcon({
    className: `custom-gold-marker ${isSelected ? 'is-selected' : ''}`,
    html: svg,
    iconSize: [size, height],
    iconAnchor: [size / 2, height],
    popupAnchor: [0, -height + 4],
  });
};

interface BranchMapProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  onSelectBranch: (branch: Branch) => void;
}

const MapController: React.FC<{ selectedBranch: Branch | null }> = ({ selectedBranch }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedBranch?.coordinates) {
      map.flyTo(selectedBranch.coordinates, 13, {
        duration: 1.2,
      });
    }
  }, [selectedBranch, map]);

  return null;
};

const BranchMarker: React.FC<{
  branch: Branch;
  isSelected: boolean;
  onSelect: (branch: Branch) => void;
}> = ({ branch, isSelected, onSelect }) => {
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    marker.setIcon(createMarkerIcon(isSelected));

    if (isSelected) {
      marker.setZIndexOffset(1000);
      marker.openPopup();
    } else {
      marker.setZIndexOffset(0);
      marker.closePopup();
    }
  }, [isSelected]);

  if (!branch.coordinates) return null;

  return (
    <Marker
      ref={markerRef}
      position={branch.coordinates}
      icon={createMarkerIcon(isSelected)}
      eventHandlers={{
        click: () => onSelect(branch),
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
};

export const BranchMap: React.FC<BranchMapProps> = ({
  branches,
  selectedBranch,
  onSelectBranch,
}) => {
  const initialCenter: [number, number] =
    selectedBranch?.coordinates ?? [6.207603, 116.25];

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

        {activeBranches.map((branch) => (
          <BranchMarker
            key={branch.id}
            branch={branch}
            isSelected={selectedBranch?.id === branch.id}
            onSelect={onSelectBranch}
          />
        ))}
      </MapContainer>

      <div className="absolute top-4 left-4 z-[400] bg-[#063F31] px-3.5 py-1.5 border border-[#C99B3B]/40 flex items-center space-x-2">
        <MapPin className="w-3.5 h-3.5 text-[#C99B3B]" />
        <span className="text-[10px] font-bold tracking-widest text-[#F8F5EC] uppercase">
          MALAYSIA RESTAURANT MAP
        </span>
      </div>
    </div>
  );
};
