import { auth } from "@/auth";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return <div className="ml-96 top-0">Dashboard</div>;
};

export default Dashboard;
