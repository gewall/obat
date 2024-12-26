import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

const SectionsLayout = ({ children, id, className }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col-reverse gap-2 md:gap-0 md:flex-row container px-8 my-4 md:items-center",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionsLayout;
