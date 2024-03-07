import React from 'react'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'

export const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <SearchInput type="text" placeholder="Buscar Conteúdo" />
    </>
  )
}
