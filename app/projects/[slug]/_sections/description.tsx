import React from "react";
import { IImage } from "../page";
import SectionsLayout from "@/app/(landing)/_components/SectionsLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typograph from "@/components/ui/typograph";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  type: string;
  gallery?: IImage[];
  downloadLink: string;
};

const Description = ({
  description,
  downloadLink,
  gallery,
  name,
  type,
}: Props) => {
  return (
    <SectionsLayout>
      <div className="my-4 w-full">
        <Typograph variant="Sub-Header">{name}</Typograph>
        <Typograph variant="Text" className="text-zinc-500 text-sm">
          {type}
        </Typograph>
        <Typograph variant="Text">{description}</Typograph>
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent className="-ml-1">
            {gallery?.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Image src={_.src} alt={_.alt} width={200} height={200} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Button asChild className="bg-sky-400 hover:bg-sky-500">
          <Link href={downloadLink} target="_blank">
            Download Here!
          </Link>
        </Button>
      </div>
    </SectionsLayout>
  );
};

export default Description;
