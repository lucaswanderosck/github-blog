import styled from 'styled-components'
import bgHeader from '../../assets/bg-header.svg'

export const Container = styled.header`
  background-image: url(${bgHeader});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100vw;
  text-align: center;

  @media (max-width: 768px) {
    background-image: linear-gradient(to bottom, #071422 0%, #0b1b2b 100%);
  }
`

export const Logo = styled.img`
  margin-top: 3rem;

  @media (max-width: 768px) {
    width: 130px;
  }
`
