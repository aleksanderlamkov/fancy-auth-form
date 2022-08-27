import React, { FC } from "react"
import PageTitle from "../components/UI/PageTitle/PageTitle"
import RegisterForm from "../components/views/RegisterForm/RegisterForm"

const RegisterPage: FC = () => {
  return (
    <>
      <PageTitle>Sign Up</PageTitle>
      <RegisterForm />
    </>
  )
}

export default RegisterPage