import React, { FC, ReactNode } from "react"
import classNames from "classnames"

interface IGridItem {
  className?: string
  children: ReactNode
  isWide?: boolean
}

const GridItem: FC<IGridItem> = (props) => {
  const {
    className,
    children,
    isWide = false,
  } = props

  return (
    <div
      className={classNames(className, "grid__item", {
        ["grid__item--wide"]: isWide,
      })}
    >
      {children}
    </div>
  )
}

export default GridItem