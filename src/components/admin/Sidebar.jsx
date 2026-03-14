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
    subItems: ["Budgeting", "Invoices", "Reports"],
  },
  {
    icon: <HiOutlinePresentationChartLine />,
    label: "Operations",
    subItems: ["Logistics", "Processes"],
  },
  { icon: <RiFileList3Line />, label: "Documents" },
  { icon: <FaRegCommentDots />, label: "Message" },
  { icon: <FaCog />, label: "Settings" },
];

export default function Sidebar({ activePage, setActivePage }) {
  const itemRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({});
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const activeIndex = menuItems.findIndex(
      (item) =>
        item.label === activePage ||
        (item.subItems && item.subItems.includes(activePage))
    );

    const el = itemRefs.current[activeIndex];

    if (el) {
      setSliderStyle({
        transform: `translateY(${el.offsetTop}px)`,
        height: el.offsetHeight,
      });
    }
  }, [activePage]);

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleMobileClick = (label) => {
    setActivePage(label);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-green-500 text-white"
        onClick={() => setSidebarOpen(true)}
      >
        <IoIosMenu className="text-2xl" />
      </button>

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-40
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:p-6
        `}
      >
        {/* Logo */}
        <div className="mb-12 flex items-center justify-start px-4 md:px-0">
          <img
            src={`${process.env.PUBLIC_URL}/assets/adminlogo.png`}
            alt="RCREATE Logo"
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Menu */}
        <nav className="relative flex flex-col space-y-3 text-gray-700">

          {/* Sliding Active Indicator */}
          <div
            className="hidden md:block absolute left-0 w-full rounded-xl bg-gradient-to-r from-green-700 via-green-500 to-green-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={sliderStyle}
          />

          {menuItems.map(({ icon, label, subItems }, index) => {
            const isActive =
              label === activePage ||
              (subItems && subItems.includes(activePage));

            const isDropdownOpen = openDropdowns[label];

            return (
              <div key={label} className="flex flex-col">
                <button
                  ref={(el) => (itemRefs.current[index] = el)}
                  onClick={() =>
                    subItems
                      ? toggleDropdown(label)
                      : handleMobileClick(label)
                  }
                  className={`
                    relative flex items-center justify-between px-3 h-12 rounded-xl
                    text-base font-medium transition-all duration-300
                    ${isActive ? "text-white md:text-white" : "text-gray-700"}
                    hover:bg-gradient-to-r hover:from-green-200 hover:to-green-100 hover:text-green-900
                  `}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{icon}</div>
                    <span>{label}</span>
                  </div>

                  {subItems && (
                    <IoIosArrowDown
                      className={`text-lg transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {subItems && isDropdownOpen && (
                  <div className="flex flex-col ml-12 mt-1 space-y-1">
                    {subItems.map((subLabel) => (
                      <button
                        key={subLabel}
                        onClick={() => handleMobileClick(subLabel)}
                        className={`
                          px-3 h-10 rounded-lg text-sm text-left transition
                          ${
                            activePage === subLabel
                              ? "text-green-700 font-semibold"
                              : "text-gray-700 hover:bg-green-100"
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