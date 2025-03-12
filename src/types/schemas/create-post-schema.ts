import {z} from "zod"

export const createPostSchema = z.object({
  title: z.string().min(5, "O titulo deve conter pelo menos 5 caracteres"),
  content: z.string().min(20, "O conteúdo deve conter pelo menos 5 caracteres"),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;