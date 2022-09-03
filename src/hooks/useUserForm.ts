import * as Yup from "yup"

export const emailValidationSchema = Yup.string().required("Required field").email("Invalid email address")

export const useUserForm = (hasPasswordConfirm: boolean = false) => {
  return {
    initialValues: hasPasswordConfirm ? {
      email: "",
      password: "",
      passwordConfirm: "",
    } : {
      email: "",
      password: "",
    },
    validationSchema: Yup.object(
      hasPasswordConfirm ? {
        email: emailValidationSchema,
        password: Yup.string()
          .required("Required field")
          .min(8, "Cannot be less than 8 characters")
          .max(32, "Cannot be more than 32 characters")
          .matches(/^[A-Za-z]+$/, "Only english letters")
          .matches(/[a-z]+/, "Must contain at least one lowercase character")
          .matches(/[A-Z]+/, "Must contain at least one uppercase character")
          .matches(/\d+/, "Must contain at least one number"),
        passwordConfirm: Yup.string()
          .required("Required field")
          .oneOf([ Yup.ref("password") ], "Password must be the same"),
      } : {
        email: emailValidationSchema,
        password: Yup.string().required("Required field"),
      },
    ),
  }
}