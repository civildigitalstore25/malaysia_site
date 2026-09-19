import React, { useState } from 'react';
import { branches } from '../data/branches';
import type { Branch } from '../types';
import { BranchMap } from './BranchMap';
import { BranchCard } from './BranchCard';
import { Navigation } from 'lucide-react';


export const Branches: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  return (
    <section id="locations" className="py-20 lg:py-28 bg-[#063F31] bg-pattern-dark relative text-[#F8F5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C99B3B] uppercase">
            OUR LOCATIONS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F8F5EC] mt-2 mb-4">
            Find Aasina Curry House
          </h2>
          <p className="text-base text-[#F8F5EC]/75 leading-relaxed font-light">
            Discover our restaurant locations across Malaysia. Select a location to view interactive map coordinates and directions.
          </p>
          <div className="w-16 h-0.5 bg-[#C99B3B] mx-auto mt-4"></div>
        </div>

        {/* Desktop 60/40 & Mobile Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map (60%) */}
          <div className="lg:col-span-7 flex flex-col">
            <BranchMap
              branches={branches}
              selectedBranch={selectedBranch}
              onSelectBranch={(branch) => setSelectedBranch(branch)}
            />
          </div>

          {/* Right Column: Branch List Cards (40%) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 max-h-[600px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-2 border-b border-[#C99B3B]/20">
              <span className="text-xs font-bold tracking-widest text-[#C99B3B] uppercase flex items-center space-x-1.5">
                <Navigation className="w-3.5 h-3.5" />
                <span>SELECT A RESTAURANT ({branches.length})</span>
              </span>
              <span className="text-[10px] text-[#F8F5EC]/60 italic">
                Click card to locate
              </span>
            </div>

            {branches.map((branch) => (
              <BranchCard
                key={branch.id}
                branch={branch}
                isSelected={selectedBranch?.id === branch.id}
                onSelect={(b) => setSelectedBranch(b)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
