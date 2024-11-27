import SectionsLayout from "@/app/(landing)/_components/SectionsLayout";
import Image from "next/image";
import React from "react";
import { IImage } from "../page";

const Cover = ({ alt, src }: IImage) => {
  return (
    <SectionsLayout className="mt-24 md:flex-col md:items-baseline">
      <div className="w-full h-80 relative -z-10">
        <Image src={src} alt={alt} fill />
      </div>
    </SectionsLayout>
  );
};

export default Cover;
