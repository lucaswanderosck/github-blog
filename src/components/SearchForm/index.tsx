import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PostContext } from '../../contexts/PostContext'
import { Container } from './styles'

const schema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof schema>

export const SearchForm: React.FC = () => {
  const { posts, fetchPosts } = React.useContext(PostContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(schema),
  })

  const handleSearchPost = (data: SearchFormInputs) => {
    fetchPosts(data.query)
    reset()
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchPost)}>
      <div>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </div>
      <input {...register('query')} type="text" placeholder="Buscar Conteúdo" />
    </Container>
  )
}
