'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreatePostPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })

    if (response.ok) {
      const post = await response.json()
      router.push(`/posts/${post.id}`)
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8">Criar Novo Post</h1>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-slate-700 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Conteúdo</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 bg-slate-700 rounded-lg"
              rows={10}
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  )
}