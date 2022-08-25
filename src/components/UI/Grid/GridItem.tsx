import React, { ReactNode } from "react"
import classNames from "classnames"

export type GridItemType = {
  className?: string
  isWide?: boolean
  children: ReactNode
}

const GridItem = (props: GridItemType): JSX.Element => {
  const {
    className,
    isWide = false,
    children,
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