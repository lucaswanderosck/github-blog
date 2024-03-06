import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { MainContainer } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}
