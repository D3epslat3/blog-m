'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreatePostSchema, createPostSchema } from '@/types/schemas/create-post-schema'
import {createPost} from "@/actions/create-post"
import {clsx} from "clsx"

export default function NewPostPage() {
  const { register, handleSubmit } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema)
  })

  async function handleCreatePost(data: CreatePostSchema) {
    await createPost(data)
  }

  return (
    <div className={clsx('min-h-screen p-8')}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Criar Novo Post</h1>
        <form onSubmit={handleSubmit(handleCreatePost)} className="space-y-6">
          <div>
            <label>Título</label>
            <input
              type='text'
              minLength={5}
              className="w-full p-2 rounded-lg border"
              required
              {...register('title')}
            />
          </div>
          <div>
            <label>Conteúdo</label>
            <textarea
              minLength={20}
              className="w-full p-2 rounded-lg border h-64"
              required
              {...register('content')}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  )
}