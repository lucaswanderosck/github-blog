import React from 'react'
import { PostsList } from '../../components/PostsList'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'

export const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <SearchForm />
      <PostsList />
    </>
  )
}
