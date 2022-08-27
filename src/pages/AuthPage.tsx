import React, { FC } from "react"
import AuthForm from "../components/views/AuthForm/AuthForm"
import PageTitle from "../components/UI/PageTitle/PageTitle"

const AuthPage: FC = () => {
  return (
    <>
      <PageTitle>Sign In</PageTitle>
      <AuthForm />
    </>
  )
}

export default AuthPage