import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import React from 'react'
import { PostContext } from '../../contexts/PostContext'
import { formatDescription } from '../../utils/formatters'
import { Container, Description, Head, PostItem } from './styles'

export const PostsList: React.FC = () => {
  const { posts } = React.useContext(PostContext)

  return (
    <Container>
      {posts.map((post) => (
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
