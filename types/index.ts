import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type testimonial = {
image: SanityImageSource;
rating: number;
name: string;
designation: string;
remarks: string;
}