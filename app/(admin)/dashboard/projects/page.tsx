import React from "react";
import SectionLayout from "../_components/SectionLayout";

import { Project } from "@/lib/types/project.type";
import { DataTable } from "../_components/DataTable";
import { columns } from "./_lib/columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import Link from "next/link";

async function getData(): Promise<Project[]> {
  // Fetch data from your API here.
  return [
    {
      title: "Majalengka Folklore Game",
      slug: "majalengka-folklore-game",
      cover_url: "https://example.com/images/majalengka-cover.jpg",
      images: [
        {
          src: "https://example.com/images/majalengka-1.jpg",
          alt: "Majalengka scenery 1",
        },
        {
          src: "https://example.com/images/majalengka-2.jpg",
          alt: "Majalengka scenery 2",
        },
      ],
      description: "Game berbasis budaya lokal dari cerita rakyat Majalengka.",
      classification: "Game Development",
      download_link: "https://example.com/downloads/majalengka-game",
    },
    {
      title: "Weather Tracker App",
      slug: "weather-tracker-app",
      cover_url: "https://example.com/images/weather-cover.jpg",
      images: [
        {
          src: "https://example.com/images/weather-1.jpg",
          alt: "Weather app UI 1",
        },
        {
          src: "https://example.com/images/weather-2.jpg",
          alt: "Weather app UI 2",
        },
      ],
      description:
        "Aplikasi untuk memantau cuaca secara real-time dengan integrasi API.",
      classification: "Mobile Development",
      download_link: "https://example.com/downloads/weather-tracker",
    },
    {
      title: "E-Learning Platform",
      slug: "e-learning-platform",
      cover_url: "https://example.com/images/elearning-cover.jpg",
      images: [
        {
          src: "https://example.com/images/elearning-1.jpg",
          alt: "E-learning platform dashboard",
        },
        {
          src: "https://example.com/images/elearning-2.jpg",
          alt: "E-learning course view",
        },
      ],
      description:
        "Platform pendidikan online untuk berbagai kursus dan materi pembelajaran.",
      classification: "Web Development",
      download_link: "https://example.com/downloads/elearning-platform",
    },
    {
      title: "Art Portfolio Website",
      slug: "art-portfolio-website",
      cover_url: "https://example.com/images/portfolio-cover.jpg",
      images: [
        {
          src: "https://example.com/images/portfolio-1.jpg",
          alt: "Portfolio gallery",
        },
        {
          src: "https://example.com/images/portfolio-2.jpg",
          alt: "Portfolio details page",
        },
      ],
      description:
        "Website untuk menampilkan karya seni dan portofolio pribadi.",
      classification: "Web Development",
    },
    {
      title: "Fitness Tracker App",
      slug: "fitness-tracker-app",
      cover_url: "https://example.com/images/fitness-cover.jpg",
      images: [
        {
          src: "https://example.com/images/fitness-1.jpg",
          alt: "Fitness tracker dashboard",
        },
        {
          src: "https://example.com/images/fitness-2.jpg",
          alt: "Workout tracking view",
        },
      ],
      description:
        "Aplikasi untuk memantau aktivitas kebugaran dan pencapaian olahraga.",
      classification: "Mobile Development",
      download_link: "https://example.com/downloads/fitness-tracker",
    },
    {
      title: "Task Management App",
      slug: "task-management-app",
      cover_url: "https://example.com/images/task-cover.jpg",
      images: [
        { src: "https://example.com/images/task-1.jpg", alt: "Task dashboard" },
        {
          src: "https://example.com/images/task-2.jpg",
          alt: "Task details page",
        },
      ],
      description:
        "Aplikasi untuk mengelola tugas sehari-hari dengan fitur kolaborasi.",
      classification: "Web Development",
      download_link: "https://example.com/downloads/task-management",
    },
    {
      title: "Smart Home App",
      slug: "smart-home-app",
      cover_url: "https://example.com/images/smart-home-cover.jpg",
      images: [
        {
          src: "https://example.com/images/smart-home-1.jpg",
          alt: "Smart home control dashboard",
        },
        {
          src: "https://example.com/images/smart-home-2.jpg",
          alt: "Smart home device view",
        },
      ],
      description:
        "Aplikasi untuk mengontrol perangkat rumah pintar dengan mudah.",
      classification: "Mobile Development",
    },
    {
      title: "Travel Planner Website",
      slug: "travel-planner-website",
      cover_url: "https://example.com/images/travel-cover.jpg",
      images: [
        {
          src: "https://example.com/images/travel-1.jpg",
          alt: "Travel destination list",
        },
        {
          src: "https://example.com/images/travel-2.jpg",
          alt: "Travel itinerary page",
        },
      ],
      description:
        "Website untuk merencanakan perjalanan lengkap dengan rekomendasi destinasi.",
      classification: "Web Development",
      download_link: "https://example.com/downloads/travel-planner",
    },
    {
      title: "Recipe Sharing App",
      slug: "recipe-sharing-app",
      cover_url: "https://example.com/images/recipe-cover.jpg",
      images: [
        {
          src: "https://example.com/images/recipe-1.jpg",
          alt: "Recipe gallery",
        },
        {
          src: "https://example.com/images/recipe-2.jpg",
          alt: "Recipe details page",
        },
      ],
      description:
        "Aplikasi untuk berbagi dan menemukan resep masakan dari seluruh dunia.",
      classification: "Mobile Development",
      download_link: "https://example.com/downloads/recipe-sharing",
    },
    {
      title: "Photography Portfolio Website",
      slug: "photography-portfolio-website",
      cover_url: "https://example.com/images/photo-portfolio-cover.jpg",
      images: [
        {
          src: "https://example.com/images/photo-1.jpg",
          alt: "Photography showcase",
        },
        {
          src: "https://example.com/images/photo-2.jpg",
          alt: "Portfolio details",
        },
      ],
      description:
        "Website untuk menampilkan portofolio fotografi profesional.",
      classification: "Web Development",
    },
  ];
}

const Projects = async () => {
  const data = await getData();
  return (
    <SectionLayout title="Projects ">
      <div className="flex mb-4">
        <Button className="bg-sky-300 hover:bg-sky-400" asChild>
          <Link href={"/dashboard/projects/add"}>
            <Plus /> Project
          </Link>
        </Button>

        {/* <AddProject /> */}
      </div>

      <DataTable columns={columns} data={data} />
    </SectionLayout>
  );
};

export default Projects;
