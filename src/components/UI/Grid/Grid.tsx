import React, { ReactNode } from "react"
import classNames from "classnames"
import "./Grid.pcss"

export type GridType = {
  className?: string
  columns?: number
  children: ReactNode
}

const Grid = (props: GridType): JSX.Element => {
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