"use client"

import { Phone } from "lucide-react";

interface TaxiItemProps {
  name: string;
  location: string;
  phone: string;
}

export function TaxiItem({ name, location, phone }: TaxiItemProps) {
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600 mt-1">{location}</p>
          <a 
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-lg font-medium mt-2 inline-flex items-center gap-2 hover:underline"
            style={{ color: 'var(--secondary-color)' }}
          >
            <Phone size={16} />
            {phone}
          </a>
        </div>
        <button
          onClick={handleCall}
          className="ml-4 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center gap-2 whitespace-nowrap"
          style={{ backgroundColor: 'var(--secondary-color)' }}
          aria-label={`Llamar a ${name}`}
        >
          <Phone size={18} />
          <span className="hidden sm:inline">Llamar</span>
        </button>
      </div>
    </div>
  );
}
