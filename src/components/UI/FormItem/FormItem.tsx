import React, { ReactNode } from "react"
import classNames from "classnames"
import "./FormItem.pcss"

export type FormItemType = {
  className?: string
  children: ReactNode
}

const FormItem = (props: FormItemType): JSX.Element => {
  const {
    className,
    children,
  } = props

  return (
    <div
      className={classNames(className, "form-item")}
    >
      {children}
    </div>
  )
}

export default FormItem