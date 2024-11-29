import Typograph from "@/components/ui/typograph";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

export type CardProps = {
  title: string;
  slug: string;
  cover_url: string;
  description?: string;
  classification?: string;
};

const Card = ({
  description,
  cover_url,
  slug,
  title,
  classification,
}: CardProps) => {
  return (
    <motion.div
      initial={{ x: -600 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "backInOut" }}
    >
      <div className="border-2 border-slate-200 px-2 py-2 max-w-64">
        <Image
          src={`https://qgxwsaucjynripudbgtz.supabase.co/storage/v1/object/public/${cover_url}`}
          alt={title}
          width={250}
          height={250}
          className="rounded-md"
        />
        <div className="py-4">
          <Link
            href={`/projects/${slug}`}
            className="hover:underline font-bold text-lg"
          >
            {title}
          </Link>
          <Typograph variant="Text" className="">
            {description?.slice(0, 90)}...
          </Typograph>
          <Typograph variant="Text" className="text-sm text-zinc-500">
            {classification}
          </Typograph>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
