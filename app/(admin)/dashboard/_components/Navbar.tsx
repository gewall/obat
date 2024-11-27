import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-4 my-2 rounded-md bg-sky-800 w-full text-white">
      <div className="flex px-4 w-full">
        <SidebarTrigger />
        <div className="ml-auto">dsa</div>
      </div>
    </div>
  );
};

export default Navbar;
