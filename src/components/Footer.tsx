import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-[#FFD700] text-xl font-semibold mb-4">Zoli Web</h3>
            <p className="text-gray-400">
              Trasformiamo le tue idee in realtà digitali di successo
            </p>
          </div>

          <div>
            <h3 className="text-[#FFD700] text-xl font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">App Native</li>
              <li className="text-gray-400">Progressive Web App</li>
              <li className="text-gray-400">Siti Web</li>
              <li className="text-gray-400">Gestionali</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFD700] text-xl font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-[#FFD700]" />
                info@zoliqua.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-[#FFD700]" />
                011 074 1112
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span>Corso Unione Sovietica 612/15/B<br />Torino</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Zoli Web. Tutti i diritti riservati.
          </p>
          <p className="text-center text-gray-600 text-sm mt-2">
            ZOLIWEB e ZOLIQUA sono marchi di proprietà di Drinn Green s.c.s
          </p>
        </div>
      </div>
    </footer>
  );
}