"use client";

import React from "react";

import SectionsLayout from "@/app/(landing)/_components/SectionsLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typograph from "@/components/ui/typograph";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Project } from "@/lib/types/project.type";
import Autoplay from "embla-carousel-autoplay";

// type Props = {
//   name: string;
//   description: string;
//   type: string;
//   gallery?: IImage[];
//   downloadLink: string;
// };

const Description = ({
  description,

  images,
  slug,
  title,
  classification,
  download_link,
}: Project) => {
  return (
    <SectionsLayout>
      <div className="my-4 w-full">
        <Typograph variant="Sub-Header">{title}</Typograph>
        <Typograph variant="Text" className="text-zinc-500 text-sm">
          {classification}
        </Typograph>
        <Typograph variant="Text">{description}</Typograph>
        <Carousel
          className="w-full max-w-2xl mx-auto relative -z-10 "
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1 py-4">
            {images?.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 "
              >
                <Image
                  src={
                    "https://qgxwsaucjynripudbgtz.supabase.co/storage/v1/object/public/" +
                    _
                  }
                  alt={slug + "-" + index}
                  width={200}
                  height={200}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* <CarouselPrevious className="absolute z-50" />
          <CarouselNext className="absolute z-50" /> */}
        </Carousel>

        <Button asChild className="bg-sky-400 hover:bg-sky-500">
          <Link href={`${download_link}`} target="_blank">
            Download Here!
          </Link>
        </Button>
      </div>
    </SectionsLayout>
  );
};

export default Description;
