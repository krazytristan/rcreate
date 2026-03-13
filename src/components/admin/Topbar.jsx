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
    <div className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-end px-6 space-x-6">

      {/* Search Bar */}
      <div className="relative w-64 transition-all duration-300 ease-in-out hover:scale-[1.02] focus-within:scale-[1.02]">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500
                     transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Notification */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="relative text-[#2D5D46] hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          <FaBell className="text-2xl transition-all duration-300 ease-in-out" />

          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full transition-all duration-300 ease-in-out"></span>
        </button>

        {/* Notification Dropdown */}
        <div
          className={`absolute right-0 mt-3 w-[420px] rounded-xl shadow-xl border border-gray-100 bg-white transform-gpu transition-all duration-300 ease-in-out origin-top-right
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-lg font-semibold text-[#375237]">
              Notifications
            </h2>

            <button className="text-sm text-[#A67B00] hover:underline transition-all duration-300 ease-in-out">
              Mark all as read
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 pb-4">
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit transition-all duration-300 ease-in-out">
              {["Today", "This Week", "Earlier"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all duration-300 ease-in-out ${
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

          {/* Notification Content */}
          {activeTab === "Today" && notifications.length > 0 ? (
            <div className="max-h-[360px] overflow-y-auto">
              {notifications.map((n, i) => (
                <div
                  key={i}
                  className="flex gap-3 px-6 py-4 border-t border-gray-100 hover:bg-gray-50 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#F6F4EA] flex items-center justify-center transition-all duration-300 ease-in-out">
                    <FaUser className="text-[#A67B00] text-sm" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 transition-all duration-300 ease-in-out">
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
            <div className="flex flex-col items-center justify-center py-16 text-center transition-all duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 mb-4 text-[#A67B00] opacity-80 transition-all duration-300 ease-in-out"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C10.9 2 10 2.9 10 4V5.1C6.8 5.6 4.5 8.3 4.5 11.5V16L3 17.5V18H21V17.5L19.5 16V11.5C19.5 8.3 17.2 5.6 14 5.1V4C14 2.9 13.1 2 12 2Z" />
                <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
              </svg>

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
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm bg-[#2D5D46] hover:scale-105 transition-all duration-300 ease-in-out">
          JP
        </div>
      </div>

    </div>
  );
}