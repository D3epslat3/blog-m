"use server";

import {CreatePostSchema} from "@/types/schemas/create-post-schema"
import prisma from "@/lib/prisma"

export async function createPost(data: CreatePostSchema) {
  const post = await prisma.post.create({
    data
  })

  return {
    post
  }
}