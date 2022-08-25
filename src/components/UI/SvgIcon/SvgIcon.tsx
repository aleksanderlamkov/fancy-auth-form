import React from "react"
import classNames from "classnames"
import "./SvgIcon.pcss"

interface SvgIconProps {
  className?: string
  name: string
}

const SvgIcon = (props: SvgIconProps) => {
  const {
    className,
    name,
  } = props

  return (
    <svg className={classNames(className, "svg-icon")}>
      <use href={`#icon-${name}`} />
    </svg>
  )
}

export default SvgIcon