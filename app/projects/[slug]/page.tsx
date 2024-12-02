import PageLayout from "@/app/(landing)/_components/PageLayout";
import React from "react";
import Cover from "./_sections/cover";
import Description from "./_sections/description";
import { GetAllProjects, GetProjectBySlug } from "@/lib/api/projects";
import { Project as iProject } from "@/lib/types/project.type";

export const dynamic = "force-static"; // Opsi dynamic rendering
export const revalidate = 3600; // Revalidasi setiap 1 jam

export type IImage = {
  src: string;
  alt: string;
};

// Tipe params diperbaiki
type Params = {
  slug: string;
};

// Fungsi untuk menghasilkan parameter dinamis
export async function generateStaticParams() {
  const data = await GetAllProjects();
  const projects = data.data as iProject[];
  return projects.map((project) => ({ slug: project.slug }));
}

// Metadata dinamis berdasarkan slug
export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = params;
  const response = await GetProjectBySlug(slug);
  const project = response.data as iProject;

  return {
    title: `${project.title} | Algi Nugraha`,
  };
}

// Komponen Halaman Project
const Project = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const response = await GetProjectBySlug(slug);
  const project = response.data;

  return (
    <PageLayout>
      <Cover src={project.cover_url} alt={project.slug} />
      <Description
        description={project.description}
        download_link={project.download_link}
        title={project.title}
        classification={project.classification}
        images={project.images ? (project.images?.split(",") as []) : []} // Handle jika null
        cover_url={project.cover_url}
        slug={project.slug}
      />
    </PageLayout>
  );
};

export default Project;
