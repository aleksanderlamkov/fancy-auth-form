import React, { FC } from "react"
import PageTitle from "../components/UI/PageTitle/PageTitle"
import Error404 from "../components/views/Error404/Error404"

const ErrorPage: FC = () => {
  return (
    <>
      <PageTitle>Error 404</PageTitle>
      <Error404/>
    </>
  )
}

export default ErrorPage