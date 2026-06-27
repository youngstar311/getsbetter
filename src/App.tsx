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
import RiskFreePage from "./pages/RiskFreePage.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Service detail pages */}
        <Route path="/services/cpn" element={<ServiceCpn />} />
        <Route path="/services/tradeline" element={<Tradeline />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/playbook" element={<Playbook />} />
        <Route path="/services/package" element={<PackagePage />} />
        <Route path="/services/docs" element={<Document />} />
        <Route path="/services/grants" element={<RiskFreePage />} />
        <Route path="/youngstar/admin" element={<AdminDashboard />}/>
      </Routes>
    </Router>
  );
};

export default App;
