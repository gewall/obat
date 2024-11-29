export type Project = {
    title: string;
    slug: string;
    cover_url: string;
    images: ProjectImage[];
    description?: string;
    classification?: string; 
    download_link?: string;
}

type ProjectImage = {
    src: string;
    alt: string;
}