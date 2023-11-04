import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import GymPortal from './GymPortal';
import EquipmentMarketplace from './EquipmentMarketplace';
import ContentPortal from './ContentPortal';
import HealthAssessment from './HealthAssessment';
import SupplementStore from './SupplementStore';
import Nutritionshop from './Nutritionshop'; // Make sure the file name is correct
import Home from './Home';
import AllEquipment from './AllEquipment';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/gym-portal" element={<GymPortal />} />
          <Route path ="/all-equipment" element={<AllEquipment />} />
          <Route path="/equipment-marketplace" element={<EquipmentMarketplace />} />
          <Route path="/content-portal" element={<ContentPortal />} />
          <Route path="/health-assessment" element={<HealthAssessment />} />
          <Route path="/supplement-store" element={<SupplementStore />} />
          <Route path="/nutrition-shop" element={<Nutritionshop />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
