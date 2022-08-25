import React, { ChangeEvent, FocusEvent, forwardRef, Ref } from "react"
import classNames from "classnames"
import Label from "../Label/Label"
import FormError from "../../FormError/FormError"
import "./Input.pcss"

export type InputType = {
  className?: string
  id: string
  name: string
  type?: "text" | "email" | "tel" | "date" | "password" | "url",
  value: string
  error?: string
  label?: string
  placeholder?: string
  autoComplete?: string
  style?: {}
  onChange: (event: ChangeEvent<any>) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
}

const Input = (props: InputType, ref: Ref<HTMLInputElement>): JSX.Element => {
  const {
    className = "",
    id,
    name,
    type = "text",
    value = "",
    error = "",
    label = "",
    placeholder = "",
    autoComplete = "off",
    style = {},
    onChange,
    onBlur,
  } = props

  const hasLabel = Boolean(label)
  const hasError = Boolean(error)

  return (
    <>
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      <input
        className={classNames(className, "input", {
          "is-invalid": hasError,
        })}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        ref={ref}
        style={style}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <FormError>{error}</FormError>}
    </>
  )
}

export default forwardRef(Input)