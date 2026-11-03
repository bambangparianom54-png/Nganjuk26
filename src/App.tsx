/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { LabShowcase } from './components/LabShowcase';
import { InteractiveTechHub } from './components/InteractiveTechHub';
import { CareerSection } from './components/CareerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsRegistrationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Floating Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <StatsSection />
        <CompetenciesSection />
        <LabShowcase />
        <InteractiveTechHub />
        <CareerSection />
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Registration / Consultation Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
