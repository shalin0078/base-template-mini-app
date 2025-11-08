import React from "react";

const DashboardLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
