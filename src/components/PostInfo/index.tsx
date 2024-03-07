import React from 'react'
import {
    FaCalendarDay,
    FaChevronLeft,
    FaComment,
    FaGithub,
} from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Container, Headline, InfosPost, PostTitle } from './styles'

export const PostInfo: React.FC = () => {
  return (
    <Container>
      <Headline>
        <Link to={'/'}>
          <FaChevronLeft />
          <span>Voltar</span>
        </Link>
        <a href="#">
          <span>Ver no github</span>
          <FaArrowUpRightFromSquare />
        </a>
      </Headline>
      <PostTitle>JavaScript data types and data structures</PostTitle>
      <InfosPost>
        <p>
          <FaGithub size={18} />
          <span>username</span>
        </p>
        <p>
          <FaCalendarDay size={18} />
          <span>Há 1 dia</span>
        </p>
        <p>
          <FaComment size={18} />
          <span>5 comentários</span>
        </p>
      </InfosPost>
    </Container>
  )
}
