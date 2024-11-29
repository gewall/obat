"use client";

import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  slug: z.string().toLowerCase(),
  cover_url: z.instanceof(File),
  images: z.unknown().transform((value) => {
    return value as FileList;
  }),
  description: z.string(),

  classification: z.enum(["Game", "Web", "Mobile"]),
  download_link: z.string().toLowerCase(),
});
