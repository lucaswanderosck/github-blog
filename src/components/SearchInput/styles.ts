import styled from 'styled-components'

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      font-size: ${({ theme }) => theme.sizes.lg};
      line-height: 1.6;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-size: ${({ theme }) => theme.sizes.sm};
      line-height: 1.6;
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  input {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    outline: none;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.sizes.md};
    line-height: 1.6;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
