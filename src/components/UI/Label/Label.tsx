import React, { ReactNode } from "react"
import classNames from "classnames"
import "./Label.pcss"

export type LabelType = {
  className?: string
  htmlFor: string
  children: ReactNode
}

const Label = (props: LabelType): JSX.Element => {
  const {
    className,
    htmlFor,
    children,
  } = props

  return (
    <label
      className={classNames(className, "label")}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

export default Label