import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './src/layouts/MainLayout';

// Import Views
import Home from './src/views/Home';
import Solutions from './src/views/Solutions';
import Ecosystem from './src/views/Ecosystem';
import Philosophy from './src/views/Philosophy';
import Landing from './src/views/Landing';
import Intake from './src/views/Intake';
import Deployed from './src/views/Deployed';
import Dossier from './src/views/Dossier';
import Stack from './src/views/Stack';
import NotFound from './src/views/NotFound';
import EngDossier from './src/views/EngDossier';
import EngHUD from './src/views/EngHUD';
import ServiceCaseStudy from './src/views/ServiceCaseStudy';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<ServiceCaseStudy />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/deployed" element={<Deployed />} />
          <Route path="/dossier/:slug" element={<Dossier />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/eng/dossier" element={<EngDossier />} />
          <Route path="/eng/hud" element={<EngHUD />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;