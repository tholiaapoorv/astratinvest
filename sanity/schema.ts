import { type SchemaTypeDefinition } from 'sanity';
import {testimonials} from "./schemas/testimonials"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials],
}
