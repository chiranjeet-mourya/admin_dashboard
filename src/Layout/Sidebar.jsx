import React, { useState } from "react";
import { FiBarChart2 } from "react-icons/fi";
import { FaMoneyBillWave, FaSignature } from "react-icons/fa6";
import User from "../assets/user.jpg";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  BiMessageSquare,
  BiPackage,
  BiShoppingBag,
  BiUser,
  BiChevronDown,
} from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { TbBrandOauth } from "react-icons/tb";
import { SiElement } from "react-icons/si";
import { Link } from "react-router";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { TbIconsOff } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";

const menuItems = [
  {
    id: "/",
    icon: <LuLayoutDashboard />,
    label: "Dashboard",
    badge: "New",
  },
  {
    id: "analytics",
    icon: <FiBarChart2 />,
    label: "Analytics",
    submanu: [
      { id: "reports", label: "Reports" },
      { id: "calander", label: "Calendar" },
    ],
  },
  {
    id: "users",
    icon: <BiUser />,
    label: "Users",
    submanu: [
      { id: "user", label: "All Users" },
      { id: "contact", label: "Contact List" },
      { id: "user-chat", label: "Chat" },
    ],
  },
  {
    id: "ecommerce",
    icon: <BiShoppingBag />,
    label: "E-commerce",
    submanu: [
      { id: "product", label: "Products" },
      { id: "product-order", label: "Orders" },
      { id: "product-customer", label: "Customers" },
      { id: "customer-detail", label: "Customers Detail" },
    ],
  },
  {
    id: "elements",
    icon: <SiElement />,
    label: "UI Elements",
    submanu: [
      { id: "ui-alert", label: "Alerts" },
      { id: "ui-button", label: "Buttons" },
      { id: "ui-videos", label: "Videos" },
      { id: "ui-gallery", label: "Gallery" },
    ],
  },
  {
    id: "Advanced",
    icon: <GiLevelFourAdvanced />,
    label: "Advanced UI",
    submanu: [
      { id: "file-manager", label: "File Manager" },
      { id: "highlight", label: "Highlight" },
    ],
  },
  {
    id: "charts",
    icon: <FaChartPie />,
    label: "Charts",
    submanu: [
      { id: "chart-apex", label: "Apex" },
      { id: "chart-js", label: "Chartjs" },
      { id: "toast-chart", label: "Toast UI" },
    ],
  },
  {
    id: "inventory",
    icon: <BiPackage />,
    label: "Inventory",
    count: "847",
  },
  {
    id: "pricing",
    icon: <FaMoneyBillWave />,
    label: "Pricing",
  },
  {
    id: "transactions",
    icon: <CgCreditCard />,
    label: "Transactions",
  },
  {
    id: "notification",
    icon: <BiMessageSquare />,
    label: "Notifications",
    badge: "12",
  },
  {
    id: "icons",
    icon: <TbIconsOff />,
    label: "Icons",
    badge: "New",
  },
  {
    id: "authentication",
    icon: <TbBrandOauth />,
    label: "Authentication",
  },
  {
    id: "settings",
    icon: <CiSettings />,
    label: "Settings",
  },
];

const Sidebar = ({ collapse, openSetting,setOpenSetting, currentPage, onPageChange }) => {
  const [expandItem, setExpandItem] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemId) => {
    setExpandItem((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      return newExpanded;
    });
  };

  return (
    <>
      <div
        className={`${
          collapse ? "w-20" : "w-72"
        } bg-white/80 dark:bg-slate-900/80 transition-all duration-300 ease-in-out backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
      >
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaSignature className="w-6 h-6 text-white" />
            </div>

            {!collapse && (
              <div className="">
                <span className="block text-xl font-bold text-slate-800 dark:text-white">
                  Signature
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Admin Panel
                </p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2.5 overflow-y-auto scrollbar-nav">
          {menuItems.map((item) => {
            return (
              <div key={item.id}>
                <button
                  className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-blue-500  to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <Link to={item.id} className="flex items-center space-x-3">
                    <span className="text-[20px]">{item.icon}</span>

                    <>
                      {!collapse && (
                        <span className="ml-2 font-semibold">{item.label}</span>
                      )}
                      {!collapse && item.badge && (
                        <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-md">
                          {item.badge}
                        </span>
                      )}
                      {!collapse && item.count && (
                        <span className="px-2 py-0.5 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                          {item.count}
                        </span>
                      )}
                    </>
                  </Link>

                  {!collapse && item.submanu && (
                    <span
                      onClick={() => {
                        if (item.submanu) {
                          toggleExpanded(item.id);
                        } else {
                          onPageChange(item.id);
                        }
                      }}
                    >
                      <BiChevronDown
                        className={`w-5 h-5 transition-transform`}
                      />
                    </span>
                  )}
                </button>

                {!collapse && item.submanu && expandItem.has(item.id) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submanu.map((submenu) => {
                      return (
                        <Link
                          to={submenu.id}
                          key={submenu.id}
                          className="block w-full text-left p-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all cursor-pointer"
                        >
                          {submenu.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {!collapse && (
          <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <img
                src={User}
                alt="user"
                className="w-10 h-10 rounded-full ring-2 ring-blue-500"
              />
              <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                    Chiranjeet Mourya
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    Administrator
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;