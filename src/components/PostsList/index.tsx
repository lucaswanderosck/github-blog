import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import React from 'react'
import { api } from '../../lib/axios'
import { formatDescription } from '../../utils/formatters'
import { Container, Description, Head, PostItem } from './styles'

export interface PostI {
  title: string
  created_at: string
  body: string
  number: number
  html_url: string
  comments: number
  author_association: string
  // user: {
  //   login: string
  // }
}

interface IssuesPost {
  total_count: number
  items: PostI[]
}

export const PostsList: React.FC = () => {
  const [posts, setPosts] = React.useState<IssuesPost>({
    total_count: 0,
    items: [],
  })

  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get(
        '/search/issues?q=repo:lucaswanderosck/github-blog',
      )
      setPosts(response.data)
    }
    fetchPosts()
  }, [])

  return (
    <Container>
      {posts.items.map((post) => (
        <PostItem to={`/post/${post.number}`} key={post.number}>
          <Head>
            <h4>{post.title}</h4>
            <span>
              {formatDistanceToNow(post.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </Head>
          <Description>{formatDescription(post.body)}</Description>
        </PostItem>
      ))}
    </Container>
  )
}
