//App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServiceCpn from "./pages/ServiceCpn";
import Tradeline from "./pages/tradeline";
import Repair from "./pages/repair";
import Playbook from "./pages/playbook";
import PackagePage from "./pages/PackagePage";
import Document from "./pages/document";
import RiskFreePage from "./pages/RiskFreePage";

// You can create more ServicePage components for each service

export default function App() {
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
        <Route path="/services/technology" element={<PackagePage/>} />
        <Route path="/services/change" element={<RiskFreePage/>} />
        <Route path="/services/changee" element={<Document/>} />
        {/* Add more routes for other services */}
        {/* <Route path="/services/optimization" element={<OptimizationPage />} /> */}
        {/* <Route path="/services/risk" element={<RiskPage />} /> */}
      </Routes>
    </Router>
  );
}
