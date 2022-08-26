import React, { FC, ReactNode } from "react"
import classNames from "classnames"
import "./PageTitle.pcss"

interface IPageTitle {
  className?: string
  children: ReactNode
}

const PageTitle: FC<IPageTitle> = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <h1 className={classNames(className, "page-title")}>
      {children}
    </h1>
  )
}

export default PageTitle