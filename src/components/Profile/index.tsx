import React from 'react'
import { FaBuilding, FaGithub } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { Bio, Container, Infos, Name } from './styles'

export const Profile: React.FC = () => {
  return (
    <Container>
      <img src="//via.placeholder.com/148x148" alt="" />
      <div>
        <Name>John Doe</Name>
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
