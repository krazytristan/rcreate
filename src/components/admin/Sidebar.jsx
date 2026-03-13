import React, { useRef, useState, useEffect } from "react";
import { FaChartPie, FaGlobe, FaHandshake, FaUniversity, FaRegCommentDots, FaCog } from "react-icons/fa";
import { HiOutlineViewGrid, HiOutlinePresentationChartLine } from "react-icons/hi";
import { TbBrowserShare } from "react-icons/tb";
import { RiFileList3Line } from "react-icons/ri";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";

const menuItems = [
  { icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { icon: <FaHandshake />, label: "Marketing" },
  { icon: <TbBrowserShare />, label: "Website Projects" },
  { icon: <FaGlobe />, label: "HR" },
  { icon: <FaChartPie />, label: "Analytics & Reports" },
  { 
    icon: <FaUniversity />, 
    label: "Finance",
    subItems: ["Budgeting", "Invoices", "Reports"]
  },
  { 
    icon: <HiOutlinePresentationChartLine />, 
    label: "Operations",
    subItems: ["Logistics", "Processes"]
  },
  { icon: <RiFileList3Line />, label: "Documents" },
  { icon: <FaRegCommentDots />, label: "Message" },
  { icon: <FaCog />, label: "Settings" },
];

export default function Sidebar({ activePage, setActivePage }) {
  const itemRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({});
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile toggle

  useEffect(() => {
    const activeIndex = menuItems.findIndex(
      (item) => item.label === activePage || (item.subItems && item.subItems.includes(activePage))
    );

    const el = itemRefs.current[activeIndex];

    if (el) {
      const thinnerHeight = el.offsetHeight - 8;
      const offset = (el.offsetHeight - thinnerHeight) / 2;

      setSliderStyle({
        top: el.offsetTop + offset,
        height: thinnerHeight,
      });
    }
  }, [activePage]);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-green-500 text-white"
        onClick={() => setSidebarOpen(true)}
      >
        <IoIosMenu className="text-2xl" />
      </button>

      {/* Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 p-6 bg-white border-r border-gray-200 flex flex-col z-30
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative
        `}
      >
        {/* Logo */}
        <div className="mb-12 flex items-center justify-start -ml-4">
          <img
            src={`${process.env.PUBLIC_URL}/assets/adminlogo.png`}
            alt="RCREATE Logo"
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Menu */}
        <nav className="relative flex flex-col space-y-3 text-gray-700">
          <div
            className="absolute left-0 w-full rounded-xl bg-gradient-to-r from-green-700 via-green-500 to-green-400 transition-all duration-300 ease-in-out"
            style={sliderStyle}
          />
          {menuItems.map(({ icon, label, subItems }, index) => {
            const isActive = label === activePage || (subItems && subItems.includes(activePage));
            const isDropdownOpen = openDropdowns[label];

            return (
              <div key={label} className="flex flex-col">
                <button
                  ref={(el) => (itemRefs.current[index] = el)}
                  onClick={() => subItems ? toggleDropdown(label) : setActivePage(label)}
                  className={`
                    relative flex items-center justify-between px-3 h-12 rounded-xl
                    text-base font-medium transition-all duration-300
                    ${isActive
                      ? "text-white"
                      : "hover:bg-gradient-to-r hover:from-green-200 hover:to-green-100 hover:text-green-900"
                    }
                  `}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{icon}</div>
                    <span>{label}</span>
                  </div>

                  {subItems && (
                    <IoIosArrowDown
                      className={`text-lg transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {subItems && isDropdownOpen && (
                  <div className="flex flex-col ml-12 mt-1 space-y-1">
                    {subItems.map((subLabel) => (
                      <button
                        key={subLabel}
                        onClick={() => setActivePage(subLabel)}
                        className={`
                          text-gray-700 px-3 h-10 rounded-lg text-sm text-left
                          ${activePage === subLabel
                            ? "bg-green-500 text-white"
                            : "hover:bg-green-100 hover:text-green-900"
                          }
                        `}
                      >
                        {subLabel}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
