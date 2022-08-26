import React, { FC, ReactNode } from "react"
import classNames from "classnames"
import Container from "../../UI/Container/Container"
import "./Content.pcss"

interface IContent {
  className?: string
  children: ReactNode
}

const Content: FC<IContent> = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <main
      className={classNames(className, "content")}
    >
      <Container className="content__body">
        {children}
      </Container>
    </main>
  )
}

export default Content