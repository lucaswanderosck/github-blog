import React from 'react'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { RotatingTriangles } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'
import { PostI } from '../../contexts/PostContext'
import { api } from '../../lib/axios'
import { formatDate } from '../../utils/formatters'
import {
  Container,
  ContentPost,
  Headline,
  InformationsPost,
  InfosPost,
  PostTitle,
} from './styles'

export const FullPost: React.FC = () => {
  const [post, setPost] = React.useState<PostI>({} as PostI)
  const { id } = useParams()

  const fetchFullPost = React.useCallback(async () => {
    try {
      const response = await api.get(
        `repos/lucaswanderosck/github-blog/issues/${id}`,
      )
      setPost(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [id])

  React.useEffect(() => {
    fetchFullPost()
  }, [fetchFullPost, id])

  if (!post.title) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RotatingTriangles
          visible={!post.title}
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
      <InformationsPost>
        <Headline>
          <Link to={'/'}>
            <FaChevronLeft />
            <span>Voltar</span>
          </Link>
          <a href={post.html_url}>
            <span>Ver no github</span>
            <FaArrowUpRightFromSquare />
          </a>
        </Headline>
        <PostTitle>{post.title}</PostTitle>
        <InfosPost>
          <p>
            <FaGithub size={18} />
            <span>{post.user.login}</span>
          </p>
          <p>
            <FaCalendarDay size={18} />
            <span>{formatDate(post.created_at)}</span>
          </p>
          <p>
            <FaComment size={18} />
            <span>{post.comments} comentários</span>
          </p>
        </InfosPost>
      </InformationsPost>
      <ContentPost>{post.body}</ContentPost>
    </Container>
  )
}
