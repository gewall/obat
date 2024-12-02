import Hero from "./_sections/hero";
import { Metadata } from "next";
import About from "./_sections/about";

import PageLayout from "./_components/PageLayout";
import ProjectList from "../projects/_sections/project-list";
import SectionsLayout from "./_components/SectionsLayout";
import Typograph from "@/components/ui/typograph";

export const metadata: Metadata = {
  title: "Home | Algi Nugraha",
  description: "Portofolio Algi Nugraha",
};

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <SectionsLayout className="mt-24 md:flex-col md:items-baseline flex-col">
        <Typograph variant="Sub-Header" className="text-sky-400 mb-4">
          My Projects
        </Typograph>
        <ProjectList />
      </SectionsLayout>
    </PageLayout>
  );
}
