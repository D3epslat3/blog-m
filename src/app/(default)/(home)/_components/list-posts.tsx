"use client"

import { motion } from 'framer-motion'
import {Post} from "@prisma/client"
import Link from 'next/link'


interface IListPosts {
  posts: Post[]
}

export function ListPosts({posts}: IListPosts) {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              return (
                <Link key={post.id} href={`/posts/${post.id}`}>
                <div className="bg-slate-700 rounded-xl p-6 h-full hover:bg-slate-600 transition-colors">
                  <div className="mb-4">
                    <div className="h-40 bg-slate-600 rounded-lg mb-4 animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">{post.createdAt.toString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.content}</p>
                </div>
              </Link>
              )
            })}
          </div>
        </motion.div>
      </section>
  )
}
