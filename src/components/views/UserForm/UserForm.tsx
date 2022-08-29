import React, { FC, ReactNode, useState } from "react"
import { useUserForm } from "../../../hooks/useUserForm"
import { AppRoute, AuthStatus, EmailType } from "../../../types/const"
import { UserCredential, Auth } from "@firebase/auth"
import { setUser } from "../../../store/slices/userSliсe"
import { addStatus } from "../../../store/slices/statusesSlice"
import { useAppDispatch } from "../../../hooks/redux"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import Grid from "../../UI/Grid/Grid"
import GridItem from "../../UI/Grid/GridItem"
import FormItem from "../../UI/FormItem/FormItem"
import Input from "../../UI/Input/Input"
import Button from "../../UI/Button/Button"
import Loader from "../../UI/Loader/Loader"
import "./UserForm.pcss"

const { getAuth } = await import("firebase/auth")
const { useFormik } = await import("formik")

interface IUserForm {
  className?: string
  fetchFirebase: (auth: Auth, email: EmailType, password: string) => Promise<UserCredential>,
  fetchFirebaseSuccessStatus: string,
  submitButtonLabel: string
  submitButtonIcon: string
  notice?: ReactNode
  hasPasswordAutoComplete?: boolean
  hasPasswordConfirmField?: boolean
}

const UserForm: FC<IUserForm> = (props) => {
  const {
    className,
    fetchFirebase,
    fetchFirebaseSuccessStatus,
    submitButtonLabel,
    submitButtonIcon,
    notice = null,
    hasPasswordAutoComplete = false,
    hasPasswordConfirmField = false,
  } = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { initialValues, validationSchema } = useUserForm(hasPasswordConfirmField)
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const {
    handleSubmit,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
  } = useFormik({
    onSubmit(values, formikHelpers) {
      const { email, password } = values
      const { setErrors } = formikHelpers
      const auth = getAuth()

      setIsLoading(true)
      fetchFirebase(auth, email, password).then((response) => {
        const { user } = response
        const { email, uid: id } = user
        // @ts-ignore
        const { accessToken: token = null } = user

        dispatch(setUser({ email, token, id }))
        dispatch(addStatus({ label: fetchFirebaseSuccessStatus }))
        navigate(AppRoute.index, { replace: true })
      }).catch(({ code }) => {
        let label = ""

        switch (code) {
          case (AuthStatus.emailAlreadyInUse): {
            label = `Email '${email}' is already use! Please, use another email address.`
            setErrors({ email: label })
            break
          }
          case (AuthStatus.wrongPassword): {
            label = "Password is wrong!"
            setErrors({ password: label })
            break
          }
          case (AuthStatus.userNotFound): {
            label = `User with email '${email}' is not found!`
            setErrors({ email: label })
            break
          }
          case (AuthStatus.tooManyRequests): {
            label = "Too many attempts. Please, try again a bit later!"
            break
          }
          default: {
            break
          }
        }

        if (label) {
          dispatch(addStatus({ label }))
        }
      }).finally(() => setIsLoading(false))
    },
    validationSchema,
    initialValues,
  })

  return (
    <form className={classNames(className, "user-form")} onSubmit={handleSubmit}>
      <Grid>
        <GridItem>
          <FormItem>
            <Input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              error={touched.email ? errors.email : ""}
              label="Email"
              placeholder="example@mail.com"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </GridItem>
        <GridItem>
          <FormItem>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete={hasPasswordAutoComplete ? "current-password" : "off"}
              value={values.password}
              error={touched.password ? errors.password : ""}
              label="Password"
              placeholder="Your password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </GridItem>
        {hasPasswordConfirmField && (
          <GridItem>
            <FormItem>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={values.passwordConfirm || ""}
                error={touched.passwordConfirm ? errors.passwordConfirm : ""}
                label="Confirm password"
                placeholder="Repeat your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
          </GridItem>
        )}
        <GridItem>
          <Button className="user-form__submit-button" type="submit" icon={submitButtonIcon}>
            {submitButtonLabel}
          </Button>
          {Boolean(notice) && <div className="user-form__notice">{notice}</div>}
        </GridItem>
      </Grid>
      <Loader isShown={isLoading} />
    </form>
  )
}

export default UserForm