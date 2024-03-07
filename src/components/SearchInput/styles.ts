import styled from 'styled-components'

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      font-size: ${({ theme }) => theme.sizes.lg};
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    span {
      font-size: ${({ theme }) => theme.sizes.sm};
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  input {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    outline: none;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.sizes.md};
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
