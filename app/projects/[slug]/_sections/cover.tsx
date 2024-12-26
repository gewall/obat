import SectionsLayout from "@/app/Delete/_components/SectionsLayout";
import Image from "next/image";
import React from "react";
import { IImage } from "../page";

const Cover = ({ alt, src }: IImage) => {
  return (
    <SectionsLayout className="mt-24 md:flex-col md:items-baseline">
      <div className="w-full h-96 relative -z-10">
        <Image
          src={
            "https://qgxwsaucjynripudbgtz.supabase.co/storage/v1/object/public/" +
            src
          }
          alt={alt}
          objectFit="cover"
          fill
        />
      </div>
    </SectionsLayout>
  );
};

export default Cover;
