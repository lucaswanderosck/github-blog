import React from 'react'
import { Container, Description, Head, PostItem } from './styles'

export const PostsList: React.FC = () => {
  const formatDescription = (description: string) => {
    const words = description.split(' ')
    const formattedDescription = words.slice(0, 53).join(' ')
    return `${formattedDescription}...`
  }

  const description = `Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = bar; // foo is now a string foo = true;
              // foo is now a boolean`

  return (
    <Container>
      <PostItem to={'/post'}>
        <Head>
          <h4>JavaScript data types and data str</h4>
          <span>Há 1 dia</span>
        </Head>
        <Description>{formatDescription(description)}</Description>
      </PostItem>
      <PostItem to={'/post'}>
        <Head>
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
        </Head>
        <Description>{formatDescription(description)}</Description>
      </PostItem>
      <PostItem to={'/post'}>
        <Head>
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
        </Head>
        <Description>{formatDescription(description)}</Description>
      </PostItem>
      <PostItem to={'/post'}>
        <Head>
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
        </Head>
        <Description>{formatDescription(description)}</Description>
      </PostItem>
      <PostItem to={'/post'}>
        <Head>
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
        </Head>
        <Description>{formatDescription(description)}</Description>
      </PostItem>
      <PostItem to={'/post'}>
        <Head>
          <h4>JavaScript data types and data structures</h4>
          <span>Há 1 dia</span>
        </Head>
        <Description>{formatDescription(description)}</Description>
      </PostItem>
    </Container>
  )
}
