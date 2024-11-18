import React from 'react';
import { Phone, Crown, Code } from 'lucide-react';
import { PriceCard } from './components/PriceCard';
import { Footer } from './components/Footer';

const packages = [
  {
    title: 'Pacchetto Base',
    price: 3000,
    features: [
      'Gestionale aziendale',
      'Sito web istituzionale',
      'Software interno',
      '5 modifiche su ticket incluse'
    ]
  },
  {
    title: 'Pacchetto Avanzato',
    price: 5000,
    features: [
      'Gestionale aziendale',
      'Sito web istituzionale',
      'Software interno',
      'App uso interno',
      'App esterna',
      'Fino a 10 modifiche su ticket incluse'
    ]
  },
  {
    title: 'Pacchetto Pro',
    price: 7000,
    features: [
      'Gestionale aziendale',
      'Sito web istituzionale',
      'Software interno',
      'App uso interno',
      'App esterna',
      'CRM',
      'Modifiche prioritarie incluse fino a 10'
    ]
  },
  {
    title: 'Pacchetto Premium',
    price: 9000,
    features: [
      'Gestionale aziendale',
      'Sito web istituzionale',
      'Software interno',
      'App uso interno',
      'App esterna',
      'CRM',
      'CMS builder interno',
      'Modifiche prioritarie incluse fino a 15'
    ],
    badge: 'Più acquistato'
  },
  {
    title: 'Pacchetto Elite',
    price: 11000,
    features: [
      'Gestionale aziendale',
      'Sito web istituzionale',
      'Software interno',
      'App uso interno',
      'App esterna',
      'CRM',
      'CMS builder interno',
      'Automazione AI autocompiler',
      'Assistenza premium per un anno inclusa',
      '20 modifiche ticket incluse'
    ]
  },
  {
    title: 'Pacchetto Completo',
    price: 12500,
    features: [
      'Gestionale aziendale',
      'Sito web istituzionale',
      'Software interno',
      'App uso interno',
      'App esterna',
      'CRM',
      'CMS builder interno',
      'Automazione AI autocompiler',
      'Chatbot integrato interno ed esterno',
      'Assistenza premium per un anno inclusa',
      'Modifiche al progetto esistente'
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black/90 text-white relative">
      <div className="geometric-background">
        <div className="geometric-pattern" />
      </div>
      
      <div className="relative z-10">
        <header className="bg-black/50 backdrop-blur-sm fixed w-full z-50 border-b border-[#FFD700]/10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Crown className="w-8 h-8 text-[#FFD700] animate-pulse" />
              <span className="text-2xl font-bold">ZoliWeb <span className="text-[#FFD700]">Gold</span></span>
            </div>
            <nav>
              <a 
                href="tel:0110741112"
                className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Chiamaci Ora
              </a>
            </nav>
          </div>
        </header>

        <main className="relative">
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Scopri i Nostri Servizi
                <span className="text-[#FFD700]"> Esclusivi</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-24">
                Fino alla fine del 2024, offriamo pacchetti esclusivi per potenziare la tua azienda con soluzioni digitali all'avanguardia.
              </p>
              <div className="text-sm text-[#2cd4bd] mb-3">Servizio offerto da</div>
              <div className="flex items-center justify-center gap-2 mb-14">
                <Code className="w-6 h-6 text-[#2cd4bd]" />
                <div className="flex items-baseline">
                  <span className="font-mono text-[#2cd4bd]">ZOLI</span>
                  <span className="font-mono text-white">WEB</span>
                  <span className="text-gray-400 ml-2">
                    - Digital Solutions per trasformare la tua visione in realtà
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <PriceCard
                    key={index}
                    title={pkg.title}
                    price={pkg.price}
                    features={pkg.features}
                    badge={pkg.badge}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;