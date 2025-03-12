"use server" 

import prisma from "@/lib/prisma"

export async function deletePost(id: string) {
  const post = await prisma.post.delete({
    where: {
      id
    }
  })

  return {
    post
  }
}