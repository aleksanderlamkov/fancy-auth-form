import React, { ChangeEvent, FocusEvent, forwardRef, Ref, useState } from "react"
import classNames from "classnames"
import Label from "../Label/Label"
import FormError from "../FormError/FormError"
import "./Input.pcss"
import Button from "../Button/Button"

interface IInput {
  className?: string
  id: string
  name: string
  type?: "text" | "email" | "tel" | "date" | "password" | "url"
  value: string
  error?: string
  label?: string
  placeholder?: string
  autoComplete?: string
  isDisabled?: boolean
  isReadOnly?: boolean
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"
  style?: {}
  onChange: (event: ChangeEvent<any>) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
}

const Input = (props: IInput, ref: Ref<HTMLInputElement>): JSX.Element => {
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
    isDisabled = false,
    isReadOnly = false,
    inputMode = undefined,
    style = {},
    onChange,
    onBlur,
  } = props

  const [ isPasswordShown, setIsPasswordShown ] = useState(false)
  const hasLabel = Boolean(label)
  const hasError = Boolean(error)
  const isPassword = type === "password"

  const onTogglePasswordVisibilityButtonClick = () => {
    setIsPasswordShown(!isPasswordShown)
  }

  let typeFormatted = type
  if (isPassword && isPasswordShown) {
    typeFormatted = "text"
  }

  return (
    <>
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      <div className="input-wrapper">
        {isPassword && (
          <Button
            className="input-wrapper__button"
            icon={isPasswordShown ? "eye-open" : "eye-closed"}
            isTransparent
            onClick={onTogglePasswordVisibilityButtonClick}
          />
        )}
        <input
          className={classNames(className, "input", {
            "is-invalid": hasError,
          })}
          ref={ref}
          id={name}
          name={name}
          type={typeFormatted}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          disabled={isDisabled}
          readOnly={isReadOnly}
          style={style}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {hasError && <FormError>{error}</FormError>}
    </>
  )
}

export default forwardRef(Input)