// src/components/admin/AdminLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Pages
import Dashboard from "../../pages/Dashboard";
import Marketing from "../../pages/Marketing";
import WebsiteProjects from "../../pages/WebsiteProjects";
import HR from "../../pages/HR";
import AnalyticsAndReports from "../../pages/AnalyticsAndReports";
import Finance from "../../pages/Finance";
import Operations from "../../pages/Operations";
import Documents from "../../pages/Documents";
import Settings from "../../pages/Settings";
import Message from "../../pages/Message";

export default function AdminLayout() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Marketing":
        return <Marketing />;
      case "Website Projects":
        return <WebsiteProjects />;
      case "HR":
        return <HR />;
      case "Analytics & Reports":
        return <AnalyticsAndReports />;
      case "Finance":
        return <Finance />;
      case "Operations":
        return <Operations />;
      case "Documents":
        return <Documents />;
      case "Message":
        return <Message />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 mt-16 overflow-auto p-6 bg-gray-50 min-h-screen">
          {renderPage()}
        </main>

      </div>
    </div>
  );
}
