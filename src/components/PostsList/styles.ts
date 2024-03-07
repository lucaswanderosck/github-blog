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
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  position: relative;

  h4 {
    font-size: ${({ theme }) => theme.sizes.xlg};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors['base-title']};
    width: 250px;
  }

  span {
    font-size: ${({ theme }) => theme.sizes.sm};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors['base-span']};

    position: absolute;
    top: 4px;
    right: 0;
  }
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.sizes.md};
  line-height: 1.6;
`
