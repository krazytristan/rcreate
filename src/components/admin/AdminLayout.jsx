// src/components/admin/AdminLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar"; // your original topnav with profile & notification

// Test page components
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
      {/* Sidebar fixed */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Original Topbar fixed at top */}
        <Topbar />

        {/* Scrollable main content */}
        <main className="flex-1 mt-16 overflow-auto p-6 bg-gray-50 min-h-screen">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}