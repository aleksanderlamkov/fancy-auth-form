import React, { FC, ReactNode } from "react"
import classNames from "classnames"
import "./Grid.pcss"

interface IGrid {
  className?: string
  columns?: number
  children: ReactNode
}

const Grid: FC<IGrid> = (props) => {
  const {
    className,
    columns = 1,
    children,
  } = props

  return (
    <div
      className={classNames(className, "grid", {
        [`grid--${columns}`]: columns > 1
      })}
    >
      {children}
    </div>
  )
}

export default Grid