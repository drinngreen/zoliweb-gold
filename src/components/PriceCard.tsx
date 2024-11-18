import React from 'react';
import { Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: number;
  features: string[];
  badge?: string;
}

export function PriceCard({ title, price, features, badge }: PriceCardProps) {
  return (
    <div className="relative rounded-xl p-6 bg-black border border-[#FFD700]/10 transition-all duration-300 hover:scale-105 hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]">
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black px-4 py-1 rounded-full text-sm font-bold">
          {badge}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold text-[#FFD700] mb-6">€{price.toLocaleString()}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-6">
        <a 
          href="tel:0110741112"
          className="flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-300 bg-[#FFD700] hover:bg-[#FFD700]/90 text-black text-center"
        >
          Chiamaci
        </a>
        <a 
          href="mailto:info@zoliqua.com?subject=Richiesta%20Informazioni%20ZoliWeb&body=Salve%2C%0D%0A%0D%0ASono%20interessato%20ai%20vostri%20servizi.%20Vorrei%20ricevere%20maggiori%20informazioni.%0D%0A%0D%0AGrazie"
          className="flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-300 bg-black hover:bg-black/80 text-white border border-[#FFD700]/30 hover:border-[#FFD700] text-center"
        >
          Scrivici
        </a>
      </div>
    </div>
  );
}