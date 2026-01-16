import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}
