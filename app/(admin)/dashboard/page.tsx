import { auth } from "@/auth";
import React from "react";
import SectionLayout from "./_components/SectionLayout";

const Dashboard = async () => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return <SectionLayout title="Dashboard">Dashboard</SectionLayout>;
};

export default Dashboard;
