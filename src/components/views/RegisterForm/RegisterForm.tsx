import React, { FC, useState } from "react"
import { AppRoute, AuthStatus, EmailType } from "../../../types/const"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { addStatus } from "../../../store/slices/statusesSlice"
import { useAppDispatch } from "../../../hooks/redux"
import { FormikHelpers } from "formik/dist/types"
import { setUser } from "../../../store/slices/userSliсe"
import UserForm from "../UserForm/UserForm"
import firebase from "firebase/compat"
import OAuthCredential = firebase.auth.OAuthCredential

const RegisterForm: FC = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onAfterSubmit = (email: EmailType, password: string, formikHelpers: FormikHelpers<any>) => {
    const { setErrors } = formikHelpers
    const auth = getAuth()

    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      const { user } = response
      const { email, uid: id } = user
      const { accessToken: token = null } = user as unknown as OAuthCredential
      dispatch(setUser({ email, token, id }))
      navigate(AppRoute.index, { replace: true })
      dispatch(addStatus({ label: "Registration is successful. Welcome!" }))
    }).catch(({ code }) => {
      if (code === AuthStatus.emailAlreadyInUse) {
        const label = `Email '${email}' is already use! Please, use another email address.`
        dispatch(addStatus({ label }))
        setErrors({ email: label })
      }
    }).finally(() => setIsLoading(false))
  }

  return (
    <UserForm
      onAfterSubmit={onAfterSubmit}
      submitButtonLabel="Sign Up"
      submitButtonIcon="sign-up"
      notice={<>Already have an account? <Link to={AppRoute.auth}>Sign In</Link></>}
      hasPasswordConfirmField
    />
  )
}

export default RegisterForm