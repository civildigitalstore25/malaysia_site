import React from 'react';
import { motion } from 'framer-motion';
import type { Branch } from '../types';
import { MapPin, ExternalLink, Phone, Clock, AlertCircle } from 'lucide-react';

interface BranchCardProps {
  branch: Branch;
  isSelected: boolean;
  onSelect: (branch: Branch) => void;
  index?: number;
}

export const BranchCard: React.FC<BranchCardProps> = ({
  branch,
  isSelected,
  onSelect,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      onClick={() => onSelect(branch)}
      className={`cursor-pointer transition-colors duration-300 p-5 border rounded-none ${
        isSelected
          ? 'bg-[#084C3B] border-[#C99B3B] shadow-xl ring-1 ring-[#C99B3B]'
          : 'bg-[#063F31]/90 border-[#C99B3B]/30 hover:border-[#C99B3B]/60 hover:bg-[#084C3B]/60'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#C99B3B] uppercase block">
            {branch.city}, {branch.state}
          </span>
          <h3 className="font-serif text-lg font-bold text-[#F8F5EC] mt-0.5">
            {branch.name}
          </h3>
        </div>
        {isSelected ? (
          <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-[#063F31] bg-[#C99B3B] px-2 py-0.5 uppercase tracking-wider">
            <MapPin className="w-3 h-3" />
            <span>ACTIVE</span>
          </span>
        ) : branch.isConfirmed ? (
          <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-[#F8F5EC]/70 bg-[#151515]/60 border border-[#C99B3B]/20 px-2 py-0.5 uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-[#C99B3B]" />
            <span>OPEN</span>
          </span>
        ) : (
          <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-[#F8F5EC]/70 bg-[#151515]/60 border border-[#C99B3B]/20 px-2 py-0.5 uppercase tracking-wider">
            <AlertCircle className="w-3 h-3 text-[#C99B3B]" />
            <span>SOON</span>
          </span>
        )}
      </div>

      <div className="relative w-full h-32 mb-3 bg-[#042E24] border border-[#C99B3B]/20 overflow-hidden">
        {branch.image ? (
          <img
            src={branch.image}
            alt={branch.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[#F8F5EC]/50 text-xs p-4 text-center">
            <MapPin className="w-5 h-5 text-[#C99B3B]/40 mb-1" />
            <span>Branch photo coming soon</span>
          </div>
        )}
      </div>

      <div className="space-y-1.5 text-xs text-[#F8F5EC]/80 mb-4">
        <div className="flex items-start space-x-2">
          <MapPin className="w-3.5 h-3.5 text-[#C99B3B] shrink-0 mt-0.5" />
          <span>{branch.address}</span>
        </div>

        {branch.phone && (
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-[#C99B3B] shrink-0" />
            <a
              href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`}
              onClick={(e) => e.stopPropagation()}
              className="hover:text-[#C99B3B] underline"
            >
              {branch.phone}
            </a>
          </div>
        )}

        {branch.operatingHours && (
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-[#C99B3B] shrink-0" />
            <span>{branch.operatingHours}</span>
          </div>
        )}
      </div>

      {branch.isConfirmed && branch.googleMapsUrl && branch.googleMapsUrl !== '#' ? (
        <a
          href={branch.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full py-2.5 bg-[#C99B3B] text-[#063F31] font-bold text-[11px] tracking-widest uppercase hover:bg-[#D4AF37] transition-all flex items-center justify-center space-x-1.5"
        >
          <span>GET DIRECTIONS</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      ) : (
        <button
          disabled
          className="w-full py-2 bg-[#151515]/40 text-[#F8F5EC]/40 text-[11px] font-semibold uppercase tracking-wider cursor-not-allowed border border-[#C99B3B]/10"
        >
          LOCATION DETAILS COMING SOON
        </button>
      )}
    </motion.div>
  );
};
