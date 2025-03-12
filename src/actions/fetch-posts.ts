"use server"

import prisma from "@/lib/prisma"

export async function fetchPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })

  return {
    posts
  }
}