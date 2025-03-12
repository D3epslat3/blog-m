import { create } from 'zustand'

type Comment = {
  id: string
  content: string
  author: string
  votes: number
  replies: Comment[]
}

type Post = {
  id: number
  title: string
  content: string
  tags: string[]
  date: string
  votes: number
  comments: Comment[]
}

type PostsState = {
  posts: Post[]
  addPost: (post: Post) => void
  votePost: (postId: number, value: number) => void
  addComment: (postId: number, comment: Comment) => void
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  votePost: (postId, value) => set((state) => ({
    posts: state.posts.map(post => 
      post.id === postId ? { ...post, votes: post.votes + value } : post
    )
  })),
  addComment: (postId, comment) => set((state) => ({
    posts: state.posts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    )
  }))
}))