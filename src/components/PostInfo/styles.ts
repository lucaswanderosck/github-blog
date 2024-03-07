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

  margin-top: calc(-170px / 2);
  margin-bottom: 4.5rem;
`

export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.sizes.xsm};
    font-weight: bold;
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;

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

export const PostTitle = styled.h3`
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.sizes.xxlg};
  line-height: normal;
  margin-bottom: 0.5rem;
`

export const InfosPost = styled.div`
  display: flex;
  gap: 2rem;

  & > p {
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > svg {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
