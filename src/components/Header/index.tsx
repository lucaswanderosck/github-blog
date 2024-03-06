import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Logo } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
    </Container>
  )
}
