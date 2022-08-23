import React, { ChangeEvent, forwardRef, Ref } from "react"
import classNames from "classnames"
import "./Input.pcss"

export type InputType = {
  className?: string,
  id: string,
  name: string,
  type?: "text" | "email" | "tel" | "date" | "password" | "url",
  value: string,
  placeholder?: string,
  autoComplete?: string,
  style?: {},
  onChange: (event: ChangeEvent<any>) => void,
}

const Input = (props: InputType, ref: Ref<HTMLInputElement>): JSX.Element => {
  const {
    className,
    id,
    name,
    type = "text",
    value,
    placeholder,
    autoComplete = "off",
    style,
    onChange,
  } = props

  return (
    <input
      className={classNames(className, "input")}
      id={name}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      ref={ref}
      style={style}
      onChange={onChange}
    />
  )
}

export default forwardRef(Input)