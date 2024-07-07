import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center">
      {/* Sidebar component */}
      <div className="lg:w-1/4 w-full lg:h-screen h-auto lg:overflow-y-auto bg-black"></div>
      {/* Content component */}
      <div className="lg:w-3/4 grow w-full lg:h-screen h-auto overflow-y-auto"></div>
    </main>
  );
};

export default MainLayout;
