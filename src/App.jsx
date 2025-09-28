import React, { useState } from "react";
import Sidebar from "./component/layout/Sidebar";
import Header from "./component/layout/Header";
import Dashboard from "./component/dashboard/Dashboard";

const App = () => {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all">
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            collapse={sidebarCollapse}
            onToggle={() => setSidebarCollapse(!sidebarCollapse)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header
              sidebarCollapse={sidebarCollapse}
              onToggleSidebar={() => setSidebarCollapse(!sidebarCollapse)}
            />

            <main className="flex-1 overflow-y-auto bg-transparent">
              <div className="p-6 space-y-6">
                {currentPage === "dashboard" && <Dashboard />}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
