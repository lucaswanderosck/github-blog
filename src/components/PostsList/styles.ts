import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.ul`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const PostItem = styled(Link)`
  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h4 {
    flex: 1;
    overflow: hidden;
    font-size: ${({ theme }) => theme.sizes.xlg};
    line-height: 1.6;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors['base-title']};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    width: max-content;
    font-size: ${({ theme }) => theme.sizes.sm};
    color: ${({ theme }) => theme.colors['base-span']};
    line-height: 1.6;
  }
`

export const Description = styled(Markdown)`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.sizes.md};
  line-height: 1.6;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`
