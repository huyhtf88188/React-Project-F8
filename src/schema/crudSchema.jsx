import * as z from "zod";

const productSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  price: z.number().min(0),
  description: z.string().optional(),
  thumbnail: z.any().optional(),
});

export default productSchema;
