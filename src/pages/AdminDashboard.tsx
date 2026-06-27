// src/pages/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient.ts";
import "./AdminDashboard.css";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("get_in_touch");
  const [getInTouch, setGetInTouch] = useState<any[]>([]);
  const [nonPosting, setNonPosting] = useState<any[]>([]);
  const [riskfree, setRiskfree] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: gitData } = await supabase.from("get_in_touch").select("*");
      const { data: npData } = await supabase.from("non_posting_assistance").select("*");
      const { data: rfData } = await supabase.from("riskfree_applications").select("*");

      setGetInTouch(gitData || []);
      setNonPosting(npData || []);
      setRiskfree(rfData || []);
    };
    fetchData();
  }, []);

  const renderTable = (data: any[], fields: string[]) => (
    <table>
      <thead>
        <tr>
          {fields.map((f) => (
            <th key={f}>{f}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {fields.map((f) => (
              <td key={f}>{row[f]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("get_in_touch")}>Get in Touch</button>
        <button onClick={() => setActiveTab("non_posting_assistance")}>Non-Posting Assistance</button>
        <button onClick={() => setActiveTab("riskfree_applications")}>RiskFree Applications</button>
      </div>

      <div className="tab-content">
        {activeTab === "get_in_touch" &&
          renderTable(getInTouch, ["id", "name", "email", "message", "created_at"])}

        {activeTab === "non_posting_assistance" &&
          renderTable(nonPosting, ["id", "name", "email", "details", "created_at"])}

        {activeTab === "riskfree_applications" &&
          renderTable(riskfree, ["id", "name", "email", "details", "created_at"])}
      </div>
    </div>
  );
};

export default AdminDashboard;
