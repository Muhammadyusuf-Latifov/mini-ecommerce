import { memo } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden ml-[250px]">
      
        <header className="py-[34px] w-full bg-slate-900"></header>

        <section className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
