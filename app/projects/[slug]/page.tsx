import PageLayout from "@/app/(landing)/_components/PageLayout";

import { Metadata } from "next";

import React from "react";
import Cover from "./_sections/cover";
import Description from "./_sections/description";

export const metadata: Metadata = {
  title: "Project | Algi Nugraha",
  description: "Portofolio Algi Nugraha",
};

export type IImage = {
  src: string;
  alt: string;
};

const Project = async () => {
  return (
    <PageLayout>
      <Cover src="https://picsum.photos/1920/1080" alt="" />
      <Description
        description={"sdasd"}
        downloadLink="https://gewall.itch.io/"
        name={"sadas"}
        type={"game"}
        gallery={[{ alt: "", src: "https://picsum.photos/1920/1080" }]}
      />
    </PageLayout>
  );
};

export default Project;
