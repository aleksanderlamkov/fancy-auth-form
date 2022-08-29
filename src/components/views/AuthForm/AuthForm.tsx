import React, { FC, lazy } from "react"
import { AppRoute } from "../../../types/const"
import { Link } from "react-router-dom"
import UserForm from "../UserForm/UserForm"

const { signInWithEmailAndPassword } = await import("firebase/auth")

const AuthForm: FC = () => {
  return (
    <UserForm
      fetchFirebase={signInWithEmailAndPassword}
      fetchFirebaseSuccessStatus="Auth is successful. Welcome!"
      submitButtonLabel="Sign In"
      submitButtonIcon="sign-in"
      notice={<>Don't have an account yet? <Link to={AppRoute.register}>Sign Up</Link></>}
      hasPasswordAutoComplete
    />
  )
}

export default AuthForm