import React, { FC, ReactNode } from "react"
import { useUserForm } from "../../../hooks/useUserForm"
import { useFormik } from "formik"
import { FormikHelpers } from "formik/dist/types"
import { EmailType } from "../../../types/const"
import classNames from "classnames"
import Grid from "../../UI/Grid/Grid"
import GridItem from "../../UI/Grid/GridItem"
import FormItem from "../../UI/FormItem/FormItem"
import Input from "../../UI/Input/Input"
import Button from "../../UI/Button/Button"
import Loader from "../../UI/Loader/Loader"
import "./UserForm.pcss"

interface IUserForm {
  className?: string
  onAfterSubmit: (email: EmailType, password: string, formikHelpers: FormikHelpers<any>) => void | Promise<any>
  submitButtonLabel: string
  submitButtonIcon: string
  notice?: ReactNode
  hasPasswordAutoComplete?: boolean
  hasPasswordConfirmField?: boolean
  isLoading?: boolean
}

const UserForm: FC<IUserForm> = (props) => {
  const {
    className,
    onAfterSubmit,
    submitButtonLabel,
    submitButtonIcon,
    notice = null,
    hasPasswordAutoComplete = false,
    hasPasswordConfirmField = false,
    isLoading = false,
  } = props

  const { initialValues, validationSchema } = useUserForm(hasPasswordConfirmField)

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
      onAfterSubmit(email, password, formikHelpers)
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