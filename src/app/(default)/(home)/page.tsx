import Link from 'next/link'
import { Plus } from 'lucide-react'
import {fetchPosts} from "@/actions/fetch-posts"
import {ListPosts} from "./_components/list-posts"

export default async function Home() {
  const {posts} = await fetchPosts()

  return (
    <div className="min-h-screen bg-slate-800">
      <ListPosts posts={posts} />
      <Link
        href="/posts/novo"
        className="fixed bottom-8 right-8 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <Plus className="w-6 h-6" />
      </Link>
    </div>
  )
}