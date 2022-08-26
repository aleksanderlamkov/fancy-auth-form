import React, { FC, ReactNode } from "react"
import classNames from "classnames"
import "./Container.pcss"

interface IContainer {
  className?: string,
  children: ReactNode,
}

const Container: FC<IContainer> = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <div className={classNames(className, "container")}>
      {children}
    </div>
  )
}

export default Container