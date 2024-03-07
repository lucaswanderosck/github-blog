import styled from 'styled-components'
import bgHeader from '../../assets/bg-header.svg'

export const Container = styled.header`
  background-image: url(${bgHeader});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100vw;
  text-align: center;
`

export const Logo = styled.img`
  margin-top: 3rem;
`
