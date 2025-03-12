"use client";

import { BadgeX } from "lucide-react";
import { deletePost } from "@/actions/delete-post";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";

interface IPostDetails {
  post: Post;
}

export function PostDetails({ post }: IPostDetails) {
  const router = useRouter()

  async function handleDeletePost(id: string) {
    await deletePost(id);
    
    router.push("/")
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* Título do Post */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <button type="button" className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors hover:cursor-pointer
" onClick={() => handleDeletePost(post.id)}>
        <BadgeX />
      </button>
      {/* Conteúdo do Post */}
      <div className="prose prose-invert">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
