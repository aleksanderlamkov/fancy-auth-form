import React, { FC } from "react"
import { AppRoute } from "../../../types/const"
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import UserForm from "../UserForm/UserForm"

const RegisterForm: FC = () => {
  return (
    <UserForm
      fetchFirebase={createUserWithEmailAndPassword}
      fetchFirebaseSuccessStatus="Registration is successful. Welcome!"
      submitButtonLabel="Sign Up"
      submitButtonIcon="sign-up"
      notice={<>Already have an account? <Link to={AppRoute.auth}>Sign In</Link></>}
      hasPasswordConfirmField
    />
  )
}

export default RegisterForm