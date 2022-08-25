import React from "react"
import "./AuthForm.pcss"
import Input from "../../UI/Input/Input"
import FormItem from "../../UI/FormItem/FormItem"
import Grid from "../../UI/Grid/Grid"
import GridItem from "../../UI/Grid/GridItem"
import Button from "../../UI/Button/Button"
import { useFormik } from "formik"
import * as Yup from "yup"

const AuthForm = (): JSX.Element => {
  const formik = useFormik({
    onSubmit(values, formikHelpers) {
      const { setErrors, setFieldError } = formikHelpers
      console.debug("values:", values)
      // setErrors({
      //   authPassword: "Wrong password"
      // })
      setFieldError("authPassword", "Wrong password")
    },
    validationSchema: Yup.object({
      authEmail: Yup.string()
        .required("Required field")
        .email("Invalid email address"),
      authPassword: Yup.string()
        .required("Required field")
        .min(8, "Your password cannot be less than 8 characters")
        .max(20, "Your password cannot be longer than 20 characters"),
    }),
    initialValues: {
      authEmail: "",
      authPassword: "",
    }
  })

  return (
    <form className="auth-form" onSubmit={formik.handleSubmit}>
      <Grid>
        <GridItem>
          <FormItem>
            <Input
              id="authEmail"
              name="authEmail"
              type="email"
              value={formik.values.authEmail}
              error={formik.touched.authEmail ? formik.errors.authEmail : ""}
              label="Email"
              placeholder="example@mail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormItem>
        </GridItem>
        <GridItem>
          <FormItem>
            <Input
              id="authPassword"
              name="authPassword"
              type="password"
              value={formik.values.authPassword}
              error={formik.touched.authPassword ? formik.errors.authPassword : ""}
              label="Password"
              placeholder="Your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FormItem>
        </GridItem>
        <GridItem>
          <Button icon="sign-in" type="submit">
            Sign In
          </Button>
        </GridItem>
      </Grid>
    </form>
  )
}

export default AuthForm