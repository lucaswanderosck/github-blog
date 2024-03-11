import React from 'react'
import {
  FaArrowUpRightFromSquare,
  FaBookBookmark,
  FaBuilding,
  FaGithub,
} from 'react-icons/fa6'
import { RotatingTriangles } from 'react-loader-spinner'
import { api } from '../../lib/axios'
import { Avatar, Bio, Container, Head, Infos } from './styles'

interface GithubUser {
  name: string
  login: string
  company: string
  public_repos: number
  bio: string
  html_url: string
  avatar_url: string
}

export const Profile: React.FC = () => {
  const [user, setUser] = React.useState<GithubUser>({} as GithubUser)

  const fetchUser = React.useCallback(async () => {
    try {
      const response = await api.get('users/lucaswanderosck')
      setUser(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  React.useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (!user.name) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RotatingTriangles
          visible={!user.name}
          height="80"
          width="80"
          ariaLabel="rotating-triangles-loading"
          colors={['#AFC2D4', '#7B96B2', '#3A536B']}
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Container>
    )
  }

  return (
    <Container>
      <Avatar src={user.avatar_url} alt="" />
      <div>
        <Head>
          <h3>{user.name}</h3>
          <a href={user.html_url}>
            <span>Github</span>
            <FaArrowUpRightFromSquare />
          </a>
        </Head>
        <Bio>{user.bio}</Bio>
        <Infos>
          <p>
            <FaGithub size={18} />
            <span>{user.login}</span>
          </p>
          <p>
            <FaBuilding size={18} />
            {user.company ? (
              <span>{user.company}</span>
            ) : (
              <span>Programing Student</span>
            )}
          </p>
          <p>
            <FaBookBookmark size={18} />
            <span>{user.public_repos} repositórios</span>
          </p>
        </Infos>
      </div>
    </Container>
  )
}
