import { memo } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-slate-900 text-white fixed top-0 left-0">
      <div className="flex flex-col py-[30px] px-[10px] ">
        <h2 className="text-[24px] pl-[4px] mb-[20px]">Dashboard</h2>
        <NavLink
          className={
            "navlink px-[12px] py-[12px] bg-[#36363666] rounded-[6px]  mb-[7px] duration-150 hover:bg-[#49494971] hover:pl-[16px]"
          }
          to={"/"}
        >
          Statistic
        </NavLink>
        <NavLink
          className={
            "navlink px-[12px] py-[12px] bg-[#36363666] rounded-[6px] mb-[7px] duration-150 hover:bg-[#49494971] hover:pl-[16px]"
          }
          to={"/product"}
        >
          Products
        </NavLink>
        <NavLink
          className={
            "navlink px-[12px] py-[12px] bg-[#36363666] rounded-[6px] mb-[7px] duration-150 hover:bg-[#49494971] hover:pl-[16px]"
          }
          to={"/user"}
        >
          User
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Sidebar);
