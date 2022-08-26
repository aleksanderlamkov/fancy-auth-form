import React, { FC } from "react"
import classNames from "classnames"
import "./SvgIcon.pcss"

interface ISvgIcon {
  className?: string
  name: string
}

const SvgIcon: FC<ISvgIcon> = (props) => {
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