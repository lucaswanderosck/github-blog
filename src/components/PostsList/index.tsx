import React from 'react'
import { RotatingTriangles } from 'react-loader-spinner'
import { PostContext } from '../../contexts/PostContext'
import { formatDate, formatDescription } from '../../utils/formatters'
import { Container, Description, Head, PostItem } from './styles'

export const PostsList: React.FC = () => {
  const { posts } = React.useContext(PostContext)

  if (!posts.length) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RotatingTriangles
          visible={!posts.length}
          height="80"
          width="80"
          ariaLabel="rotating-triangles-loading"
          colors={['#AFC2D4', '#7B96B2', '#3A536B']}
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Container>
    )
  }

  return (
    <Container>
      {posts.map((post) => (
        <PostItem to={`/post/${post.number}`} key={post.number}>
          <Head>
            <h4>{post.title}</h4>
            <span>{formatDate(post.created_at)}</span>
          </Head>
          <Description>{formatDescription(post.body)}</Description>
        </PostItem>
      ))}
    </Container>
  )
}
