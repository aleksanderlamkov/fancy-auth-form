import React from "react"
import { AppRoute, AuthStatus, EmailType } from "../../../types/const"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { addStatus } from "../../../store/slices/statusesSlice"
import { useAppDispatch } from "../../../hooks/redux"
import { FormikHelpers } from "formik/dist/types"
import { setUser } from "../../../store/slices/userSliсe"
import UserForm from "../UserForm/UserForm"
import firebase from "firebase/compat"
import OAuthCredential = firebase.auth.OAuthCredential

const AuthForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onAfterSubmit = (email: EmailType, password: string, formikHelpers: FormikHelpers<any>) => {
    const auth = getAuth()
    const { setErrors } = formikHelpers

    signInWithEmailAndPassword(auth, email, password).then((response) => {
      const { user } = response
      const { email, uid: id } = user
      const { accessToken: token = "" } = user as unknown as OAuthCredential
      dispatch(setUser({ email, token, id }))
      navigate(AppRoute.index, { replace: true })
      dispatch(addStatus({ label: "Auth is successful. Welcome!" }))
    }).catch(({ code }) => {
      switch (code) {
        case (AuthStatus.wrongPassword): {
          const label = "Password is wrong!"
          dispatch(addStatus({ label }))
          setErrors({ password: label })
          break
        }
        case (AuthStatus.userNotFound): {
          const label = `User with email '${email}' is not found!`
          dispatch(addStatus({ label }))
          setErrors({ email: label })
          break
        }
        case (AuthStatus.tooManyRequests): {
          dispatch(addStatus({ label: "Too many attempts. Please, try again a bit later!" }))
          break
        }
        default: {
          break
        }
      }
    })
  }

  return (
    <UserForm
      onAfterSubmit={onAfterSubmit}
      submitButtonLabel="Sign In"
      submitButtonIcon="sign-in"
      notice={<>Don't have an account yet? <Link to={AppRoute.register}>Sign Up</Link></>}
      hasPasswordAutoComplete
    />
  )
}

export default AuthForm