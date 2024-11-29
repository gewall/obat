import React from "react";
import PageLayout from "../(landing)/_components/PageLayout";
import Typograph from "@/components/ui/typograph";
import SectionsLayout from "../(landing)/_components/SectionsLayout";

import { Metadata } from "next";

import ProjectList from "./_sections/project-list";
import { GetAllProjects } from "@/lib/api/projects";

export const metadata: Metadata = {
  title: "Projects | Algi Nugraha",
  description: "Portofolio Algi Nugraha",
};

const Projects = async () => {
  const data = await GetAllProjects();

  console.log(data);

  return (
    <PageLayout>
      <SectionsLayout className="mt-24 md:flex-col md:items-baseline flex-col">
        <Typograph variant="Sub-Header" className="text-sky-400 mb-4">
          My Projects
        </Typograph>

        <ProjectList projects={data.data} />
      </SectionsLayout>
    </PageLayout>
  );
};

export default Projects;
