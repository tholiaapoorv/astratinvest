import { groq } from "next-sanity";
import { client } from "./client";
import { testimonial } from "@/types";

export async function getTestimonials(): Promise<testimonial[] | undefined> {
  try {
    const response = await client.fetch<testimonial[]>(groq`
        *[_type == "testimonials"]
        `);

    return response as testimonial[];
  } catch (err) {
    console.log("getTestimonials error=== ", err);
  }
}
