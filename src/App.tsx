import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage.tsx";
import ServiceCpn from "./pages/ServiceCpn.tsx";
import Tradeline from "./pages/Tradeline.tsx";
import Repair from "./pages/Repair.tsx";
import Playbook from "./pages/Playbook.tsx";
import PackagePage from "./pages/PackagePage.tsx";
import Document from "./pages/Document.tsx";
import RiskFreePage from "./pages/RiskFreePage.tsx";\



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
