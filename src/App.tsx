//src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import ServiceCpn from "./pages/ServiceCpn";
import Tradeline from "./pages/Tradeline";
import Repair from "./pages/Repair";
import Playbook from "./pages/Playbook";
import PackagePage from "./pages/PackagePage";
import Document from "./pages/Document";
import RiskFreePage from "./pages/RiskFreePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Service detail pages */}
        <Route path="/services/strategy" element={<ServiceCpn />} />
        <Route path="/services/optimization" element={<Tradeline />} />
        <Route path="/services/risk" element={<Repair />} />
        <Route path="/services/performance" element={<Playbook />} />
        <Route path="/services/technology" element={<PackagePage />} />
        <Route path="/services/change" element={<RiskFreePage />} />
        <Route path="/services/changee" element={<Document />} />
      </Routes>
    </Router>
  );
};

export default App;
