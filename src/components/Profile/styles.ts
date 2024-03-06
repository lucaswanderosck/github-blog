import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-profile']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.sizes.md};
  font-size: 16px;
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  gap: 2rem;

  margin-top: calc(-212px / 2);
`

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.sizes.xxlg};
  margin-bottom: 0.5rem;
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
`
