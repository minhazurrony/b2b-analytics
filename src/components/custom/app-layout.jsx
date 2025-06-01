import React from "react";
import { AppSidebar } from "./app-sidebar";

export const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <main className="flex flex-col flex-1">
        <div className="overflow-auto px-12 py-6 bg-dime-light-grey rounded-tl-lg rounded-tr-lg mt-4 mr-4">
          {children}
        </div>
      </main>
    </div>
  );
};
