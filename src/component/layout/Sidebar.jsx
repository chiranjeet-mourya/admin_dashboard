import React, { useState } from "react";
import { FiBarChart2, FiZap } from "react-icons/fi";
import User from "../../assets/user.jpg";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  BiCalendar,
  BiMessageSquare,
  BiPackage,
  BiShoppingBag,
  BiUser,
  BiChevronDown,
} from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";
import { AiFillFileText } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

const menuItems = [
  {
    id: "dashboard",
    icon: <LuLayoutDashboard />,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: <FiBarChart2 />,
    label: "Analytics",
    submanu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: <BiUser />,
    label: "Users",
    count: "2.4k",
    submanu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: <BiShoppingBag />,
    label: "E-commerce",
    count: "2.4k",
    submanu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: <BiPackage />,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: <CgCreditCard />,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: <BiMessageSquare />,
    label: "Messages",
    badge: "12",
  },
  {
    id: "calendar",
    icon: <BiCalendar />,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: <AiFillFileText />,
    label: "Reports",
  },
  {
    id: "settings",
    icon: <CiSettings />,
    label: "Settings",
  },
];

const Sidebar = ({ collapse, onToggle, currentPage, onPageChange }) => {
  const [expandItem, setExpandItem] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandItem);

    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }

    setExpandItem(newExpanded);
  };

  return (
    <>
      <div
        className={`${
          collapse ? "w-20" : "w-70"
        } bg-white/80 dark:bg-slate-900/80 transition-all duration-300 ease-in-out backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FiZap className="w-6 h-6 text-white" />
            </div>

            {/* conditional rendering */}
            {!collapse && (
              <div className="">
                <span className="block text-xl font-bold text-slate-800 dark:text-white">
                  Nexus
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Admin Panel
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigations menus */}
        <nav className="flex-1 p-4 space-y-2.5 overflow-y-auto scrollbar-nav">
          {menuItems.map((item) => {
            return (
              <div key={item.id}>
                <button
                  className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    currentPage === item.id || item.active
                      ? "bg-gradient-to-r from-blue-500  to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800/50"
                  }`}
                  onClick={()=>{
                    if(item.submanu){
                        toggleExpanded(item.id);
                    }else{
                        onPageChange(item.id)
                    }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}

                    {/* conditional rendering */}
                    <>
                      {!collapse && (
                        <span className="ml-2 font-medium">{item.label}</span>
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
                  </div>

                  {!collapse && item.submanu && (
                    <BiChevronDown className={`w-5 h-5 transition-transform`} />
                  )}
                </button>

                {/* sab menu */}
                {!collapse && item.submanu && expandItem.has(item.id) &&(
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submanu.map((submenu) => {
                      return <button key={submenu.id} className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all cursor-pointer">{submenu.label}</button>;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* user profile */}
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
