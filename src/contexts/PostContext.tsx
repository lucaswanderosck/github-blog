import React from 'react'
import { api } from '../lib/axios'

export interface PostI {
  title: string
  created_at: string
  body: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface PostContextType {
  posts: PostI[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostProviderProps {
  children: React.ReactNode
}

export const PostContext = React.createContext({} as PostContextType)

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = React.useState<PostI[]>([])

  const fetchPosts = async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=repo:lucaswanderosck/github-blog${query ? `+${query}` : ''}`,
    )
    console.log(response.data.items)

    setPosts(response.data.items)
  }

  React.useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
