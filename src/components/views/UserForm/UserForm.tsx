import React, { ReactNode } from "react"
import { useFormik } from "formik"
import { FormikHelpers } from "formik/dist/types"
import { EmailType } from "../../../types/const"
import * as Yup from "yup"
import classNames from "classnames"
import Grid from "../../UI/Grid/Grid"
import GridItem from "../../UI/Grid/GridItem"
import FormItem from "../../UI/FormItem/FormItem"
import Input from "../../UI/Input/Input"
import Button from "../../UI/Button/Button"
import "./UserForm.pcss"

interface IUserForm {
  className?: string
  onAfterSubmit: (email: EmailType, password: string, formikHelpers: FormikHelpers<any>) => void | Promise<any>
  submitButtonLabel: string
  submitButtonIcon: string
  notice?: ReactNode
  hasPasswordAutoComplete?: boolean
}

const UserForm = (props: IUserForm) => {
  const {
    className,
    onAfterSubmit,
    submitButtonLabel,
    submitButtonIcon,
    notice = null,
    hasPasswordAutoComplete = false,
  } = props

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
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required field")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Required field")
        .min(8, "Your password cannot be less than 8 characters")
        .max(20, "Your password cannot be longer than 20 characters"),
    }),
    initialValues: {
      email: "",
      password: "",
    },
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
        <GridItem>
          <Button className="user-form__submit-button" type="submit" icon={submitButtonIcon}>
            {submitButtonLabel}
          </Button>
          {Boolean(notice) && (
            <div className="user-form__notice">
              {notice}
            </div>
          )}
        </GridItem>
      </Grid>
    </form>
  )
}

export default UserForm