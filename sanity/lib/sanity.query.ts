import { groq } from "next-sanity";
import { client } from "./client";
import { testimonial } from "@/types";

export async function getTestimonials(): Promise<testimonial[] | undefined> {
  try {
    const response = await client.fetch<testimonial[]>(
      groq`
        *[_type == "testimonials"]
        `,
      {},
      { next: { tags: ["testimonials"] } },
    );

    return response as testimonial[];
  } catch (err) {
    console.log("getTestimonials error=== ", err);
  }
}
export async function getBlogs() {
  try {
    const blog = await client.fetch(
      groq`*[_type=="post"]{
      title,
        mainImage,
        description,
        publishedAt,
        slug,
        _id
      }`,
      {},
      { next: { tags: ["post"] }, cache: "force-cache" },
    );
    return blog;
  } catch (err) {
    console.log("getBlogs error=== ", err);
  }
}
export async function getBlogBySlug(slug: string) {
  try {
    const blog = await client.fetch(
      groq`*[_type=="post" && slug.current == $slug]{
      title,
        mainImage,
        description,
        publishedAt,
        slug,
        _id,
        body
      }`,
      { slug: slug },
      { next: { tags: ["post"] }, cache: "force-cache" },
    );
    return blog;
  } catch (err) {
    console.log("getBlogs error=== ", err);
  }
}
