import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./_components/Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar />
      {/* <SidebarTrigger /> */}
      <div className="flex flex-col w-full mx-4">
        <Navbar />
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
