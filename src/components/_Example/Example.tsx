import React, { FC } from "react"
import classNames from "classnames"
import "./Example.pcss"

interface IExample {
  className?: string
}

const Example: FC<IExample> = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, "example")}
    >

    </div>
  )
}

export default Example