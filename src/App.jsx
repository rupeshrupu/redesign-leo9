import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurExpertise from './components/OurExpertise';
import OurClients from './components/OurClients';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="App pt-16 lg:pt-20"> {/* Pushes content below navbar */}
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <OurExpertise />
      <OurClients />
    </div>
  );
}

export default App;