import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-profile']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.sizes.md};
  line-height: 1.6;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  display: flex;
  gap: 2rem;
  margin-top: calc(-212px / 2);
  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h3 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.sizes.xxlg};
    line-height: normal;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.sizes.xsm};
    font-weight: bold;
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;

    &:hover {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    svg {
      margin-bottom: 2px;
    }

    span {
      text-transform: uppercase;
    }
  }
`

export const Bio = styled.p`
  line-height: 1.6;
`

export const Infos = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.875rem;

  & > p {
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > svg {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`
