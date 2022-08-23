import React from "react"
import "./AuthForm.pcss"
import Input from "../../UI/Input/Input"

const AuthForm = (): JSX.Element => {
  return (
    <form className="auth-form">
      <label htmlFor="auth-email">Email:</label>
      <Input
        id="auth-email"
        name="auth-email"
        value=""
        placeholder="example@mail.com"
        onChange={() => {}}
      />
    </form>
  )
}

export default AuthForm