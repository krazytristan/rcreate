import React, { useRef, useState, useEffect } from "react";
import { FaChartPie, FaGlobe, FaHandshake, FaUniversity, FaRegCommentDots, FaCog } from "react-icons/fa";
import { HiOutlineViewGrid, HiOutlinePresentationChartLine } from "react-icons/hi";
import { TbBrowserShare } from "react-icons/tb";
import { RiFileList3Line } from "react-icons/ri";

const menuItems = [
  { icon: <HiOutlineViewGrid />, label: "Dashboard" },
  { icon: <FaHandshake />, label: "Marketing" },
  { icon: <TbBrowserShare />, label: "Website Projects" },
  { icon: <FaGlobe />, label: "HR" },
  { icon: <FaChartPie />, label: "Analytics & Reports" },
  { icon: <FaUniversity />, label: "Finance" },
  { icon: <HiOutlinePresentationChartLine />, label: "Operations" },
  { icon: <RiFileList3Line />, label: "Documents" },
  { icon: <FaRegCommentDots />, label: "Message" },
  { icon: <FaCog />, label: "Settings" },
];

export default function Sidebar({ activePage, setActivePage }) {
  const itemRefs = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const activeIndex = menuItems.findIndex(
      (item) => item.label === activePage
    );

    const el = itemRefs.current[activeIndex];

    if (el) {
      const thinnerHeight = el.offsetHeight - 8; // make it 8px thinner
      const offset = (el.offsetHeight - thinnerHeight) / 2; // center vertically

      setSliderStyle({
        top: el.offsetTop + offset,
        height: thinnerHeight,
      });
    }
  }, [activePage]);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed top-0 left-0 h-screen p-6 flex flex-col z-20">
      
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

        {/* Sliding Active Background */}
        <div
          className="absolute left-0 w-full rounded-xl bg-gradient-to-r from-green-700 via-green-500 to-green-400 transition-all duration-300 ease-in-out"
          style={sliderStyle}
        />

        {menuItems.map(({ icon, label }, index) => {
          const isActive = label === activePage;

          return (
            <button
              key={label}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => setActivePage(label)}
              className={`
                relative flex items-center space-x-4 px-3 h-12 rounded-xl
                text-base font-medium transition-all duration-300
                ${isActive
                  ? "text-white"
                  : "hover:bg-gradient-to-r hover:from-green-200 hover:to-green-100 hover:text-green-900"
                }
              `}
            >
              <div className="text-2xl flex items-center">{icon}</div>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}