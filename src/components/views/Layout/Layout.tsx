import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import Content from "../Content/Content"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import StatusBar from "../StatusBar/StatusBar"

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <StatusBar />
    </>
  )
}

export default Layout
