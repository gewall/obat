import Navbar from "@/components/ui/navbar";
import React from "react";
import PageLayout from "../(landing)/_components/PageLayout";
import Typograph from "@/components/ui/typograph";
import SectionsLayout from "../(landing)/_components/SectionsLayout";

import { Metadata } from "next";

import ProjectList from "./_sections/project-list";

export const metadata: Metadata = {
  title: "Projects | Algi Nugraha",
  description: "Portofolio Algi Nugraha",
};

type Props = {};

const Projects = async (props: Props) => {
  return (
    <PageLayout>
      <SectionsLayout className="mt-24 md:flex-col md:items-baseline flex-col">
        <Typograph variant="Sub-Header" className="text-sky-400 mb-4">
          My Projects
        </Typograph>

        <ProjectList
          projects={[
            {
              cover_url: "https://picsum.photos/1920/1080",
              slug: "my-game",
              title: "Pena",
              classification: "Game",
              description: "lorem",
            },
          ]}
        />
      </SectionsLayout>
    </PageLayout>
  );
};

export default Projects;
