import React from 'react'
import { FaBuilding, FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare, FaUserGroup } from 'react-icons/fa6'
import { Avatar, Bio, Container, Head, Infos } from './styles'

export const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar src="//via.placeholder.com/148x148" alt="" />
      <div>
        <Head>
          <h3>John Doe</h3>
          <a href="">
            <span>Github</span>
            <FaArrowUpRightFromSquare />
          </a>
        </Head>
        <Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius
          libero soluta aliquid rem dolorem! Nisi, numquam. Fugiat amet facilis,
        </Bio>
        <Infos>
          <p>
            <FaGithub size={18} />
            <span>username</span>
          </p>
          <p>
            <FaBuilding size={18} />
            <span>empresa</span>
          </p>
          <p>
            <FaUserGroup size={18} />
            <span>32 seguidores</span>
          </p>
        </Infos>
      </div>
    </Container>
  )
}
