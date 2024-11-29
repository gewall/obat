"use client";

import React, { useEffect, useState } from "react";
import Card, { CardProps } from "../_components/Card";
import { GetAllProjects } from "@/lib/api/projects";

// type Project = {
//   nama: string;
//   img: string;
//   description?: String;
//   type?: String;
// };

const ProjectList = () => {
  const [data, setData] = useState<CardProps[]>();

  useEffect(() => {
    const fetch = async () => {
      const _ = await GetAllProjects();
      setData(_.data);
    };

    fetch();
  }, [GetAllProjects]);
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="flex flex-col md:flex-row justify-start w-full gap-4">
      {data.map((_, i) => (
        <Card key={i} {...(_ as CardProps)} />
      ))}
    </div>
  );
};

export default ProjectList;
