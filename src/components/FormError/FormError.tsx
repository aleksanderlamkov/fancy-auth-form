import React, { ReactNode } from "react"
import classNames from "classnames"
import "./FormError.pcss"

interface ExampleProps {
  className?: string
  children: ReactNode
}

const FormError = (props: ExampleProps): JSX.Element => {
  const {
    className,
    children,
  } = props

  return (
    <div
      className={classNames(className, "form-error")}
    >
      {children}
    </div>
  )
}

export default FormError