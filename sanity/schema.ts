import { type SchemaTypeDefinition } from "sanity";
import { testimonials } from "./schemas/testimonials";
import { blogs } from "./schemas/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials, blogs],
};
