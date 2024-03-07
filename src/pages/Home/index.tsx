import React from 'react'
import { PostsList } from '../../components/PostsList'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'

export const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <SearchInput type="text" placeholder="Buscar Conteúdo" />
      <PostsList />
    </>
  )
}
