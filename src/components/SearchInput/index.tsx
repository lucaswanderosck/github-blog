import React from 'react'
import { Container } from './styles'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <Container>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>
      <input {...props} />
    </Container>
  )
}
