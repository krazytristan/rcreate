import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaUser, FaSearch } from "react-icons/fa";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Today");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const notifications = [
    {
      title: "New client assigned to VA Maria",
      desc: 'Client "TechStart Inc." has been assigned to Virtual Assistant Maria Rodriguez for onboarding.',
      time: "2 minutes ago",
    },
    {
      title: "New client assigned to VA Maria",
      desc: 'Client "TechStart Inc." has been assigned to Virtual Assistant Maria Rodriguez for onboarding.',
      time: "2 minutes ago",
    },
    {
      title: "New client assigned to VA Maria",
      desc: 'Client "TechStart Inc." has been assigned to Virtual Assistant Maria Rodriguez for onboarding.',
      time: "2 minutes ago",
    },
  ];

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-end px-4 md:px-6 space-x-3 md:space-x-6">

      {/* Search */}
      <div className="relative w-36 sm:w-48 md:w-64">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 text-sm
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {/* Notification */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="relative text-[#2D5D46] hover:opacity-80"
        >
          <FaBell className="text-xl md:text-2xl" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Responsive Notification Dropdown */}
        <div
          className={`absolute right-0 mt-3
          w-[90vw] max-w-[360px] md:max-w-[420px]
          rounded-xl shadow-xl border border-gray-100 bg-white
          transform transition-all duration-300 origin-top-right
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-lg font-semibold text-[#375237]">
              Notifications
            </h2>

            <button className="text-sm text-[#A67B00] hover:underline">
              Mark all as read
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 pb-4">
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
              {["Today", "This Week", "Earlier"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-4 py-1.5 text-sm rounded-md transition ${
                    activeTab === tab
                      ? "bg-white shadow-sm text-[#375237]"
                      : "text-gray-500 hover:text-[#375237]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          {activeTab === "Today" && notifications.length > 0 ? (
            <div className="max-h-[360px] overflow-y-auto">
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className="flex gap-3 px-6 py-4 border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#F6F4EA] flex items-center justify-center">
                    <FaUser className="text-[#A67B00] text-sm" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#375237]">
                      {n.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {n.desc}
                    </p>

                    <p className="text-xs text-[#A67B00] mt-2">
                      {n.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <FaBell className="text-5xl text-[#A67B00] opacity-70 mb-4" />

              <h3 className="text-lg font-semibold text-[#375237]">
                No Notification Here
              </h3>

              <p className="text-sm text-[#A67B00] mt-1">
                There is no notification to show right now
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Profile Avatar */}
      <div className="flex items-center">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm bg-[#2D5D46] hover:scale-105 transition">
          JP
        </div>
      </div>

    </div>
  );
}
